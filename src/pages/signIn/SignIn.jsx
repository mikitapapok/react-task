import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';

import { RegularText, SignForm, SignInButton, StyledLink, StyledTitle, SignInForm } from './styled';

import { getUserInfo } from '../../redux/actions/actionCreators';
import { initValuesForLogIn, ValidSchemeForLogIn } from '../../constants/validation';
import { useUsers } from '../../hooks/query/loginQuery';
import ValidInput from './validInput';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({});
    const dispatch = useDispatch();

    const { data: users } = useUsers({
        enabled: userCredentials.length,
    });

    const singInHandler = ({ email, password }) => {
        const currentUser = users.find(
            (dataElement) => dataElement.email == email && dataElement.password == password
        );
        if (currentUser) {
            dispatch(getUserInfo(currentUser));
        }
        setUserCredentials({});
        return !!currentUser;
    };

    return (
        <Formik
            initialValues={initValuesForLogIn}
            validationSchema={ValidSchemeForLogIn}
            onSubmit={(values) => {
                setUserCredentials({ email: values.email, password: values.password });
                const isCredentialsCorrect = singInHandler(values);
                if (!isCredentialsCorrect) {
                    alert('wrong email or password. Try again or sign up');
                }
            }}
        >
            {({ errors }) => (
                <SignForm>
                    <StyledTitle>sign in</StyledTitle>
                    <SignInForm>
                        <ValidInput
                            type="email"
                            name="email"
                            label="Enter email"
                            error={errors.email}
                            autoComplete="on"
                        />
                        <ValidInput
                            type="password"
                            name="password"
                            label="Enter password"
                            error={errors.password}
                            autoComplete="off"
                        />
                    </SignInForm>

                    <SignInButton type="submit">Sign In</SignInButton>
                    <RegularText>
                        If you do not sign up, follow <StyledLink to="/signUp">here</StyledLink>{' '}
                    </RegularText>
                </SignForm>
            )}
        </Formik>
    );
};

export default SignIn;
