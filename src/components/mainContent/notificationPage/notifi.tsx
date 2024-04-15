import React from 'react'




import s from './notifi.module.css'





function Notifi({name}) {

const defaultText = 'готов к проверке!'

const viewDivEl = `${name} , ${defaultText} `






  return (
    <div className={s.notification}>
      
      <span className={s.text}> {viewDivEl}</span>
      
      </div>)
}

export default Notifi