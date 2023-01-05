import './App.css';
import {useState} from 'react';

function Calculator() {

  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");

  const ops = ['/','X','+','-','.'];

  const updateCalc = value => {
    if(
        (ops.includes(value) && calc === '') ||
        (ops.includes(value) && ops.includes(calc.slice(-1))) 
      )
      {
        return ;
      }

      setCalc(calc + value);

      if(!ops.includes(value)){
        setResult(eval(calc + value).toString());
      }
  }

  const createDigits = () => {
    const digits = [];
    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const equals = () =>{
    setCalc(result.toString());
    setResult(result.toString());
  }

  const deleted = () =>{
    if(calc === ''){
      return;
    }
    const value = calc.slice(0,-1);
    setResult(eval(value).toString());
    setCalc(value);
  }

//   const cleaned = () =>{
//     setResult("");
//     setCalc("");
//   }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : " "}
          &nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => deleted()}>DEL</button>
          {/* <button onClick={() => cleaned()}>CLR</button> */}
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => equals()}>=</button>
        </div>
      </div>
    </div>
  )
}


export  {Calculator};
