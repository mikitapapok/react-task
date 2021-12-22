import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { serverPath } from '../../constants/noteList';
import { getUserInfo } from '../../redux/actions/actionCreators';
import {
    SignForm,
    ValidContainer,
    StyledField,
    ErrorTip,
    SignInButton,
    RegularText,
    StyledLink,
    StyledTitle,
} from './styled';

const ValidScheme = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('Please enter Email'),
    password: Yup.string()
        .min(3, 'password must contain at least 3 symblos')
        .required('Please enter password'),
    firstName: Yup.string().required('Please enter your name'),
    lastName: Yup.string().required('Enter your last name'),
    dateOfBirth: Yup.string().required('Please pick date of birth'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match '),
});
const SignUp = () => {
    const dispatch = useDispatch();
    const mutation = useMutation((dataToPost) => {
        dispatch(getUserInfo(dataToPost));
        return axios.post(serverPath, dataToPost);
    });

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                lastName: '',
                firstName: '',
                dateOfBirth: '',
                confirmPassword: '',
            }}
            validationSchema={ValidScheme}
            onSubmit={async (values) => {
                const dataToSend = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    dateOfBirth: values.dateOfBirth,
                    password: values.password,
                    email: values.email,
                };
                mutation.mutate(dataToSend);
            }}
        >
            {({ errors, touched }) => (
                <SignForm>
                    <StyledTitle>sign up</StyledTitle>
                    <ValidContainer>
                        <label htmlFor="firstName">Please Enter First namr</label>
                        <StyledField id="firstName" name="firstName" placeholder="John" />
                        {errors.firstName && touched.firstName && (
                            <ErrorTip>{errors.firstName}</ErrorTip>
                        )}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="lastName">Please Enter last name</label>
                        <StyledField id="lastName" name="lastName" placeholder="Doe" />
                        {errors.lastName && touched.lastName && (
                            <ErrorTip>{errors.lastName}</ErrorTip>
                        )}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="dateOfBirth">Please Enter date of birth</label>
                        <StyledField id="dateOfBirth" type="date" name="dateOfBirth" />
                        {errors.dateOfBirth && touched.dateOfBirth && (
                            <ErrorTip>{errors.dateOfBirth}</ErrorTip>
                        )}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="email">Please Enter Email</label>
                        <StyledField
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@ex.com"
                        />
                        {errors.email && touched.email && <ErrorTip>{errors.email}</ErrorTip>}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="password">Please Enter password</label>
                        <StyledField
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                        {errors.email && touched.email && <ErrorTip>{errors.email}</ErrorTip>}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <StyledField
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <ErrorTip>{errors.confirmPassword}</ErrorTip>
                        )}
                    </ValidContainer>
                    <SignInButton type="submit">Sign up</SignInButton>
                    <RegularText>or</RegularText>
                    <StyledLink to="/">Sign in</StyledLink>
                </SignForm>
            )}
        </Formik>
    );
};

export default SignUp;
