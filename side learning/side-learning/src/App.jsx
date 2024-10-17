import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
// import Card from './components/Card'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleKey() {
    setCount(count+1);
  }

  return (
    <>

    <Button handleKey={handleKey} text="clickme">
      <h1>{count}</h1>
    </Button>


      {/* <div className='Container'>
      <Card name = "ashish">
        <h1>Best web dev man</h1>
        <p>tyring to keep consistency</p>
        <p>will complete this react with in this week</p>
      </Card>
      <Card children="who is this man">
        this is me who is going to rock
      </Card>
      </div> */}
    
    </>
  )
}

export default App
