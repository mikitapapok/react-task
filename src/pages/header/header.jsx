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
                    <StyledLink exact to={'/notes'}>
                        My notes
                    </StyledLink>
                </HeaderListItem>
                <HeaderListItem>
                    <StyledLink exact to="/shared-notes">
                        Shared Notes
                    </StyledLink>
                </HeaderListItem>
                <HeaderListItem>
                    <StyledLink exact to="/about">
                        About
                    </StyledLink>
                    {access && (
                        <LogOutLink exact to="/" onClick={logOutHandler}>
                            log out
                        </LogOutLink>
                    )}
                </HeaderListItem>
            </HeaderList>
        </StyledHeader>
    );
};

export default Header;
