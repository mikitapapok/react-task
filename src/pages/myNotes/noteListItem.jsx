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
    <div
      className="notes-list__component-text"
      onClick={getItemInfo ? getItemInfo : null}
      id={id ? id : null}
    >
      <h2>{title}</h2>
      {showId ? (
        <p>
          <StyledSpan>Id: </StyledSpan>
          {id}
        </p>
      ) : null}
      <p>
        <StyledSpan className="notes-list__component-text__component">
          Description:{" "}
        </StyledSpan>
        {!showId ? description.slice(0, 20) : description}
      </p>
      <p>
        <StyledSpan className="notes-list__component-text__component">
          Date:{" "}
        </StyledSpan>
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
