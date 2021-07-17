import React from 'react'
import logo from '../assets/indeed-logo-2021.svg'

const Sidebar = ({ step }) => {

    const description = [
        'Enter your personal information to get closer to companies.',
        'Get to know better by adding your diploma, certificate and education life.',
        'Help companies get to know you better by telling them about your past experiences.',
    ]



    return (

        <div className="sidebar">
            <div className='logo'>
                <img src={logo} alt="Logo" className='logo' />
            </div>

            <div className="steps-container">
                <h2 className="current-step">Step {step}</h2>
                <p className="current-step-description">{description[step - 1]}</p>

                <div className="steps">
                    <ul className="step-list">
                        <li className={(step === 1) ? 'current' : ''}><span className="numbers">1</span> Personal Information</li>
                        <li className={(step === 2) ? 'current' : ''}><span className="numbers">2</span>Education</li>
                        <li className={(step === 3) ? 'current' : ''}><span className="numbers">3</span>Work Experience</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
