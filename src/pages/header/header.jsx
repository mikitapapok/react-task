import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const Header = () => {
    const dispatch = useDispatch();
    const access = useSelector((state) => state.userInfo.access);
    const logOutHandler = () => {
        dispatch(logOut());
    };
    return (
        <StyledHeader>
            <Logo>
                <StyledLogoLink to={'/notes'}>REACT TASK</StyledLogoLink>
            </Logo>

            <HeaderList>
                <HeaderListItem>
                    <StyledLink to={'/notes'}>My notes</StyledLink>
                </HeaderListItem>
                <HeaderListItem>
                    <StyledLink to="/shared-notes">Shared Notes</StyledLink>
                </HeaderListItem>
                <HeaderListItem>
                    <StyledLink to="/about">About</StyledLink>
                    {access && (
                        <LogOutLink to="/" onClick={logOutHandler}>
                            log out
                        </LogOutLink>
                    )}
                </HeaderListItem>
            </HeaderList>
        </StyledHeader>
    );
};

export default Header;
