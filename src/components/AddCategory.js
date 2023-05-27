import React from 'react';
import { useState } from 'react';


export const AddCategory = ({setcategoria}) => {


const [inputValue, setinputValue] = useState('');

const handledImputChange =(e)=>{
    setinputValue(e.target.value);
}
const handleSubmit=(e)=>{
    
e.preventDefault();
if(inputValue.trim().length>2){
    setcategoria(cats=>([inputValue,...cats,]));
}


}
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} 
        
        onChange={handledImputChange}
        >   
        </input>
        </form>
  )
}
