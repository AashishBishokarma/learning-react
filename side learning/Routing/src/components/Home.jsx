import React from 'react';
import {useNavigate} from 'react-router-dom'


const Home = () =>{
  const navigate = useNavigate();
  function handleClick (){
    navigate('/about');
  }
  return(
    <div>
      yo ho home page
      <button onClick = {handleClick}>
        Move to home page
      </button>
    </div>
  )
}

export default Home ;