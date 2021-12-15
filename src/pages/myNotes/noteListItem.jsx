import React from "react";

import PropTypes from "prop-types";

import { StyledSpan } from "./styled";

const NoteListItem = ({
  getItemInfo,
  id,
  title,
  description,
  date,
  showId,
}) => {
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
        {showId ? description : description.slice(0, 20)}
      </p>
      <p>
        <StyledSpan>Date: </StyledSpan>
        {date}
      </p>
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
};

export default NoteListItem;
