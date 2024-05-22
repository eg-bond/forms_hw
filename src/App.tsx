import Input from './components/Input'

function App() {
  return (
    <>
      <Input
        placeholder={'somePlaceHolder'}
        label={'SomeLabel'}
        description={'someDesc'}
        variant='unstyled'
        // error={'err'}
        asterisk={true}
        size='sm'
        radius='xl'

        // disabled={true}
      />
    </>
  )
}

export default App
