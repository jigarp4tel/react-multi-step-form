import React, { useState } from 'react'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm'
import WorkExperiencesForm from './WorkExperiencesForm'


const UserForm = ({ step, prevStep, nextStep }) => {


    const [personal, setPersonal] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        country: ''
    })

    const [education, setEducation] = useState({
        level: '',
        field: '',
        school: ''
    }
    )

    const [workExperience, setWorkExperience] = useState([{
        company: 'apple',
        position: 'junior'
    }, {
        company: 'google',
        position: 'senior'
    }
    ])


    const addExperience = (id) => {
        console.log(workExperience[id].company);
    }



    const handleChange = (input) => (e) => {

        switch (step) {
            case 1:
                setPersonal({ ...personal, [input]: e.target.value });
                break;

            case 2:
                setEducation({ ...education, [input]: e.target.value });
                break;

            case 3:

                setWorkExperience({ ...workExperience, [0]: { [input]: e.target.value } });

                break;

            default:
                break;
        }


    }


    switch (step) {
        case 1:
            return (
                <>
                    <PersonalForm handleChange={handleChange} values={personal} nextStep={nextStep} />
                </>
            )
        case 2:
            return (
                <>
                    <EducationForm handleChange={handleChange} values={education} nextStep={nextStep} prevStep={prevStep} />

                </>
            )

        case 3:
            return (
                <>
                    <WorkExperiencesForm handleChange={handleChange} addExperience={addExperience} values={workExperience} nextStep={nextStep} prevStep={prevStep} />

                </>
            )

        default:
            break;
    }


}

export default UserForm
