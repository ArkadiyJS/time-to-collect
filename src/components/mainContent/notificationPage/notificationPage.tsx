import React from 'react';


// уведомления которые будет видить только админ
function NotificationPage({driverCollect}) {





const filteredDriverCollect = driverCollect.filter(obj => { if (obj.completed === true)return true } )





  return (
    <div>
      {filteredDriverCollect.map((d)=><ul key={d.id} >{d.name} </ul>)}



      <p>Водителей собрано: {filteredDriverCollect.length}</p>
    </div>
  );
}

export default NotificationPage;