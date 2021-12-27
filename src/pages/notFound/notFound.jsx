import React from 'react';

import { ErrorBack, ErrorBox, ErrorText, Tittle } from './styled';
import notFound from '../../images/not-found.jpg';

const NotFound = () => {
    return (
        <ErrorBox>
            <Tittle>404</Tittle>
            <ErrorText>Page not found. Please enter correct Url</ErrorText>
            <img src={notFound} alt="not-found" />
            <ErrorBack to="/">←</ErrorBack>
        </ErrorBox>
    );
};

export default NotFound;
