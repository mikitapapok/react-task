import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { Formik } from 'formik';
import axios from 'axios';

import {
    ErrorTip,
    RegularText,
    SignForm,
    SignInButton,
    StyledField,
    StyledLink,
    StyledTitle,
    ValidContainer,
} from './styled';

import { serverPath } from '../../constants/noteList';
import { getUserInfo } from '../../redux/actions/actionCreators';
import { initValuesForLogIn, ValidSchemeForLogIn } from './validation';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState(null);
    const dispatch = useDispatch();
    const dataFromServer = axios.get(serverPath);

    const singInHandler = async (inputEmail, inputPassword) => {
        const response = await dataFromServer;
        const currentUser = response.data.find(
            (dataElement) =>
                dataElement.email == inputEmail && dataElement.password == inputPassword
        );
        if (currentUser) {
            dispatch(getUserInfo(currentUser));
        }
        setUserCredentials(null);
    };

    const query = useQuery(
        'currentUser',
        () => {
            singInHandler(userCredentials.email, userCredentials.password);
        },
        {
            enabled: !!userCredentials,
        }
    );
    useEffect(() => query, [userCredentials]);

    return (
        <Formik
            initialValues={initValuesForLogIn}
            validationSchema={ValidSchemeForLogIn}
            onSubmit={(values) => {
                setUserCredentials({ email: values.email, password: values.password });
            }}
        >
            {({ errors, touched }) => (
                <SignForm>
                    <StyledTitle>sign in</StyledTitle>
                    <ValidContainer>
                        <label htmlFor="email">Pleas Enter Email</label>
                        <StyledField
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@ex.com"
                        />
                        {errors.email && touched.email && <ErrorTip>{errors.email}</ErrorTip>}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="password">Pleas Enter Email</label>
                        <StyledField id="password" name="password" placeholder="password" />
                        {errors.password && touched.password && (
                            <ErrorTip>{errors.password}</ErrorTip>
                        )}
                    </ValidContainer>

                    <SignInButton type="submit">Sign In</SignInButton>
                    <RegularText>Or</RegularText>
                    <StyledLink to="/signUp">Sign up</StyledLink>
                </SignForm>
            )}
        </Formik>
    );
};

export default SignIn;
