interface FilterChipProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-black shadow-glow-intense-cyan'
          : 'bg-surface-light text-cream border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-glow-cyan'
      }`}
    >
      {label}
    </button>
  )
}
