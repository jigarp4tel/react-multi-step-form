import React from 'react'

const Confirm = ({ values, prevStep, nextStep }) => {

    return (

        <main>
            <h1>You're almost done!</h1>
            <p>Please make sure this information is correct before submitting your application</p>

            <table>

                <tr>
                    <th>Name</th>
                    <td>{values[0].firstName + " " + values[0].lastName}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{values[0].email}</td>
                </tr>
                <tr>
                    <th>Phone No</th>
                    <td>{values[0].phoneNo}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{values[0].country}</td>
                </tr>

                <br />
                <tr>Education</tr>
                <tr>
                    <th>Level</th>
                    <td>{values[1].level}</td>
                </tr>
                <tr>
                    <th>Field</th>
                    <td>{values[1].field}</td>
                </tr>
                <tr>
                    <th>School</th>
                    <td>{values[1].school}</td>
                </tr>

                <br />
                <tr>Work Experience</tr>
                {
                    values[2].map((experience, id) => (
                        <>
                            <tr>
                                <th>Company</th>
                                <td>{experience.company}</td>
                            </tr>
                            <tr>
                                <th>Position</th>
                                <td>{experience.position}</td>
                            </tr>
                            <br />
                        </>
                    ))

                }


            </table>

            <div className='action'>
                <button className="back" onClick={prevStep}>Back</button>
                <button className="submit" onClick={nextStep}>Confirm & Submit</button>
            </div>
        </main>
    )
}

export default Confirm

