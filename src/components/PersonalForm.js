

const PersonalForm = ({ handleChange, values, nextStep, errors }) => {

    return (
        <>
            {/* <Header title='Your Personal Information' /> */}
            <main className="job-form">
                <div>
                    <h1>Your Personal Information</h1>
                    <p className="current-step-description">Enter your personal information to get closer to companies.</p>
                </div>

                <form>
                    <div className='job-form-row'>
                        <div className='form-group col'>
                            <label htmlFor="firstname" className='form-label'>First Name</label>
                            <input type='text' id='firstname' defaultValue={values.firstName} onChange={handleChange('firstName')} className='form-control' name='firstName'></input>
                            <div className="danger">{errors && errors.firstName}</div>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="lastname" className='form-label'>Last Name</label>
                            <input type='text' id='lastname' defaultValue={values.lastName} onChange={handleChange('lastName')} className='form-control' name='lastName' ></input>
                            <div className="danger">{errors && errors.lastName}</div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email" className='form-label'>Email Address</label>
                            <input type='email' id='email' defaultValue={values.email} onChange={handleChange('email')} className='form-control'></input>
                            <div className="danger">{errors && errors.email}</div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="phoneno" className='form-label'>Phone Number</label>
                            <input type='text' id='phoneno' defaultValue={values.phoneNo} onChange={handleChange('phoneNo')} className='form-control'></input>
                            <div className="danger">{errors && errors.phoneNo}</div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="country" className='form-label'>Country</label>
                            <input type='text' id='country' defaultValue={values.country} onChange={handleChange('country')} className='form-control'></input>
                            <div className="danger">{errors && errors.country}</div>
                        </div>
                    </div>
                </form>
                <div className='action'>
                    <button className="primary" onClick={nextStep} value='Next'>Next Step</button>
                </div>
            </main>
        </>
    )
}

export default PersonalForm

