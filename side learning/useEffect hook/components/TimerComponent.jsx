import React, {useState, useEffect} from 'react';

function TimeComponenet(){
  const [second,setSecond]=useState(0);

  useEffect(()=>{
    const intervalId = setInterval(() => {
      console.log("setInterval executed");
      setSecond(prevSecond => prevSecond+1);
    },1000);

    return () => {
      console.log('Time to stop');
      clearInterval(intervalId);
    };
  },[]);
  //it will run only on first time

  return (
    <div>
      <h2>Second : {second}</h2>
    </div>
  );
}

export default TimeComponenet ;