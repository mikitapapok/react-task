import React from 'react';

import { ErrorBox, ErrorText, ErrorTittle } from './styled';

const NotFound = () => {
    return (
        <ErrorBox>
            <ErrorTittle>404</ErrorTittle>
            <ErrorText>Page not found. Please enter correct Url</ErrorText>
        </ErrorBox>
    );
};

export default NotFound;
