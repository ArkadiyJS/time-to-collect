import React, { useState } from 'react';

function InputCreateList() {

const [inputValue,setInputValue] = useState('')


  return (
    <form>

      <input  placeholder='Введите фамилию и время'  value={inputValue} />

      <button>создать</button>
      
    </form>
  );
}

export default InputCreateList;