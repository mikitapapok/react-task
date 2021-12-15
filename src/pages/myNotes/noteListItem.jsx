import React from 'react';

import PropTypes from 'prop-types';

import { StyledSpan, EditButton } from './styled';

const NoteListItem = ({ getItemInfo, id, title, description, date, showId, openModal }) => {
    return (
        <div onClick={getItemInfo} id={id}>
            <h2>{title}</h2>
            {showId && (
                <p>
                    <StyledSpan>Id: </StyledSpan>
                    {id}
                </p>
            )}
            <p>
                <StyledSpan>Description: </StyledSpan>
                {showId ? description : `${description.slice(0, 20).trim()}...`}
            </p>
            <p>
                <StyledSpan>Date: </StyledSpan>
                {date}
            </p>
            {showId && <EditButton onClick={openModal}>Edit</EditButton>}
        </div>
    );
};

NoteListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    getItemInfo: PropTypes.func,
    showId: PropTypes.bool,
    openModal: PropTypes.func,
};

export default NoteListItem;
