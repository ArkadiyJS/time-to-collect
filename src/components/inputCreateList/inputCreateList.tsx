import React, { useState } from 'react';

function InputCreateList() {

const [inputValue,setInputValue] = useState('')

const handleSubmit = (e:any) => {

  e.preventDefault()

  if (!!inputValue) {

    const newNameList = {
      
      id: '1',
      name:inputValue,
      timeToBegin:'',
      timeToFinish:'',
      completed:false  

    }

    // callBackFunction(newNameList)

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

      <button type='submit'
       disabled={ inputValue === '' }
       
       >создать</button>
      
    </form>
  );
}

export default InputCreateList;