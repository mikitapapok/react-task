import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import { Button, ListItem } from '@mui/material';
import List from '@mui/material/List';

export const Container = styled(Box)({
    width: '100%',
    maxWidth: '500px',
    background: 'white',
    padding: '0',
    borderRadius: '5px',
});

export const NotesList = styled('div')({
    display: 'flex',
    alignItems: 'start',
});

export const StyledComponentInfo = styled('div')({
    marginLeft: '40px',
    width: '500px',
    background: 'white',
    borderRadius: '5px',
    padding: '20px',
});

export const StyledListComponent = styled(ListItem)((props) => ({
    borderBottom: '1px solid black',
    cursor: 'pointer',
    background: `${props.isActive ? 'slategrey' : 'white'}`,
    color: `${props.isActive ? 'white' : 'black'}`,
    '&:hover': {
        background: 'darkgrey ',
    },
    '&:active': {
        background: 'slategrey ',
    },
    '&:last-child': {
        borderBottom: 'none',
        borderRadius: '0px 0px 5px 5px',
    },
    '&:first-child': {
        borderRadius: '5px 5px 0px 0px',
    },
}));

export const StyledSpan = styled('span')({
    fontWeight: 'Bold',
});

export const StyledList = styled(List)({
    padding: '0 !important',
    borderRadius: '5px',
});

export const EditButton = styled(Button)({
    '&&': { marginTop: '20px ', backgroundColor: '#7fffd4 ', color: 'black ', fontWeight: 'bold ' },
});

export const Backdrop = styled('div')({
    position: 'fixed',
    zIndex: '10',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    right: '0',
    bottom: '0',
    top: '0',
    left: '0',
});

export const ModalWindow = styled('div')({
    position: 'absolute',
    zIndex: '10',
    top: '40%',
    left: '40%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'Column',
    alignItems: 'center',
    background: 'white',
    width: '500px',
});
export const ChangeDescription = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
});

export const StyledInput = styled('input')({
    width: '300px',
    padding: '5px',
    borderRadius: '5px',
    border: '2px solid grey',
});
