import React, { useState } from 'react'
import UserForm from "./components/UserForm";
import Sidebar from "./components/Sidebar";


function App() {


  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  return (
    <div className="app">
      <Sidebar step={step} />
      <UserForm step={step} nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
}

export default App;
