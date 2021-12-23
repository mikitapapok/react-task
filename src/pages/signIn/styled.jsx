import { styled } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import { Form } from 'formik';
import { TextField, Button } from '@mui/material';

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
    alignItems: 'start',
    '&&': {
        padding: '20px 50px',
    },
});

export const SignUpForm = styled('div')({
    marginTop: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    columnGap: '10px',
    rowGap: '40px',
});
export const SignInForm = styled('div')({
    width: '100%',
    marginTop: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr ',
    rowGap: '40px',
});
export const StyledField = styled(TextField)({
    padding: '5px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid grey',
    marginTop: '5px',
});

export const ValidContainer = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const SignInButton = styled(Button)({
    '&.MuiButton-root': {
        marginTop: '50px',
        width: '100%',
        background: 'cornflowerblue',
        fontWeight: 'bold',
        color: 'white',
        '&:hover': {
            background: 'lightblue',
        },
    },
});

export const StyledLink = styled(NavLink)({
    textDecoration: 'none',
    marginTop: '20px',
    fontSize: '16px',
    color: 'cadetBlue',
    '&.active': {
        color: 'deeppink',
    },
});

export const RegularText = styled('div')({
    marginTop: '24px',
});

export const StyledTitle = styled('h2')({
    color: 'black',
    textTransform: 'upperCase',
});
