import { styled } from '@mui/styles';
import { Link, NavLink } from 'react-router-dom';
import { List, ListItemText } from '@mui/material';

export const StyledHeader = styled('header')({
    width: '100%',
    padding: '10px 10px 10px 40px',
    backgroundColor: 'cornflowerblue',
    display: 'flex',
    alignItems: 'center',
});

export const Logo = styled('h1')({
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
        color: 'pink',
    },
});

export const StyledLink = styled(NavLink)({
    textDecoration: 'none',
    fontSize: '24px',
    color: 'white',
    '&.active': {
        color: 'deeppink',
    },
});

export const LogOutLink = styled(StyledLink)({
    marginLeft: '500px',
});

export const HeaderList = styled(List)({
    '&.MuiList-root': {
        display: 'flex',
        marginLeft: '400px',
    },
});

export const HeaderListItem = styled(ListItemText)({
    '&:not(:first-child)': {
        marginLeft: '30px',
        fontSize: '24px',
    },
});
export const StyledLogoLink = styled(Link)({
    textDecoration: 'none',
    color: 'white',
});
