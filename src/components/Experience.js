import React from 'react'

const Experience = ({ index, handleChange, values }) => {

    const inputChange = (input) => (e) => {
        console.log(e.target.value)
    }


    return (
        <>
            <div className='job-form-row'>
                <div className='form-group col'>
                    <label htmlFor="company" className='form-label'>Company</label>
                    <input type='text' id='company' defaultValue={values.company} onChange={inputChange('company')} className='form-control'></input>

                </div>
                <div className='form-group col'>
                    <label htmlFor="position" className='form-label'>Position</label>
                    <input type='text' id='position' defaultValue={values.position} onChange={inputChange('position')} className='form-control'></input>
                </div>
            </div>
        </>
    )
}

export default Experience

