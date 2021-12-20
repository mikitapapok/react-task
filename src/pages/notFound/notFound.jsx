import React from 'react';

import { ErrorBack, ErrorBox, ErrorText, Tittle } from './styled';

const NotFound = () => {
    return (
        <ErrorBox>
            <Tittle>404</Tittle>
            <ErrorText>Page not found. Please enter correct Url</ErrorText>
            <ErrorBack to="/">← back to main page</ErrorBack>
        </ErrorBox>
    );
};

export default NotFound;
