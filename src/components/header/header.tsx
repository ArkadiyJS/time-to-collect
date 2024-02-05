import React from 'react';
import ToggleSwitch from './toggleSwitch/toggleSwitch';

function Header({showButtonCreateList,setShowButtonCreateList}) {
  return (
    <span className='Header'>

       <h1>Time to collect</h1>
       <div className='Header__container' > <span className='history'><h3>История</h3></span><ToggleSwitch label="Режим админа" 
        showButtonCreateList={showButtonCreateList}
        setShowButtonCreateList={setShowButtonCreateList}
        /></div>
       
        


      </span>
  );
}

export default Header;