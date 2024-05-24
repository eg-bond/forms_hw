import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'

export type OnSubmitT = (args: { [key: string]: string }) => void

const onSubmit: OnSubmitT = args => {
  console.log(args)
}

function App() {
  return (
    <>
      <SignIn onSubmit={onSubmit} />
      <SignUp onSubmit={onSubmit} />
    </>
  )
}

export default App
