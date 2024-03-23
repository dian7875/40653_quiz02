import './App.css'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { useState } from 'react';
import { MyProvider } from './context/MyContextProvider';

function App() {

  const [step, setStep] = useState(1);

  const nextStep = () => {
      setStep(step + 1);
  };

  const prevStep = () => {
      setStep(step - 1);
  };

  const products = [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ];  
  
  return (
    <>
    <MyProvider products={products} step={step}> 
      <h1>Quiz 02</h1>
       <Stepper step={step}  />
       <Content/>
      <div className='flex'>
        <button onClick={prevStep} type="button">Prev</button>
        <button onClick={nextStep} type="button">Next</button>
      </div>
      </MyProvider>
    </>
  )
}

export default App