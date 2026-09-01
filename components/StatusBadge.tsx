interface StatusBadgeProps {
  status: 'Open' | 'Coming Soon' | 'Reserved'
  className?: string
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'
  
  const statusClasses = {
    'Open': 'bg-neon-green/20 text-neon-green border border-neon-green/50 shadow-lg shadow-neon-green/20',
    'Coming Soon': 'bg-neon-purple/20 text-neon-purple border border-neon-purple/50 shadow-lg shadow-neon-purple/20',
    'Reserved': 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 shadow-lg shadow-neon-cyan/20',
  }
  
  return (
    <span className={`${baseClasses} ${statusClasses[status]} ${className}`}>
      {status}
    </span>
  )
}
