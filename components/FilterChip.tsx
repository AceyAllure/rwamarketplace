interface FilterChipProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'bg-gold-600 text-black'
          : 'bg-surface-light text-cream border border-surface-light hover:border-gold-600/50'
      }`}
    >
      {label}
    </button>
  )
}
