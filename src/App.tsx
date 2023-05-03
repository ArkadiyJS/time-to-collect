import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/toggleSwitch/toggleSwitch'
import InputCreateList from './components/inputCreateList/inputCreateList'
import NameList from './components/nameList/nameList'

function App() {

  // Состояния рендеров по условию
  const [showInput, setShowInput] = useState<boolean>(false)
  const [showButtonCreateList, setShowButtonCreateList] = useState<boolean>(false)
  const [showSettingList, setShowSettingList] = useState<boolean>(false)
  

  

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
        <NameList  
          showSettingList={showSettingList}
          setShowSettingList={setShowSettingList}
        
        />
      </div>

      { showInput ? <InputCreateList  /> :  '' }
     
      { showButtonCreateList ? <div>
        <button onClick={()=>{setShowInput(!showInput)}}>Создать список</button>
      </div> : '' }

    </div>
  )
}

export default App
