import './Calculator.css'
import { useState } from 'react'
import { evaluate } from 'mathjs'
function Calculator() {

    let [result , setResult] = useState('')
    let [hasdot , setHasdot] = useState(false)
    const checkinput= (text)=>{
        if( text == '×') return '*'
        if( text == '÷') return '/'
        return text

    } 
    const clickhandler = (e) => {
        let input = checkinput(e.target.innerText);
        
        if (input === '.' && hasdot) return;
        
        if (input === '.' ) setHasdot(true);
        
        // چک کن که دو تا عملگر پشت سر هم نیان
        if ("+-*/".includes(input) && "+-*/".includes(result.slice(-1))) {
            setResult(result.slice(0, -1) + input); 
            return;
        }
    
        if ("+-×÷".includes(input)) setHasdot(false);
    
        setResult(result + input);
    };
    
    const clearbtn = ()=>{
        setHasdot(false)
        setResult('')
    }
    const dltbtn= ()=>{
        if(result.endsWith('.')){
            setHasdot(false)
        }
        setResult(result.slice(0,-1))
    }
    const equalbt= () => {
        setResult(String(evaluate(result)))
        setHasdot(false)
    }   

    return (
        <div className="container">
            <div className="screen">{result}</div>
            <div className="btnpanel">
                <button className='color twop' onClick={clearbtn}>Clear</button>
                <button className='color'onClick={dltbtn}>C</button>
                <button onClick={clickhandler} className='color'>÷</button>
                <button onClick={clickhandler}>7</button>
                <button onClick={clickhandler}>8</button>
                <button onClick={clickhandler}>9</button>
                <button onClick={clickhandler} className='color'>×</button>
                <button onClick={clickhandler}>4</button>
                <button onClick={clickhandler}>5</button>
                <button onClick={clickhandler}>6</button>
                <button onClick={clickhandler} className='color'>-</button>
                <button onClick={clickhandler}>1</button>
                <button onClick={clickhandler}>2</button>
                <button onClick={clickhandler}>3</button>
                <button onClick={clickhandler} className='color'>+</button>
                <button onClick={clickhandler}>0</button>
                <button onClick={clickhandler}>.</button>
                <button className='color twop' onClick={equalbt}>=</button>
            </div>
        </div>
    )
}

export default Calculator