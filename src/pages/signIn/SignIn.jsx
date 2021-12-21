import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ErrorTip, SignForm, SignInButton, StyledField, ValidContainer } from './styled';

import { serverPath } from '../../constants/noteList';
import { getUserInfo } from '../../redux/actions/actionCreators';

const ValidScheme = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('please enter Email'),
    password: Yup.string()
        .min(3, 'password must contain at least 3 symblos')
        .required('Please enter password'),
});
const SignIn = () => {
    const [isSign, setIsSign] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsSign(false);
        return () => {
            setIsSign(true);
        };
    }, []);
    const { data } = useQuery(
        'currentUser',
        async () => {
            const response = await axios.get(serverPath);
            return response.data;
        },
        {
            enabled: !isSign,
        }
    );

    const singInHandler = (inputEmail, inputPassword) => {
        setIsSign(true);
        const currentUser = data.find(
            (dataElement) =>
                dataElement.email == inputEmail && dataElement.password == inputPassword
        );
        if (currentUser) {
            dispatch(getUserInfo(currentUser));
        }
    };
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={ValidScheme}
            onSubmit={(values, actions) => {
                console.log(data);
                singInHandler(values.email, values.password);
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
