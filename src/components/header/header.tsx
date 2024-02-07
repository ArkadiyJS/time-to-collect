import React from 'react';
import ToggleSwitch from './toggleSwitch/toggleSwitch';

import { Link } from 'react-router-dom';

function Header({showButtonCreateList,setShowButtonCreateList}) {
  return (
    <span className='Header'>

      <Link to='/'><h1>Time to collect</h1></Link>
       
       <div className='Header__container' > 
       
       <Link to='/history'><span className='history'><h3>История</h3></span></Link>
       
       
       <ToggleSwitch label="Режим админа" 
        showButtonCreateList={showButtonCreateList}
        setShowButtonCreateList={setShowButtonCreateList}
        />
        
        
        </div>
       
        


      </span>
  );
}

export default Header;