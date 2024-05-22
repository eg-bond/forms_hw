import Input from './components/Input'

function App() {
  return (
    <>
      <Input
        placeholder={'somePlaceHolder'}
        label={'SomeLabel'}
        description={'someDesc'}
        // error={'err'}
        asterisk={true}
        size='sm'
        radius='xl'
      />
    </>
  )
}

export default App
