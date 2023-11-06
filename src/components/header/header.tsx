import React from 'react';
import ToggleSwitch from './toggleSwitch/toggleSwitch';

function Header({showButtonCreateList,setShowButtonCreateList}) {
  return (
    <span className='Header'>

       <h1>Time to collect</h1>
        <ToggleSwitch label="Режим админа" 
        showButtonCreateList={showButtonCreateList}
        setShowButtonCreateList={setShowButtonCreateList}
        />
      </span>
  );
}

export default Header;