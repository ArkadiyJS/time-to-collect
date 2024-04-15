import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { addDriver } from './store/slice/collectListSlice'


import AuthPage from './components/authPage/authPage'
import InputCreateList from './components/inputCreateList/inputCreateList'
import Header from './components/header/header'
import NotificationPage from './components/mainContent/notificationPage/notificationPage'
import ContainerNameList from './components/mainContent/nameList/containerNameList'


import './App.scss'
import RegistorPage from './components/registorPage/registorPage'



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

      
        <Routes>
          <Route path='/' element={<Header showButtonCreateList={showButtonCreateList} setShowButtonCreateList={setShowButtonCreateList}/>}/>
        </Routes>
       




        <div>
          <Routes>
            <Route   path='/history'   element={<NotificationPage driverCollect={driverCollect}  /> } />  
             <Route path='/registration' element={<RegistorPage/>}/>
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
