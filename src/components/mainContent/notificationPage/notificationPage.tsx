import React from 'react';


// уведомления которые будет видить только админ
function NotificationPage({driverCollect}) {
  return (
    <div>
      {driverCollect.filter(obj => { if (obj.completed === true)return true } ).map((d)=><ul key={d.id} >{d.name} </ul>)}
    </div>
  );
}

export default NotificationPage;