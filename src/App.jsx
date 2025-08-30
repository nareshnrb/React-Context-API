import React, { createContext, useState } from 'react'

import Parent from './components/Parent'



const ThemeContext =createContext()

const App = () => {

  const [theme, setTheme] =useState("light")
  return (
    <div 
    style ={{background:theme=="light" ?"white" :"black",
    color:theme==="light"?"black" :"white",
    width:"100vw",
    height:"100vh",
    
    }}>

<h2>Theme Changer</h2>


<ThemeContext.Provider value ={{theme, setTheme}}>

<Parent />


 </ThemeContext.Provider>


    </div>
  )
}

export default App

export {ThemeContext}