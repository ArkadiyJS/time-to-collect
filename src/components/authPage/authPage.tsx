import React from 'react';
import s from './authPage.module.scss'
function AuthPage() {
  return (
     <form action="" method="post" className={s.form}>
      <h1>Auth</h1>

        <div className={s.form__field}>
          <input type="email" placeholder="Login"/>
        </div>

        <div className={s.form__field}>
          <input type="password" placeholder="Password"/>
        </div>

        <div className={s.form__field}>
          
          <button type="submit" >Войти</button>
        </div>

      </form>
  );
}

export default AuthPage;