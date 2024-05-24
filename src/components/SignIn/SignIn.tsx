import { FormEvent, ChangeEvent, useRef } from 'react'
import type { OnSubmitT } from '../../App'

function SignIn({ onSubmit }: { onSubmit: OnSubmitT }) {
  const inputs = useRef({
    email: '',
    password: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> & FormEvent<HTMLFormElement>
  ) => {
    inputs.current = { ...inputs.current, [e.target.name]: e.target.value }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(inputs.current.email, inputs.current.password)
  }

  return (
    <>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input onChange={handleChange} type='email' name='email' />
        <input onChange={handleChange} type='password' name='password' />
        <button type='submit'>Войти</button>
      </form>
    </>
  )
}

export default SignIn
