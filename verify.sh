#!/bin/bash

# Kurogami RWA Marketplace - Project Verification Script

echo "🔍 Kurogami RWA Marketplace - Verification Report"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${BLUE}[1/6] Node.js & npm${NC}"
if command -v node &> /dev/null; then
    echo -e "${GREEN}✓${NC} Node.js $(node --version)"
    echo -e "${GREEN}✓${NC} npm $(npm --version)"
else
    echo -e "${YELLOW}✗${NC} Node.js not found"
fi
echo ""

# Check dependencies
echo -e "${BLUE}[2/6] Dependencies${NC}"
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules installed"
    PACKAGE_COUNT=$(ls node_modules | wc -l)
    echo "   $PACKAGE_COUNT packages installed"
else
    echo -e "${YELLOW}⚠${NC} node_modules not found - run: npm install"
fi
echo ""

# Check file structure
echo -e "${BLUE}[3/6] File Structure${NC}"

FILES=(
    "app/layout.tsx"
    "app/page.tsx"
    "app/globals.css"
    "app/rwa/page.tsx"
    "app/rwa/[id]/page.tsx"
    "app/rwa/claim-path/page.tsx"
    "app/rwa/liquidity-path/page.tsx"
    "components/AssetCard.tsx"
    "components/MetricCard.tsx"
    "components/FilterChip.tsx"
    "components/StatusBadge.tsx"
    "components/GoldButton.tsx"
    "components/PrototypeBadge.tsx"
    "components/WaitlistForm.tsx"
    "components/Header.tsx"
    "components/Footer.tsx"
    "lib/seed-assets.ts"
    "package.json"
    "tsconfig.json"
    "tailwind.config.ts"
)

MISSING=0
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${YELLOW}✗${NC} $file (MISSING)"
        ((MISSING++))
    fi
done

if [ $MISSING -eq 0 ]; then
    echo -e "\n${GREEN}✓${NC} All required files present"
else
    echo -e "\n${YELLOW}⚠${NC} $MISSING files missing"
fi
echo ""

# Check TypeScript
echo -e "${BLUE}[4/6] TypeScript Compilation${NC}"
if command -v npx &> /dev/null; then
    TS_ERRORS=$(npx tsc --noEmit 2>&1 | wc -l)
    if [ $TS_ERRORS -eq 0 ]; then
        echo -e "${GREEN}✓${NC} No TypeScript errors"
    else
        echo -e "${YELLOW}⚠${NC} TypeScript errors found:"
        npx tsc --noEmit
    fi
else
    echo -e "${YELLOW}⚠${NC} npx not available"
fi
echo ""

# Check configuration
echo -e "${BLUE}[5/6] Configuration Files${NC}"
CONFIG_FILES=(
    ".eslintrc.json"
    "next.config.js"
    "postcss.config.js"
    "tsconfig.json"
    "tailwind.config.ts"
)

for config in "${CONFIG_FILES[@]}"; do
    if [ -f "$config" ]; then
        echo -e "${GREEN}✓${NC} $config"
    else
        echo -e "${YELLOW}✗${NC} $config"
    fi
done
echo ""

# Check documentation
echo -e "${BLUE}[6/6] Documentation${NC}"
DOCS=(
    "README.md"
    "BUILD_SUMMARY.md"
    "DEVELOPER_GUIDE.md"
    ".env.example"
    "setup.sh"
)

for doc in "${DOCS[@]}"; do
    if [ -f "$doc" ]; then
        echo -e "${GREEN}✓${NC} $doc"
    else
        echo -e "${YELLOW}⚠${NC} $doc (optional)"
    fi
done
echo ""

# Project statistics
echo -e "${BLUE}Project Statistics${NC}"
echo "===================="

TSX_COUNT=$(find app components lib -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l)
LINES=$(find app components lib -name "*.tsx" -o -name "*.ts" 2>/dev/null -exec wc -l {} + | tail -1 | awk '{print $1}')

echo "TypeScript files: $TSX_COUNT"
echo "Lines of code: $LINES"

COMPONENTS=$(ls components/*.tsx 2>/dev/null | wc -l)
PAGES=$(find app/rwa -name "page.tsx" 2>/dev/null | wc -l)
echo "React components: $COMPONENTS"
echo "Next.js pages: $PAGES"

echo ""
echo "🎯 Asset Data"
ASSETS=$(grep -c '"id":' lib/seed-assets.ts 2>/dev/null || echo "0")
echo "Demo assets: $ASSETS"

echo ""
echo -e "${GREEN}✅ Verification Complete!${NC}"
echo ""
echo "🚀 Quick Start:"
echo "   npm run dev"
echo "   → http://localhost:3000"
echo ""
echo "📖 Documentation:"
echo "   • README.md - Project overview"
echo "   • BUILD_SUMMARY.md - Feature list"
echo "   • DEVELOPER_GUIDE.md - Developer reference"
echo ""
