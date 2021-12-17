import React from 'react';

import { HeaderList, HeaderListItem, StyledHeader, StyledLink, StyledLogoLink } from './styled';
import { Logo } from './styled';

const Header = () => {
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
                </HeaderListItem>
            </HeaderList>
        </StyledHeader>
    );
};

export default Header;
