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

export const Title = styled('h2')({
    fontSize: '72px',
    color: 'darkgrey',
});

export const ErrorText = styled('p')({
    fontSize: '56px',
    color: 'darkgrey',
});

export const ErrorBack = styled(StyledLink)({
    color: 'cornflowerblue',
    borderRadius: '100%',
    flexShrink: '0',
    background: '#F8F8FF',
    padding: '5px 10px',
    fontSize: '100px',
    border: '1px solid cornflowerblue',
    marginTop: '40px',
    "&:hover":{
        background: 'grey',
        color: 'white'
    }
});
