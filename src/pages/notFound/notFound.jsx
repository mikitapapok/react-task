import React from 'react';

import { ErrorBox, ErrorText, Tittle } from './styled';

const NotFound = () => {
    return (
        <ErrorBox>
            <Tittle>404</Tittle>
            <ErrorText>Page not found. Please enter correct Url</ErrorText>
        </ErrorBox>
    );
};

export default NotFound;
