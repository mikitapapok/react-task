import { styled } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'formik';
import { Button } from '@mui/material';

export const SignForm = styled(Form)({
    background: 'white',
    width: '500px',
    paddingLeft: '10%',
    marginTop: '20px',
    padding: '40px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&&': {
        padding: '20px 0',
    },
});

export const StyledField = styled(Field)({
    padding: '5px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid grey',
    marginTop: '5px',
});

export const ValidContainer = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:not(:first-child)': {
        marginTop: '40px',
    },
});
export const ErrorTip = styled('div')({
    position: 'absolute',
    color: 'red',
    top: ' 55px',
    left: '4px',
    width: '300px',
});

export const SignInButton = styled(Button)({
    '&.MuiButton-root': {
        marginTop: '50px',
        background: 'greenyellow',
        fontWeight: 'bold',
    },
});

export const StyledLink = styled(NavLink)({
    textDecoration: 'none',
    marginTop: '20px',
    fontSize: '24px',
    color: 'cadetBlue',
    '&.active': {
        color: 'deeppink',
    },
});

export const RegularText = styled('p')({
    marginTop: '10px',
});

export const StyledTitle = styled('h2')({
    color: 'darkgray',
    textTransform: 'upperCase',
});
