import React from 'react';
import s from './personalAccount.module.css'
function PersonalAccount(props) {



  const testSmens = [{
    dateSession: `30/04/2024`,
    type: `Сок-чипсы`,
    volume: `300`
  }, {
    dateSession: `30/04/2024`,
    type: `Вода`,
    volume: `5550`
  }, {
    dateSession: `30/04/2024`,
    type: `Сок-чипсы`,
    volume: `3400`
  }, {
    dateSession: `30/04/2024`,
    type: `Сок-чипсы`,
    volume: `100`
  }, {
    dateSession: `30/04/2024`,
    type: `Вода`,
    volume: `200`
  }, {
    dateSession: `30/04/2024`,
    type: `Вода`,
    volume: `200`
  }, {
    dateSession: `30/04/2024`,
    type: `Вода`,
    volume: `200`
  }]






  return (
    <div>
      <div className={s.header}>
        <img className={s.ava} src='https://avatars.dzeninfra.ru/get-zen_doc/3683658/pub_60290fb4c219c97e327244d2_602fb5115f462a3bfde400d1/scale_1200'></img>
        <h1>Аркадий ``name``</h1>
      </div>

      <h2>Мои cмены:</h2>

      <div className={s.groopInfo}>
        {testSmens.map((inf) => (<table className={s.table}>
          <tr><td>Дата:</td> <td>{inf.dateSession}</td></tr>
          <tr><td>Тип сборки:</td> <td>{inf.type}</td></tr>
          <tr><td>Количество:</td> <td>{inf.volume}</td></tr>
        </table>))}
      </div>



    </div>
  );
}

export default PersonalAccount;