import React,{useState} from 'react'
import {Products} from './Products'

export default function App() {
  const [filter, setFilter]=useState(false);

  const handleCheckbox=(e)=>{
    if(e.target.checked){
      // console.log(true);
      setFilter(true);
    }
    else{
      // console.log(false);
      setFilter(false);
    }
  }
  return (
    <div>
        <Products filter={filter}/>
        <input type='checkbox' onChange={handleCheckbox}></input>
    </div>
  )
}
