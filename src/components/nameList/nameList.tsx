import React from 'react';


type  PropsType = {
  showSettingList: boolean,
  setShowSettingList: Function,
  
  
}

function NameList({setShowSettingList,showSettingList}:PropsType) {
  


  return (
    <ul>

      <li onClick={()=>{setShowSettingList(!showSettingList)}}>{driverCollect.name}</li>

        <div>{ showSettingList ? <ul>
             <li><span>Начало : время ---</span>  <span>Конец : время</span>  </li>
             <li><button>начать</button> <button>закончить</button> </li>
             </ul> : ''}
        </div> 

    </ul>
  );
}

export default NameList;