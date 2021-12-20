import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorTip, SignForm, SignInButton, StyledField, ValidContainer } from './styled';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/thunk/thunks';

const ValidScheme = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('please enter Email'),
    password: Yup.string()
        .min(3, 'password must contain at least 3 symblos')
        .required('Please enter password'),
});
const SignIn = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={ValidScheme}
            onSubmit={(values, actions) => {
                dispatch(signInUser(values.email, values.password));
                actions.resetForm({
                    values: {
                        email: '',
                        password: '',
                    },
                });
            }}
        >
            {({ errors, touched }) => (
                <SignForm>
                    <ValidContainer>
                        <label htmlFor="email">Pleas Enter Email</label>
                        <StyledField
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@ex.com"
                        />
                        {errors.email && touched.email ? <ErrorTip>{errors.email}</ErrorTip> : null}
                    </ValidContainer>
                    <ValidContainer>
                        <label htmlFor="password">Pleas Enter Email</label>
                        <StyledField id="password" name="password" placeholder="password" />
                        {errors.password && touched.password ? (
                            <ErrorTip>{errors.password}</ErrorTip>
                        ) : null}
                    </ValidContainer>

                    <SignInButton type="submit">Sign In</SignInButton>
                </SignForm>
            )}
        </Formik>
    );
};

export default SignIn;
