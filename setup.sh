#!/bin/bash
set -e

echo "🚀 Kurogami RWA Marketplace - Setup & Run"
echo "=========================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

echo "✓ Node.js $(node --version)"

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✓ Dependencies already installed"
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "⚙️  Creating .env.local from template..."
    cp .env.example .env.local
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "🏃 Starting development server..."
echo "   Open: http://localhost:3000"
echo ""

npm run dev
