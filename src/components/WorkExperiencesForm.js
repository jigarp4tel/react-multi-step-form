import React from 'react'
import Experience from './Experience'

const WorkExperiencesForm = ({ handleChange, values, nextStep, prevStep, addExperience }) => {

    addExperience(0)

    return (
        <>
            <main className="job-form">
                <div>
                    <h1>Work Experience</h1>
                    <p className="current-step-description">Inform companies about your education life</p>
                </div>
                <form>
                    {/* {
                        values.map((value, index) => (
                            <Experience key={index} handleChange={handleChange} values={value} index={index} />
                        ))
                    } */}

                    <div className='job-form-row'>
                        <div className='form-group col'>
                            <label htmlFor="company" className='form-label'>Company</label>
                            <input type='text' id='company' defaultValue={values[0].company} onChange={handleChange('company')} className='form-control'></input>

                        </div>
                        <div className='form-group col'>
                            <label htmlFor="position" className='form-label'>Position</label>
                            <input type='text' id='position' defaultValue={values[0].position} onChange={handleChange('position')} className='form-control'></input>
                        </div>
                    </div>


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
