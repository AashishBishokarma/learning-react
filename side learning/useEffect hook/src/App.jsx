import {useEffect,useState} from 'react'
import './App.css'
import LoggerComponent from '../components/LoggerComponents'
import TimeComponenet from '../components/TimerComponent'
import DataFetcher from '../components/DataFetcher'
import MultiEffectComponent  from '../components/MultiEffectComponent'

function App() {
  // const[count,setCount] = useState(0);
  // const[total,setTotal] = useState(0);

  // first->side-effect function
  // second -> clean-up function
  //third -> comma separated dep list

  // variation:1
  // runs on every render
  // useEffect (()=>{
  //   alert("I will run on each render");
  // })

  // variation:2
  // runs on first time of render
  // useEffect(()=>{
  //   alert("I will run only first time of render");
  // },[])

  //  varitation:3
  // runs on every update of count
  // useEffect(()=>{
  //   alert("I will run only first time of render");
  // },[count])

  // variation:4
  // multiple dependencies
  // useEffect(()=>{
  //   alert("I will run only first time of render");
  // },[count,total])

  // variation:5
  // iss baar let's add a cleanup function
  // useEffect(()=>{
  //   alert("Count is updated");

  //   return()=>{
  //     alert("count is unmounted from UI");
  //   }
  // },[count])



  // function handleClick(){
  //   setCount(count+1);
    
  // }
  // function handleClickTotal(){
  //   setTotal(total+1);
  // }

  return (
    <div>
      <MultiEffectComponent />
      {/* <TimeComponenet/> */}
      {/* <LoggerComponent /> */}
      {/* <DataFetcher /> */}
      {/* Count is : {count}
      <br/>
      <button onClick={handleClick}>
        Click me
      </button>
      <br/>
      total is : {total}
      <br/>
      <button onClick={handleClickTotal}>
        Click me
      </button> */}
    </div>
  )
}

export default App
