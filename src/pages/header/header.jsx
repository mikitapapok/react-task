import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
    HeaderList,
    HeaderListItem,
    StyledHeader,
    StyledLink,
    StyledLogoLink,
    Logo,
    LogOutLink,
} from './styled';
import { logOut } from '../../redux/actions/actionCreators';

const Header = ({ logAccess }) => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logOut());
    };

    return (
        <StyledHeader>
            <Logo>
                <StyledLogoLink to={'/'}>REACT TASK</StyledLogoLink>
            </Logo>

            <HeaderList>
                <HeaderListItem>
                    <StyledLink to={'/notes'}>my notes</StyledLink>
                </HeaderListItem>
                <HeaderListItem>
                    <StyledLink to="/shared-notes">shared notes</StyledLink>
                </HeaderListItem>
                <HeaderListItem>
                    <StyledLink to="/about">about</StyledLink>
                    {logAccess && (
                        <LogOutLink to="/" onClick={logOutHandler}>
                            log out
                        </LogOutLink>
                    )}
                </HeaderListItem>
            </HeaderList>
        </StyledHeader>
    );
};

Header.propTypes = {
    logAccess: PropTypes.bool,
};

export default Header;
