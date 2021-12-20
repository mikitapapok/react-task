import { styled } from '@mui/styles';

export const PageTitle = styled('h2')({
    fontSize: '36px',
    fontWeight: 'Bold',
    color: 'ghostwhite',
    textAlign: 'center',
    marginTop: '20px',
    textTransform: 'uppercase',
    '&.dark': {
        color: 'black',
        marginTop: '0',
    },
});
