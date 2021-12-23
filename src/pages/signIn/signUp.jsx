import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { serverPath } from '../../constants/noteList';
import { getUserInfo } from '../../redux/actions/actionCreators';
import { initValuesForSignUp, ValidSchemeForSignUp } from './validation';
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

const SignUp = () => {
    const dispatch = useDispatch();
    const mutation = useMutation((dataToPost) => {
        dispatch(getUserInfo(dataToPost));
        return axios.post(serverPath, dataToPost);
    });

    return (
        <Formik
            initialValues={initValuesForSignUp}
            validationSchema={ValidSchemeForSignUp}
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
