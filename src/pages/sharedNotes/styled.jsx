import { Container } from '@mui/material';
import { styled } from '@mui/styles';

export const SharedBox = styled(Container)({
    '&.MuiContainer-root': {
        maxWidth: '100%',
        width: '700px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export const PageTitle = styled('h2')({
    fontSize: '36px',
    fontWeight: 'Bold',
    color: 'ghostwhite',
    textAlign: 'center',
    marginTop: '20px',
    '&.dark': {
        color: 'black',
        marginTop: '0',
    },
});
