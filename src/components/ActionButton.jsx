function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 9.7 8.7 4 11l5.7 2.3L12 19l2.3-5.7L20 11l-5.7-2.3z" />
    </svg>
  )
}

function iconByType(type) {
  if (type === 'mail') return <MailIcon />
  if (type === 'spark') return <SparkIcon />
  return <ArrowIcon />
}

function ActionButton({
  as = 'a',
  href = '#',
  label,
  icon = 'arrow',
  variant = 'filled',
  className = '',
  onClick,
}) {
  const Tag = as
  return (
    <Tag
      href={as === 'a' ? href : undefined}
      className={`action-btn action-btn--${variant} ${className}`.trim()}
      onClick={onClick}
    >
      <span className="action-btn__label">{label}</span>
      {icon && <span className={`action-btn__icon action-btn__icon--${icon}`}>{iconByType(icon)}</span>}
    </Tag>
  )
}

export default ActionButton
