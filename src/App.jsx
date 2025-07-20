import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    let [counter,setCounter] = useState(56)
    // it is responisable to  change state  means propoget in ui(dom) in 
    //setCounter is mathod(function) to responsible for handle to the update counter(variable) 
    // let counter = 56

    const addValue = () => {
      counter = counter + 1
      setCounter(counter)
      // setCounter(counter + 1)
      console.log("add value",counter);

      
      
    }
    
    const removeValue = () => {
      setCounter(counter - 1)
      console.log("remove value",counter)
    }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button onClick = {addValue}>Add vlaue :{counter}</button>
    <br/>
    <button onClick = {removeValue}>Remove value :{counter}</button>
    </>
  )
}

export default App
