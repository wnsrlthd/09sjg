export default function Button({ children, type = 'button', variant = 'primary', onClick, className = '', disabled = false }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
