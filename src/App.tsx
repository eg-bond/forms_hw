import Input from './components/Input'

function App() {
  return (
    <>
      <div>Hello</div>
      <Input
        placeholder={'somePlaceHolder'}
        label={'SomeLabel'}
        description={'someDesc'}
        error={'err'}
        asterisk={true}
        disabled={true}
      />
    </>
  )
}

export default App
