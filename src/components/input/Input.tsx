import { useId } from 'react'
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
  '--input-border-color': string
  '--input-outline-color': string
  '--input-background-color': string
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
    transparent: 'transparent',
  },
  background: {
    default: 'white',
    filled: '#cfcfcf',
  },
} as const

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
  const dynamicStyle = (): React.CSSProperties & Partial<DynamicStyleT> => {
    const inputSize = sizes[size]
    const inputRadius = radiuses[radius]

    const inputColor = error ? colors.value.error : colors.value.default

    const inputPlaceholderColor = error
      ? colors.placeholder.error
      : colors.placeholder.default

    const inputBorderColor = () => {
      if (variant === 'unstyled') return colors.outline.transparent
      if (error) return colors.outline.error
      return colors.background.filled
    }

    const inputOutlineColor = () => {
      if (variant === 'unstyled') return colors.outline.transparent
      if (error) return colors.outline.error
      return colors.outline.default
    }

    const inputBackgroundColor =
      variant === 'filled'
        ? colors.background.filled
        : colors.background.default

    return {
      '--input-size': inputSize,
      '--input-radius': inputRadius,
      '--input-value-color': inputColor,
      '--input-placeholder-color': inputPlaceholderColor,
      '--input-border-color': inputBorderColor(),
      '--input-outline-color': inputOutlineColor(),
      '--input-background-color': inputBackgroundColor,
    }
  }

  const inputId = useId()

  return (
    <div className={s.inputContainer} style={dynamicStyle()}>
      {label && (
        <>
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
          {asterisk && <span className={s.asterisk}>*</span>}
        </>
      )}
      {description && <p className={s.description}>{description}</p>}
      <input
        className={s.input}
        id={inputId}
        type='text'
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  )
}

export default Input
