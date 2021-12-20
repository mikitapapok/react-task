import { styled } from '@mui/styles';
import { Field, Form } from 'formik';
import {Button} from "@mui/material";

export const SignForm = styled(Form)({
    background: 'white',
    width: '500px',
    marginTop: '20px',
    padding: '40px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledField = styled(Field)({
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid grey',
    marginTop:"5px"
});

export const ValidContainer = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '&:not(:first-child)': {
        marginTop: '40px',
    },
});
export const ErrorTip = styled('div')({
    position: 'absolute',
    color: 'red',
    top: ' 53px',
    left: '4px',
    width: '300px'
});

export const SignInButton=styled(Button)({
    "&.MuiButton-root":{
        marginTop: '50px',
        background: 'greenyellow'
    }
})