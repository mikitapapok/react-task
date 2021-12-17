import React from 'react';

import Notes from '../myNotes/notes';
import { PageTitle } from './styled';

const SharedNotes = () => {
    return (
        <>
            <PageTitle>THERE IS A LIST OF SHARED NOTES</PageTitle>
            <Notes condition={true} />
        </>
    );
};

export default SharedNotes;
