import React, { useState } from 'react';


type  PropsType = {
  
    id: string;
    name: string;
    timeToBegin: string;
    timeToFinish: string;
    completed:boolean;
  }



function NameList({completed,timeToFinish,timeToBegin,name,id}:PropsType) {

//  состояние рендера по условию 
  const [showSettingList, setShowSettingList] = useState<boolean>(false)


  const [hourDigitalBegin, setHourDigitalBegin] = useState<number>(0);
  const [minutesDigitalBegin, setMinutesDigitalBegin] = useState<number>(0);

  const giveMeTimeBegin = () => {

    const date:Date = new Date();

    const HH:number = date.getHours()
    const MM:number = date.getMinutes()
    
    setHourDigitalBegin(HH);
    setMinutesDigitalBegin(MM);
  }

  // константа время начало сборки часы : минуты
  const begin = `${hourDigitalBegin}:${minutesDigitalBegin}`

  const [hourDigitalFinish, setHourDigitalFinish] = useState<number>(0);
  const [minutesDigitalFinish, setMinutesDigitalFinish] = useState<number>(0);

  const giveMeTimeFinish = () => {
    const date:Date = new Date();

    const HH:number = date.getHours()
    const MM:number = date.getMinutes()
    
    setHourDigitalFinish(HH);
    setMinutesDigitalFinish(MM);
  }
  // константа время завершения  сборки часы : минуты
const finish = `${hourDigitalFinish}:${minutesDigitalFinish}`

// вычесляем сколько времени ушло на сборку
 const sumHour = (  hourDigitalFinish - hourDigitalBegin)
 const sumMin = ( minutesDigitalFinish - minutesDigitalBegin )
 const sumTimeToCollect = `${sumHour}ч. ${sumMin}м.`
//  



  return (
    <ul className='nameList'>

      <li onClick={()=>{setShowSettingList(!showSettingList)}}>{name}---<span>Н:{begin} К:{finish}</span></li>

        <div>{ showSettingList ? <ul>
             <li><span>Длительность:{ hourDigitalFinish && sumTimeToCollect} </span>  </li>
             <li><button disabled={hourDigitalBegin !== 0} onClick={()=>giveMeTimeBegin()}>начать</button> <button disabled={hourDigitalFinish !== 0}   onClick={()=>giveMeTimeFinish()}>закончить</button> </li>
             </ul> : ''}
        </div> 

    </ul>
  );
}

export default NameList;