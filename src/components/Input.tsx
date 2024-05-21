function Input({
  placeholder,
  label,
  description,
  error,
  variant,
  radius,
  size,
  disabled,
  asterisk,
}) {
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
      <div className='label'>
        <label htmlFor='input_random_id'>{label}</label>
        {asterisk && <span className='asterisk'>*</span>}
      </div>
      <p>{description}</p>
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
