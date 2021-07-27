import React, { useState } from 'react'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm'
import WorkExperiencesForm from './WorkExperiencesForm'
import Confirm from './Confirm'
import Success from './Success'
import validate from './helper/validateValues'


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
        company: '',
        position: ''
    }
    ])

    const [errors, setErrors] = useState({})


    const handleStepChange = e => {

        const newErrors = validate(personal);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            if (e.target.value === 'Next') {
                nextStep()
            }
        }
    }


    const addExperience = (e, id) => {
        const { name, value } = e.target;
        const cloned = [...workExperience];
        cloned[id][name] = value;
        setWorkExperience(cloned)
    }


    const handleChange = (input) => (e) => {

        switch (step) {
            case 1:
                setPersonal({ ...personal, [input]: e.target.value });
                break;

            case 2:
                setEducation({ ...education, [input]: e.target.value });
                break;

            default:
                break;
        }
    }

    const addMore = (e) => {

        e.preventDefault()
        const newExperience = {
            company: '',
            position: ''
        }

        const clonedWorkExperience = [...workExperience];
        clonedWorkExperience.push(newExperience)
        setWorkExperience(clonedWorkExperience)

    }




    switch (step) {
        case 1:
            return (
                <>
                    <PersonalForm handleChange={handleChange} values={personal} nextStep={handleStepChange} errors={errors} />
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
                    <WorkExperiencesForm handleChange={addExperience} values={workExperience} nextStep={nextStep} prevStep={prevStep} addMore={addMore} />

                </>
            )
        case 4:
            return (
                <>
                    <Confirm values={[personal, education, workExperience]} nextStep={nextStep} prevStep={prevStep} />

                </>
            )
        case 5:
            return (
                <>
                    <Success />

                </>
            )

        default:
            break;
    }


}

export default UserForm
