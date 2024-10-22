import React,{useState} from 'react';
import ChildA from '../components/ChildA';
import './App.css';
import {createContext} from 'react';

//step1: create Context
// const UserContext = createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: consumer k andar jaake consume karlo
const ThemeContext = createContext();

function App() {
  // const [user,setUser] = useState({name:"Love"});
  const [theme,setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'black':'white'}}>
        <ChildA />
      </div>
      
    </ThemeContext.Provider>




    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA />
    // </UserContext.Provider>
    // </>
  )
}

export default App;
// export {UserContext}
export {ThemeContext}
