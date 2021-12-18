import { styled } from '@mui/styles';

export const ErrorBox = styled('div')({
    background: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
});

export const Tittle = styled('h2')({
    fontSize: '72px',
    color: 'darkred',
});

export const ErrorText = styled('p')({
    fontSize: '56px',
    color: 'darkred',
});
