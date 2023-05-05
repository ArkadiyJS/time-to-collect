import React from 'react';


type  PropsType = {
  showSettingList: boolean,
  setShowSettingList: Function,
    id: string;
    name: string;
    timeToBegin: string;
    timeToFinish: string;
    completed:boolean;
  
  
  
  
}



function NameList({completed,timeToFinish,timeToBegin,name,id,setShowSettingList,showSettingList}:PropsType) {
  


  return (
    <ul>

      <li onClick={()=>{setShowSettingList(!showSettingList)}}>{name}</li>

        <div>{ showSettingList ? <ul>
             <li><span>Начало : {timeToBegin} ---</span>  <span>Конец : {timeToFinish}</span>  </li>
             <li><button>начать</button> <button>закончить</button> </li>
             </ul> : ''}
        </div> 

    </ul>
  );
}

export default NameList;