import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { upDateTimeToBegin } from '../../../store/slice/collectListSlice'
import { upDateTimeToFinish } from '../../../store/slice/collectListSlice'


type  PropsType = {
  
    id: string;
    name: string;
    timeToBegin: string;
    timeToFinish: string;
    completed:boolean;
  }



function NameList({completed,timeToFinish,timeToBegin,name,id}:PropsType) {


  const dispatch = useAppDispatch();


//  состояние рендера по условию 
  const [showSettingList, setShowSettingList] = useState<boolean>(false)


  const [hourDigitalBegin, setHourDigitalBegin] = useState<number>(0);
  const [minutesDigitalBegin, setMinutesDigitalBegin] = useState<number>(0);

  const giveMeTimeBegin = (id) => {

    const date:Date = new Date();

    const HH:number = date.getHours()
    const MM:number = date.getMinutes()
    
    setHourDigitalBegin(HH);
    setMinutesDigitalBegin(MM);

      const begins =`${HH}ч:${MM}м`
    upDateStor(id,begins)


  }

  // константа время начало сборки часы : минуты
  const begin = `${hourDigitalBegin}ч:${minutesDigitalBegin}м`

  const [hourDigitalFinish, setHourDigitalFinish] = useState<number>(0);
  const [minutesDigitalFinish, setMinutesDigitalFinish] = useState<number>(0);

  const giveMeTimeFinish = (id) => {
    const date:Date = new Date();

    const HH:number = date.getHours()
    const MM:number = date.getMinutes()
    
    setHourDigitalFinish(HH);
    setMinutesDigitalFinish(MM);
    
    const finishs =`${HH}ч:${MM}м`
    upDateStorFinish(id,finishs)


    
  }
  // константа время завершения  сборки часы : минуты
const finish = `${hourDigitalFinish}ч:${minutesDigitalFinish}м`

// вычесляем сколько времени ушло на сборку
 const sumHour = (  hourDigitalFinish - hourDigitalBegin)
 const sumMin = ( minutesDigitalFinish - minutesDigitalBegin )
 const sumTimeToCollect = `${sumHour}ч. ${sumMin}м.`
//  

 const upDateStor =(id,begin) =>{
  const upDate = {id:id,value:begin}
  dispatch(upDateTimeToBegin(upDate))
}

const upDateStorFinish =(id,finish) =>{
  const upDateFinish = {id:id,value:finish}
  dispatch(upDateTimeToFinish(upDateFinish))
}


  return (
    <ul className='nameList'>

      <li style={ (finish === `0ч:0м`) ? {color:'red'} : {color:'green'} }  onClick={()=>{setShowSettingList(!showSettingList) }}>{name}---<span >Начало:{begin} Конец:{finish}</span></li>

        <div>{ showSettingList ? <ul>
             <li><span>Длительность:{ hourDigitalFinish && sumTimeToCollect} </span>  </li>
             <li>
                <button 
                className='btnUse'
                disabled={hourDigitalBegin !== 0}
                onClick={()=>{giveMeTimeBegin(id)
                }}> начать
                </button>
                
                <button className='btnUse'
                disabled={hourDigitalFinish !== 0}
                onClick={()=>giveMeTimeFinish(id)}> закончить
                </button>
                 
              </li>
             </ul> : ''}
        </div> 

    </ul>
  );
}

export default NameList;