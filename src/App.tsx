import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState<number>(0)
  const [firstInput, setFirstInput] = useState<number>(0)
  const [secondInput, setSecondInput] = useState<number>(0)
  const [currentOperation, setCurrentOperation] = useState<string>("--Please choose an operation--")

  const catchInput = (input: string, setter: Dispatch<SetStateAction<number>>) => {
    let currentInput = Number(input)
    setter(currentInput)
  }

  const catchCurrentOperation = (operation: string) => {
    setCurrentOperation(operation)
  }

  useEffect(() => {
      if(currentOperation === "addition") {
        setResult((firstInput + secondInput))
      }
      if(currentOperation === "subtraction") {
        setResult((firstInput - secondInput))
      }
      if(currentOperation === "division") {
        setResult((firstInput / secondInput))
      }
      if(currentOperation === "multiplication") {
        setResult(firstInput * secondInput)
      }
  },[firstInput, secondInput, currentOperation])

  return (
    <>
      <div className='calculator-container'>
        <h1>Calculator</h1>
        <input type='number' value={firstInput} onChange={(e)=> catchInput(e.target.value, setFirstInput)}/>
        <select name="Operation" onChange={(e) => catchCurrentOperation(e.target.value)}>
          <option value={currentOperation}>{currentOperation}</option>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="division">Division</option>
          <option value="multiplication">Multiplication</option>
        </select>
        <input type='number' value={secondInput} onChange={(e)=> catchInput(e.target.value, setSecondInput)}/>
      </div>

      <div className='result'>
          <h2>{result}</h2>
      </div>
    </>
  )
}

export default App
