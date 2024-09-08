import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClockHeading from './components/ClockHeading'
import CurrentTime from './components/CurrentTime'
import ClockSloagn from './components/ClockSlogan'
import ClockSlogan from './components/ClockSlogan'



function App() {

  return (
    <center>
      <ClockHeading />
      <ClockSlogan /> 
      <CurrentTime />
    </center>
    
  )
}

export default App;
