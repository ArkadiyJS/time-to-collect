import { useEffect, useState } from 'react'
import './App.scss'
import ToggleSwitch from './components/header/toggleSwitch/toggleSwitch'
import InputCreateList from './components/inputCreateList/inputCreateList'
import NameList from './components/mainContent/nameList/nameList'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { addDriver } from './store/slice/collectListSlice'
import AuthPage from './components/authPage/authPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import NotificationPage from './components/mainContent/notificationPage/notificationPage'
import ContainerNameList from './components/mainContent/nameList/containerNameList'


function App() {

  // Состояния рендеров по условию

  const [showInput, setShowInput] = useState<boolean>(false)
  const [showButtonCreateList, setShowButtonCreateList] = useState<boolean>(false)
  
  
  // Функции стора

  const dispatch = useAppDispatch()
  const drivers = useAppSelector((state)=>{ return state.collectListSlice.collect}) 



    // что в сторе?
  // console.log(drivers) 


  // заносим данные из стора в стейт и делаем подписку на изменения в сторе
  
  const [driverCollect, setDriverCollect] = useState(drivers)

  useEffect(()=>{setDriverCollect(drivers)},[drivers])

   
  // колл бэк функция (отправки формы в стор)
  const onSubmitInput = (newNameList:any) => {
    dispatch(addDriver(newNameList))
  }
  




  return (
    <BrowserRouter>
    <div className="App">

      

       <Header showButtonCreateList={showButtonCreateList} setShowButtonCreateList={setShowButtonCreateList}/>





        <div>
          <Routes>
            <Route   path='/history'   element={<NotificationPage driverCollect={driverCollect}  /> } />  
            
            <Route path='/' element={<ContainerNameList  driverCollect={driverCollect}  />}/>

          </Routes>
          
          
          

            

              
        </div>
        
        
      { (showButtonCreateList && showInput) ? <InputCreateList onSubmitInput={onSubmitInput} /> :  '' }
     
      { showButtonCreateList ? <div>
        <button className='btnCreateList' onClick={()=>{setShowInput(!showInput)}}>Создать список</button>
      </div> : '' } 

      
      



    </div>
    </BrowserRouter>
  )
}

export default App
