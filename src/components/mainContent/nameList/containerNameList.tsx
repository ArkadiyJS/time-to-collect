import React from 'react';
import NameList from './nameList';

function ContainerNameList({driverCollect}) {
  return (
    <>
      {driverCollect.map((d)=><NameList  key={d.id}
          id={d.id}
          name={d.name}
          timeToBegin={d.timeToBegin}
          timeToFinish={d.timeToFinish}
          completed={d.completed}
            />)}

           <p>
              Всего водителей: {driverCollect.length }
            </p> 
    </>
  );
}

export default ContainerNameList;