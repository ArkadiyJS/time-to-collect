import React from 'react';
import s from './authPage.module.scss'


function AuthPage() {

  return (

     <form  className={s.form}>
        

        <input type="email" placeholder="Login"/>
        
        <input type="password" placeholder="Password"/>
          
        <button className='btnCreateList' >Войти</button>
        

      </form>
  );
}

export default AuthPage;