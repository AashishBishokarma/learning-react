import React,{useContext} from 'react';
import {ThemeContext} from '../src/App'


const ChildC = () =>{
  // const user = useContext(UserContext);
  const {theme,setTheme} = useContext(ThemeContext);
  function colorChange(){
    if(theme ==='light')
      setTheme('dark')
    else
      setTheme('light')

    console.log(theme);
  }
  return(
    <>
     <button onClick={colorChange}>Change Theme</button>
    </>
  )
};

export default ChildC;