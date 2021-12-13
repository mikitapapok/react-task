import React from "react";
import PropTypes, { objectOf } from "prop-types";
const NotesComponentText = (props) => {
  const { id, title, date, description } = props.todo;
  return (
    <article
      className="notes-list__component-text"
      onClick={props.onClick}
      id={id}
    >
      <h2>{title}</h2>
      <p>
        <span className="notes-list__component-text__component">
          Description:{" "}
        </span>
        {description.slice(0, 20)}
      </p>
      <p>
        <span className="notes-list__component-text__component">Date: </span>
        {date}
      </p>
    </article>
  );
};

NotesComponentText.prototype = {
  todo: PropTypes.arrayOf(
    objectOf({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  item: {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
  onClick: PropTypes.func,
};

export default NotesComponentText;
