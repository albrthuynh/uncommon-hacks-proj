import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className = "text-red-900">Hello World</p>
      </div> 

      <Button variant = "contained">
        Hello
      </Button>
    </>
  )
}

export default App
