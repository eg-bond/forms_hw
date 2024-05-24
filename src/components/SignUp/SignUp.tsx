import { FormEvent, ChangeEvent, useRef } from 'react'
import type { OnSubmitT } from '../../App'
import { TextInput } from '../TextInput'

enum InputNames {
  customerName = 'customerName',
  nickname = 'nickname',
  email = 'email',
  password = 'password',
  passwordCheck = 'passwordCheck',
}

function SignUp({ onSubmit }: { onSubmit: OnSubmitT }) {
  const inputs = useRef({
    [InputNames.customerName]: '',
    [InputNames.nickname]: '',
    [InputNames.email]: '',
    [InputNames.password]: '',
    [InputNames.passwordCheck]: '',
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
        type='text'
        name={InputNames.customerName}
        label='Your name'
        placeholder='First and last name'
        size='md'
        radius='lg'
      />
      <TextInput
        type='text'
        name={InputNames.nickname}
        label='Your nickname'
        size='md'
        radius='lg'
      />
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
        placeholder='At least 6 characters'
        size='md'
        radius='lg'
      />
      <TextInput
        type='password'
        name={InputNames.passwordCheck}
        label='Re-enter password'
        size='md'
        radius='lg'
      />
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUp
