import logo from './logo.svg'
import './App.css'
import { Button, VStack } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <VStack spacing={5}>
          <Button onClick={toggleColorMode}>Change Mode to {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
          <Button color="success">Click MEEEE</Button>
        </VStack>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
