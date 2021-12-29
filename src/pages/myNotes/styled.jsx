import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import { Button, ListItem } from '@mui/material';
import List from '@mui/material/List';
import { TextField } from '@mui/material';
import search from '../../images/search.svg';
import { Field, Form } from 'formik';
export const Container = styled(Box)({
    width: '100%',
    maxWidth: '500px',
    background: 'white',
    padding: '0',
    borderRadius: '5px',
});

export const NotesList = styled('div')({
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
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
        background: 'antiquewhite',
        border: 'none',
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
    '&.MuiButton-root': {
        marginTop: '20px ',
        backgroundColor: '#7fffd4 ',
        color: 'black ',
        fontWeight: 'bold ',
    },
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

export const StyledField = styled(TextField)({
    padding: '5px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid grey',
    marginTop: '5px',
});
export const ShareButton = styled(Button)({
    '&.MuiButton-root': {
        backgroundColor: 'none',
        width: '20px',
        marginLeft: 'auto',
    },
});
export const NoteListContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const SortFormContainer = styled('div')({
    background: 'white',
    padding: '20px',
    marginTop: '10px',
    borderRadius: '5px',
});

export const NotesContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const StyledDatePicker = styled('div')({
    marginTop: ' 40px',
    display: 'flex',
    alignItems: 'center',
});

export const SearchField = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

export const SearchButton = styled(Button)({
    '&.MuiButton-root': {
        backgroundColor: 'cornflowerblue',
        color: 'white',
        marginTop: '20px',
    },
});
export const StyledTextField = styled('input')({
    width: '400px',
    '&&': {
        padding: '10px 10px 10px 30px',
        border: 'none',
        backgroundImage: `url(${search})`,
        backgroundPosition: 'start',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        borderBottom: '1px solid grey',
        outline: '0',
    },
});
export const NotFoundText = styled('h3')({
    fontSize: '60px',
    textAlign: 'center',
    textTransform: 'uppercase',
});
export const StyledCreateField = styled(TextField)({
    width: '300px',
    borderRadius: '5px',
    border: '1px solid grey',
    marginTop: '15px',
});
export const StyledFormField = styled(Field)({
    '&&': { marginTop: '20px' },
});
export const StyledCreateForm = styled(Form)({
    background: 'white',
    marginRight: '20px',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
});

export const CreateTodoText = styled('h3')({
    fontSize: '30px',
    textTransform: 'uppercase',
});

export const LoadingButton = styled(SearchButton)({
    width: '100%',
    height: '100%',
    '&.MuiButton-root': {
        marginTop: '0',
        borderRadius: '0 0 5px 5px',
    },
});
