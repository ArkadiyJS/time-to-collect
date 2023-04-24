import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/toggleSwitch/toggleSwitch'

function App() {
  const [showInput, setShowInput] = useState(false)
  const [showButtonCreateList, setShowButtonCreateList] = useState(false)
  const [showSettingList, setShowSettingList] = useState(false)

  

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
        <ul>

          <li onClick={()=>{setShowSettingList(!showSettingList)}}>Иванов</li>

          <div>{showSettingList ? <ul>
             <li><span>Начало : время ---</span>  <span>Конец : время</span>  </li>
             <li><button>начать</button> <button>закончить</button> </li>
             </ul> : ''}
          </div> 

        </ul>
      </div>

      { showInput ? 
      <div>
        <input/>
        <button>создать</button>
      </div> 
      : ''}
     
      { showButtonCreateList ? <div>
        <button onClick={()=>{setShowInput(!showInput)}}>Создать список</button>
      </div> : '' }

    </div>
  )
}

export default App
