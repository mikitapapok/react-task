import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ErrorTip, RegularText, SignForm, SignInButton, StyledField, StyledLink, StyledTitle, ValidContainer } from './styled';

import { serverPath } from '../../constants/noteList';
import { getUserInfo } from '../../redux/actions/actionCreators';


const ValidScheme = Yup.object().shape({
    email: Yup.string().email('Please use @ and . for adding email').required('please enter Email'),
    password: Yup.string()
        .min(3, 'password must contain at least 3 symblos')
        .required('Please enter password'),
});
const SignIn = () => {
    const [dataToSend,SetDataToSend]=useState(null)
    const dispatch = useDispatch();

    const singInHandler =(inputEmail, inputPassword) => {
        axios.get(serverPath).then(response=>{
            const currentUser = response.data.find(
                (dataElement) =>
                    dataElement.email == inputEmail && dataElement.password == inputPassword
            );
            if (currentUser) {
                dispatch(getUserInfo(currentUser));
            }
            SetDataToSend(null)
        })

        
       
    };


const query=useQuery(
        'currentUser',
        ()=>{
            console.log('eeeee')
            singInHandler(dataToSend[0],dataToSend[1])},
        {
            enabled: !!dataToSend,
        }
    );

    return  (
         <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={ValidScheme}
            onSubmit={(values) => {
                const validData=[values.email,values.password]
                SetDataToSend(validData)
                query
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
                    <StyledLink to='/signUp'>Sign up</StyledLink>
                </SignForm>
            )}
        </Formik>
       
    );
};

export default SignIn;
