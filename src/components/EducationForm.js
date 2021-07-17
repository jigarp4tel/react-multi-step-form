import React from 'react'

const EducationForm = ({ handleChange, values, nextStep, prevStep }) => {



    return (
        <>
            <main className="job-form">
                <div>
                    <h1>Education</h1>
                    <p className="current-step-description">Inform companies about your education life</p>
                </div>
                <form>
                    <div className='job-form-row'>
                        <div className='form-group'>
                            <label htmlFor="field" className='form-label'>Highest Level of Education</label>
                            <input type='text' id='level' defaultValue={values.level} onChange={handleChange('level')} className='form-control'></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="field" className='form-label'>Field of study</label>
                            <input type='text' id='field' defaultValue={values.field} onChange={handleChange('field')} className='form-control'></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="school" className='form-label'>School</label>
                            <input type='text' id='school' defaultValue={values.school} onChange={handleChange('school')} className='form-control'></input>
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

export default EducationForm
