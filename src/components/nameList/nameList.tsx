import React, { useState } from 'react';


type  PropsType = {
  
    id: string;
    name: string;
    timeToBegin: string;
    timeToFinish: string;
    completed:boolean;
  }



function NameList({completed,timeToFinish,timeToBegin,name,id}:PropsType) {

  const [hourDigitalBegin, setHourDigitalBegin] = useState<number>(0);
  
  const [minutesDigitalBegin, setMinutesDigitalBegin] = useState<number>(0);

  const giveMeTimeBegin = () => {
    const date:Date = new Date();

    const HH:number = date.getHours()
    const MM:number = date.getMinutes()
    

    
    setHourDigitalBegin(HH);
    setMinutesDigitalBegin(MM);

    
  }
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
const finish = `${hourDigitalFinish}:${minutesDigitalFinish}`

const [showSettingList, setShowSettingList] = useState<boolean>(false)

  return (
    <ul>

      <li onClick={()=>{setShowSettingList(!showSettingList)}}>{name}  Н:{begin} К:{finish}</li>

        <div>{ showSettingList ? <ul>
             <li><span>Начало : {begin} ---</span>  <span>Конец : {finish}</span>  </li>
             <li><button disabled={hourDigitalBegin !== 0} onClick={()=>giveMeTimeBegin()}>начать</button> <button disabled={hourDigitalFinish !== 0} onClick={()=>giveMeTimeFinish()}>закончить</button> </li>
             </ul> : ''}
        </div> 

    </ul>
  );
}

export default NameList;