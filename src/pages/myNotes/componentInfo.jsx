import React from "react";
import PropTypes from "prop-types";

import NoteListItem from "./noteListItem";
import { StyledComponentInfo } from "./styled";

const ComponentInfo = (props) => {
  const {id,title,description,date}=props.componentInfo
  return (
    <StyledComponentInfo >
      {!id ? (
        <h1>Select note to display</h1>
      ) : (
        <NoteListItem
          id={id}
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

  componentInfo: PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  })
};

export default ComponentInfo;
