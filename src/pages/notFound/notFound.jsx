import React from 'react';

import { ErrorBack, ErrorBox, ErrorText, Title } from './styled';
import notFound from '../../images/not-found.jpg';

const NotFound = () => {
    return (
        <ErrorBox>
            <Title data-id='1'>404</Title>
            <ErrorText>Page not found. Please enter correct Url</ErrorText>
            <img src={notFound} alt="not-found" />
            <ErrorBack to="/">←</ErrorBack>
        </ErrorBox>
    );
};

export default NotFound;
