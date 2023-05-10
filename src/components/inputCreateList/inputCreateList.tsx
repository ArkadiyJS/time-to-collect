import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type  PropsType = {
  
  onSubmitInput: Function,
  
  
  
}

function InputCreateList({onSubmitInput}:PropsType) {

const [inputValue,setInputValue] = useState('')

const handleSubmit = (e:any) => {

  e.preventDefault()

  if (!!inputValue) {

    const newNameList = {
      
      id: uuidv4(),
      name:inputValue,
      timeToBegin:'',
      timeToFinish:'',
      completed:false  

    }

    onSubmitInput(newNameList)
      
    setInputValue('')

  }
}


  return (
    <form onSubmit={handleSubmit}>

      <input  
        placeholder='Введите фамилию и время'
        value={inputValue}
        type='text'
        onChange={(e)=>{setInputValue(e.target.value)}}
        
        />

      <button className='btnCreate' type='submit'
       disabled={ inputValue === '' }
       
       >создать</button>
      
    </form>
  );
}

export default InputCreateList;