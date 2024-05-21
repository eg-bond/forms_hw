import s from './styles.module.css'

type InputOptionsT = {
  label?: string
  asterisk?: boolean
  description?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  variant?: 'default' | 'filled' | 'unstyled'
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

function Input({
  placeholder,
  label,
  description,
  error,
  variant = 'default',
  radius = 'sm',
  size = 'sm',
  disabled = false,
  asterisk = false,
}: InputOptionsT) {
  const inputSize = size
  const inputVariant = variant
  const inputRadius = radius

  const inputStyle = {
    inputSize,
    inputVariant,
    inputRadius,
  }

  return (
    <div>
      {label && (
        <>
          <label className={s.label} htmlFor='input_random_id'>
            {label}
          </label>
          {asterisk && <span className={s.asterisk}>*</span>}
        </>
      )}
      {description && <p>{description}</p>}
      <input
        id='input_random_id'
        type='text'
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p>{error}</p>}
    </div>
  )
}

export default Input
