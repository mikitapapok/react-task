import React from 'react';

import Notes from '../myNotes/notes';
import { PageTitle } from './styled';

const SharedNotes = () => {
    return (
        <>
            <PageTitle>there is a list of shared notes</PageTitle>
            <Notes condition={true} />
        </>
    );
};

export default SharedNotes;
