

import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/toggleSwitch/toggleSwitch'

function App() {
  const [showInput, setShowInput] = useState(false)
  const [showButtonCreateList, setShowButtonCreateList] = useState(false)


  

  return (
    <div className="App">
      <div className='Header'>
        <button>Вода</button>
        <button>Соки</button>
        <button>Чипсы</button>
        <ToggleSwitch label="Admin" 
        showButtonCreateList={showButtonCreateList}
        setShowButtonCreateList={setShowButtonCreateList}
         
         />
      </div>

      <div>
        <ol>
          <li>иванов </li>
          <li>петров</li>
          <li>сидоров</li>
          
          
        </ol>
      </div>

      { showInput ? 
      <div>
        <input/>
        <button>создать</button>
      </div> 
      : ''}
     
      {showButtonCreateList ?<div>
        <button onClick={()=>{setShowInput(!showInput)}}>Создать список</button>
      </div> : ''}

    </div>
  )
}

export default App
