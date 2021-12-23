import * as Yup from 'yup';

export const ValidSchemeForSignUp = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('Please enter Email'),
    password: Yup.string()
        .min(3, 'password must contain at least 3 symblos')
        .required('Please enter password'),
    firstName: Yup.string().required('Please enter your name'),
    lastName: Yup.string().required('Enter your last name'),
    dateOfBirth: Yup.string().required('Please pick date of birth'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match '),
});

export const ValidSchemeForLogIn = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('please enter Email'),
    password: Yup.string()
        .min(3, 'password must contain at least 3 symblos')
        .required('Please enter password'),
});

export const initValuesForLogIn = {
    email: '',
    password: '',
};

export const initValuesForSignUp = {
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    dateOfBirth: '',
    confirmPassword: '',
};
