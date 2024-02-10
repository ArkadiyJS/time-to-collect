import React from 'react';
import Notifi from './notifi';
import { Link } from 'react-router-dom';

// уведомления которые будет видить только админ
function NotificationPage({driverCollect}) {





const filteredDriverCollect = driverCollect.filter(obj => { if (obj.completed === true)return true } )





  return (
    <div>
      <Link to='/'><h1 className='head__notif'>Time to collect</h1></Link>

      {filteredDriverCollect.map((d)=><Notifi key={d.id} name={d.name} />)}
      
      
      

      <p>Водителей собрано: {filteredDriverCollect.length}</p>
    </div>
  );
}

export default NotificationPage;