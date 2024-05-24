import { SignIn } from './components/SignIn'

export type OnSubmitT = (email: string, password: string) => void

function App() {
  const onSubmit: OnSubmitT = (email, password) => {
    console.log(email)
    console.log(password)
  }

  return (
    <>
      <SignIn onSubmit={onSubmit} />
    </>
  )
}

export default App
