import { FormEvent, ChangeEvent, useRef } from 'react'
import type { OnSubmitT } from '../../App'
import { TextInput } from '../CustomInputs/TextInput'

enum InputNames {
  email = 'email',
  password = 'password',
}

function SignIn({ onSubmit }: { onSubmit: OnSubmitT }) {
  const inputs = useRef({
    [InputNames.email]: '',
    [InputNames.password]: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> & FormEvent<HTMLFormElement>
  ) => {
    inputs.current = { ...inputs.current, [e.target.name]: e.target.value }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(inputs.current)
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <TextInput
        type='email'
        name={InputNames.email}
        label='Your email'
        size='md'
        radius='lg'
      />
      <TextInput
        type='password'
        name={InputNames.password}
        label='Your password'
        size='md'
        radius='lg'
      />
      <button type='submit'>SignIn</button>
    </form>
  )
}

export default SignIn
