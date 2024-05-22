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

type DynamicStyleT = {
  '--input-size': string
  '--input-radius': string
}

const sizes = {
  xs: '0.75',
  sm: '1',
  md: '1.25',
  lg: '1.5',
  xl: '1.75',
}

const radiuses = {
  xs: '0.125',
  sm: '0.25',
  md: '0.5',
  lg: '1',
  xl: '2',
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
  const dynamicStyle: React.CSSProperties & DynamicStyleT = {
    '--input-size': sizes[size],
    '--input-radius': radiuses[radius],
  }

  return (
    <div className={s.inputContainer} style={dynamicStyle}>
      {label && (
        <>
          <label className={s.label} htmlFor='input_random_id'>
            {label}
          </label>
          {asterisk && <span className={s.asterisk}>*</span>}
        </>
      )}
      {description && <p className={s.description}>{description}</p>}
      <input
        className={s.input}
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
