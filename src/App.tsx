import { useEffect, useState } from 'react'
import './App.css'
import ToggleSwitch from './components/toggleSwitch/toggleSwitch'
import InputCreateList from './components/inputCreateList/inputCreateList'
import NameList from './components/nameList/nameList'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { addDriver } from './store/slice/collectListSlice'

function App() {

  // Состояния рендеров по условию
  const [showInput, setShowInput] = useState<boolean>(false)
  const [showButtonCreateList, setShowButtonCreateList] = useState<boolean>(false)
  const [showSettingList, setShowSettingList] = useState<boolean>(false)
  
  const dispatch = useAppDispatch()

  const driverss = useAppSelector((state)=>{ return state.collectListSlice.collect}) 

  
  
  const [driverCollect, setDriverCollect] = useState(driverss)
  
   useEffect(( )=>{
    setDriverCollect(driverss)
   },[driverss])

   console.log(driverCollect)

   const onSubmitInput = (newNameList:any)=>{
    dispatch(addDriver(newNameList))
   }

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

      {driverCollect.map((d)=><NameList  key={d.id}
        id={d.id}
        name={d.name}
        timeToBegin={d.timeToBegin}
        timeToFinish={d.timeToFinish}
        completed={d.completed}
         
        showSettingList={showSettingList}
        setShowSettingList={setShowSettingList}
        
        />)}
        
      </div>

      { showInput ? <InputCreateList onSubmitInput={onSubmitInput} /> :  '' }
     
      { showButtonCreateList ? <div>
        <button onClick={()=>{setShowInput(!showInput)}}>Создать список</button>
      </div> : '' }

    </div>
  )
}

export default App
