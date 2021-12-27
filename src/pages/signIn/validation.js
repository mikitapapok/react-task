import * as Yup from 'yup';

export const ValidSchemeForSignUp = Yup.object().shape({
    email: Yup.string().email('Use @ and . for adding email').required('Enter Email'),
    password: Yup.string()
        .min(3, 'Password must contain at least 3 symblos')
        .required('Enter password'),
    firstName: Yup.string().required('Enter your name'),
    lastName: Yup.string().required('Enter your last name'),
    dateOfBirth: Yup.string(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match '),
});

export const ValidSchemeForLogIn = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('Enter Email'),
    password: Yup.string().min(3, 'Enter more than 3 symblos').required('Enter password'),
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
