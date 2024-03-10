import React, { useState } from 'react';
import '../App.css'

export default function Cal() {
  const [inputvalue, setInput]= useState("")
  const [outputvalue, setOutput]= useState("")
  const handleClick = (value) => {
    if (value === '=') {
      setOutput(eval(inputvalue));
      setInput("")
    } else if (value === 'DEL') {
      setInput('');
      setOutput('');
    } else {
      if(outputvalue !=""){
        setOutput("")
      }
      setInput(inputvalue + value);
    }
  };

  return (
    <div className='body'>
        <div className='outer'>
            <div className='box1' style={{backgroundColor:"#c5d1e8"}} > {inputvalue} {outputvalue} </div>
            <div className='box2' onClick={()=>handleClick('AC')}>AC</div>
            <div onClick={()=>handleClick('DEL')}>DEL</div>
            <div onClick={()=>handleClick('%')}>%</div>
            <div onClick={()=>handleClick('2')}>2</div>
            <div onClick={()=>handleClick('1')}>1</div>
            <div onClick={()=>handleClick('3')}>3</div>
            <div onClick={()=>handleClick('*')}>*</div>
            <div onClick={()=>handleClick('4')}>4</div>
            <div onClick={()=>handleClick('5')}>5</div>
            <div onClick={()=>handleClick('6')}>6</div>
            <div onClick={()=>handleClick('+')}>+</div>
            <div onClick={()=>handleClick('7')}>7</div>
            <div onClick={()=>handleClick('8')}>8</div>
            <div onClick={()=>handleClick('9')}>9</div>
            <div onClick={()=>handleClick('-')}>-</div>
            <div onClick={()=>handleClick('.')}>.</div>
            <div onClick={()=>handleClick('0')}>0</div>
            <div onClick={()=>handleClick('=')} className='equalto'>=</div>
        </div>
    </div>
  )
}