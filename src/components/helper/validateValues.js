export default function validate(values) {
    let errors = {}

    if (!values.firstName.trim()) {
        errors.firstName = "First Name is required"
    }

    if (!values.lastName.trim()) {
        errors.lastName = "Last Name is required"
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if (!validateEmail(values.email)) {
        errors.email = "Invalid email address"
    }

    if (!values.phoneNo.trim()) {
        errors.phoneNo = "Phone No. is required"
    }

    if (!values.country.trim()) {
        errors.country = "Country is required"
    }


    return errors;
}

const validateEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}