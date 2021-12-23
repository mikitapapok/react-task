import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';

import { RegularText, SignForm, SignInButton, StyledLink, StyledTitle, SignInForm } from './styled';

import { getUserInfo } from '../../redux/actions/actionCreators';
import { initValuesForLogIn, ValidSchemeForLogIn } from './validation';
import { useQueryToLogin } from '../../hooks/query/loginQuery';
import { fetchUsers } from '../../services/userService';
import ValidInput from './validInput';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({});
    const dispatch = useDispatch();

    const { data } = useQueryToLogin('currentUser', () => fetchUsers(), {
        enabled: !!userCredentials,
    });

    const singInHandler = ({ email, password }) => {
        const currentUser = data.data.find(
            (dataElement) => dataElement.email == email && dataElement.password == password
        );
        if (currentUser) {
            dispatch(getUserInfo(currentUser));
            return true;
        }
        setUserCredentials({});
        return false;
    };

    return (
        <Formik
            initialValues={initValuesForLogIn}
            validationSchema={ValidSchemeForLogIn}
            onSubmit={(values, actions) => {
                setUserCredentials({ email: values.email, password: values.password });
                const isCredentialsCorrect = singInHandler(values);
                if (!isCredentialsCorrect) {
                    alert('wrong email or password. Try again or sign up');
                    actions.resetForm();
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
