import Input from './components/input/Input'

function App() {
  return (
    <>
      <Input
        placeholder={'somePlaceHolder'}
        label={'SomeLabel'}
        description={'someDesc'}
        // variant='unstyled'
        // error={'err'}
        asterisk={true}
        size='xl'
        radius='sm'

        // disabled={true}
      />
    </>
  )
}

export default App
