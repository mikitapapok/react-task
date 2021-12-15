import React from 'react';
import PropTypes from 'prop-types';

import NoteListItem from './noteListItem';
import { StyledComponentInfo } from './styled';

const ComponentInfo = (props) => {
    const { id, title, description, date } = props.componentInfo;
    return (
        <StyledComponentInfo>
            {id ? (
                <NoteListItem
                    id={id}
                    description={description}
                    title={title}
                    date={date}
                    showId={true}
                    openModal={props.openModal}
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
