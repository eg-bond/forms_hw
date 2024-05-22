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
  '--input-value-color': string
  '--input-placeholder-color': string
  '--input-outline-color': string
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

const colors = {
  placeholder: {
    default: 'gray',
    error: 'red',
  },
  value: {
    default: 'black',
    error: 'red',
  },
  outline: {
    default: '#3ab3ff',
    error: 'red',
  },
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
    '--input-value-color': error ? colors.value.error : colors.value.default,
    '--input-placeholder-color': error
      ? colors.placeholder.error
      : colors.placeholder.default,
    '--input-outline-color': error
      ? colors.outline.error
      : colors.outline.default,
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
      {error && <p className={s.error}>{error}</p>}
    </div>
  )
}

export default Input
