interface GoldButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function GoldButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: GoldButtonProps) {
  const baseClasses = 'font-medium transition-all duration-200 rounded-lg inline-block uppercase tracking-wider'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-neon-cyan to-neon-blue hover:shadow-glow-intense-cyan text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-neon-cyan text-neon-cyan hover:shadow-glow-cyan hover:bg-neon-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={finalClasses}>
        {children}
      </a>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={finalClasses}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
