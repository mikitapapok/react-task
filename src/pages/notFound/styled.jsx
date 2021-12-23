import { styled } from '@mui/styles';
import { StyledLink } from '../header/styled';

export const ErrorBox = styled('div')({
    background: 'white',
    padding: '20px',
    display: 'flex',
    borderRadius: '5px',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
});

export const Tittle = styled('h2')({
    fontSize: '72px',
    color: 'darkgrey',
});

export const ErrorText = styled('p')({
    fontSize: '56px',
    color: 'darkgrey',
});

export const ErrorBack = styled(StyledLink)({
    color: 'cornflowerblue',
    fontSize: '48px',
    marginTop: '40px',
});
