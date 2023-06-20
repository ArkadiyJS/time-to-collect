import { useEffect, useState } from 'react'
import './App.css'
import ToggleSwitch from './components/toggleSwitch/toggleSwitch'
import InputCreateList from './components/inputCreateList/inputCreateList'
import NameList from './components/nameList/nameList'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { addDriver } from './store/slice/collectListSlice'
import AuthPage from './components/authPage/authPage'

function App() {

  // Состояния рендеров по условию

  const [showInput, setShowInput] = useState<boolean>(false)
  const [showButtonCreateList, setShowButtonCreateList] = useState<boolean>(false)
  
  
  // Функции стора

  const dispatch = useAppDispatch()
  const drivers = useAppSelector((state)=>{ return state.collectListSlice.collect}) 

  
  // заносим данные из стора в стейт и делаем подписку на изменения в сторе
  
  const [driverCollect, setDriverCollect] = useState(drivers)

  useEffect(()=>{setDriverCollect(drivers)},[drivers])

   
  // колл бэк функция (отправки формы в стор)
  const onSubmitInput = (newNameList:any) => {
    dispatch(addDriver(newNameList))
  }
  




  return (
    <div className="App">

      <AuthPage />

      {/* <span className='Header'>

       <h1>Time to collect</h1>
        <ToggleSwitch label="Режим админа" 
        showButtonCreateList={showButtonCreateList}
        setShowButtonCreateList={setShowButtonCreateList}
        />
      </span>



     

        <div>{driverCollect.map((d)=><NameList  key={d.id}
          id={d.id}
          name={d.name}
          timeToBegin={d.timeToBegin}
          timeToFinish={d.timeToFinish}
          completed={d.completed}
            />)}
        </div>

      { (showButtonCreateList && showInput) ? <InputCreateList onSubmitInput={onSubmitInput} /> :  '' }
     
      { showButtonCreateList ? <div>
        <button className='btnCreateList' onClick={()=>{setShowInput(!showInput)}}>Создать список</button>
      </div> : '' } */}

    </div>
  )
}

export default App
