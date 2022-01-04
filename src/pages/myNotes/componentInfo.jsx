import React from 'react';
import PropTypes from 'prop-types';

import NoteListItem from './noteListItem';
import { StyledComponentInfo } from './styled';

const ComponentInfo = ({ componentInfo, openModal }) => {
    const { id, title, description, date } = componentInfo;

    return (
        <StyledComponentInfo>
            {id ? (
                <NoteListItem
                    id={id}
                    description={description}
                    title={title}
                    date={date}
                    showId={true}
                    openModal={openModal}
                    data-test-id="note-list-component"
                />
            ) : (
                <h1>Select note to display</h1>
            )}
        </StyledComponentInfo>
    );
};
ComponentInfo.propTypes = {
    componentInfo: PropTypes.object,
    openModal: PropTypes.func,
};

export default ComponentInfo;
