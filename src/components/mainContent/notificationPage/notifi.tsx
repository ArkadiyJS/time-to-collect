import React from 'react'
import s from './notifi.module.css'



function Notifi({name}) {
  return (
    <div className={s.notification}>
      <span className={s.text}> {name} готов к проверке!</span>
      </div>)
}

export default Notifi