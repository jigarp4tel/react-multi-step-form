import React from 'react'

const Confirm = ({ values, prevStep, nextStep }) => {

    return (

        <main>
            <h1>You're almost done!</h1>
            <p>Please make sure this information is correct before submitting your application</p>

            <div className='confirm-section'>
                <div>
                    <div><b>Name</b></div>
                    <div>{values[0].firstName + " " + values[0].lastName}</div>
                </div>
                <div>
                    <div><b>Email</b></div>
                    <div>{values[0].email}</div>
                </div>
                <div>
                    <div><b>Phone No</b></div>
                    <div>{values[0].phoneNo}</div>
                </div>
                <div>
                    <div><b>Country</b></div>
                    <div>{values[0].country}</div>
                </div>
            </div>

            <div className='confirm-section'>
                <h3>Education</h3>
                <div>
                    <div><b>Level</b></div>
                    <div>{values[1].level}</div>
                </div>
                <div>
                    <div><b>Field</b></div>
                    <div>{values[1].field}</div>
                </div>
                <div>
                    <div><b>School</b></div>
                    <div>{values[1].school}</div>
                </div>
            </div>

            <div className='confirm-section'>

                <h3>Work Experience</h3>
                {
                    values[2].map((experience, id) => (
                        <div key={id} className="work-experience">
                            <div>
                                <div><b>Company</b></div>
                                <div>{experience.company}</div>
                            </div>
                            <div>
                                <div><b>Position</b></div>
                                <div>{experience.position}</div>
                            </div>
                        </div>
                    ))

                }


            </div>

            <div className='action'>
                <button className="back" onClick={prevStep}>Back</button>
                <button className="submit" onClick={nextStep}>Confirm & Submit</button>
            </div>
        </main>
    )
}

export default Confirm

