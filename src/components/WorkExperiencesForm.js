import React from 'react'
import Experience from './Experience'

const WorkExperiencesForm = ({ handleChange, values, nextStep, prevStep, addMore }) => {

    const experience = values.map((value, id) => (
        <Experience key={id} handleChange={handleChange} values={value} id={id} />
    ));


    return (
        <>
            <main className="job-form">
                <div>
                    <h1>Work Experience</h1>
                    <p className="current-step-description">Inform companies about your education life</p>
                </div>
                <form>

                    {
                        experience
                    }

                    <button onClick={addMore} className="add">Add More</button>



                </form>
                <div className='action'>
                    <button className="back" onClick={prevStep}>Back</button>
                    <button className="primary" onClick={nextStep}>Next Step</button>
                </div>
            </main>
        </>
    )
}

export default WorkExperiencesForm
