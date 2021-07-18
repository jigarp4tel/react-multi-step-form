import React from 'react'

const Experience = ({ id, handleChange, values }) => {


    return (
        <>
            <div className='job-form-row'>
                <div className='form-group col'>
                    <label htmlFor="company" className='form-label'>Company</label>
                    <input type='text' id='company' defaultValue={values.company} onChange={(e) => handleChange(e, id)} className='form-control' name='company'></input>

                </div>
                <div className='form-group col'>
                    <label htmlFor="position" className='form-label'>Position</label>
                    <input type='text' id='position' defaultValue={values.position} onChange={(e) => handleChange(e, id)} className='form-control' name='position'></input>
                </div>
            </div>
        </>
    )
}

export default Experience

