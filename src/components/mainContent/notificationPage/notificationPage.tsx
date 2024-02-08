import React from 'react';
import Notifi from './notifi';


// уведомления которые будет видить только админ
function NotificationPage({driverCollect}) {





const filteredDriverCollect = driverCollect.filter(obj => { if (obj.completed === true)return true } )





  return (
    <div>
      

      {filteredDriverCollect.map((d)=><Notifi key={d.id} name={d.name} />)}
      
      
      

      <p>Водителей собрано: {filteredDriverCollect.length}</p>
    </div>
  );
}

export default NotificationPage;