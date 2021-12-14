import React from "react";

import PropTypes from "prop-types";

import NoteListItem from "./noteListItem";
import { StyledComponentInfo } from "./styled";

const ComponentInfo = ({ id, description, title, date }) => {
  return (
    <StyledComponentInfo className="active">
      {!id ? (
        <h1>Select note to display</h1>
      ) : (
        <NoteListItem
          id={id ? id : null}
          description={description}
          title={title}
          date={date}
          showId={true}
        />
      )}
    </StyledComponentInfo>
  );
};
ComponentInfo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default ComponentInfo;
