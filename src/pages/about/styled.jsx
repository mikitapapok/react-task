import { styled } from '@mui/styles';
import { Container } from '@mui/material';

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
