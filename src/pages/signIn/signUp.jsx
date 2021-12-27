import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { getUserInfo } from '../../redux/actions/actionCreators';
import { initValuesForSignUp, ValidSchemeForSignUp } from './validation';
import { SignUpForm, SignForm, SignInButton, StyledLink, StyledTitle } from './styled';
import ValidInput from './validInput';
import { useMutationDataServer } from '../../hooks/mutation/dataServerMutation';

const SignUp = () => {
    const dispatch = useDispatch();

    const mutation = useMutationDataServer();

    const submitForm = async (values) => {
        dispatch(getUserInfo(values));
        await mutation.mutate(values);
    };

    return (
        <Formik
            initialValues={initValuesForSignUp}
            validationSchema={ValidSchemeForSignUp}
            onSubmit={submitForm}
        >
            {({ errors }) => (
                <SignForm>
                    <StyledTitle>sign up</StyledTitle>
                    <SignUpForm>
                        <ValidInput
                            name="firstName"
                            label="Enter first name"
                            error={errors.firstName}
                            type="text"
                            autoComplete="on"
                        />
                        <ValidInput
                            name="lastName"
                            label="Enter last name"
                            error={errors.lastName}
                            type="text"
                            autoComplete="on"
                        />
                        <ValidInput
                            name="dateOfBirth"
                            error={errors.dateOfBirth}
                            type="date"
                            autoComplete="off"
                        />
                        <ValidInput
                            name="email"
                            label="Enter email"
                            error={errors.email}
                            type="email"
                            autoComplete="on"
                        />
                        <ValidInput
                            name="password"
                            label="Enter password"
                            error={errors.password}
                            type="password"
                            autoComplete="off"
                        />
                        <ValidInput
                            name="confirmPassword"
                            label="Confirm password"
                            error={errors.confirmPassword}
                            type="password"
                            autoComplete="off"
                        />
                    </SignUpForm>
                    <SignInButton type="submit">Sign up</SignInButton>
                    <StyledLink to="/">←Back to sign in page</StyledLink>
                </SignForm>
            )}
        </Formik>
    );
};

export default SignUp;
