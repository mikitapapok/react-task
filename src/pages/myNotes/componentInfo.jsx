import React from "react";
import { number, string } from "prop-types";
import PropTypes from "prop-types";
const ComponentInfo = (props) => {
  return (
    <div className="notes-info">
      {!props.item ? (
        <h1>Select note to display</h1>
      ) : (
        <article>
          <h1>Information about todoItem</h1>
          <p>
            <span className="notes-list__component-text__component">
              Title:
            </span>{" "}
            {props.item.title}
          </p>
          <p>
            <span className="notes-list__component-text__component">Id:</span>{" "}
            {props.item.id}
          </p>
          <p>
            <span className="notes-list__component-text__component">
              Description:
            </span>{" "}
            {props.item.description}
          </p>
          <p>
            <span className="notes-list__component-text__component">Date:</span>{" "}
            {props.item.date}
          </p>
        </article>
      )}
    </div>
  );
};
ComponentInfo.propTypes = {
  item: {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
};

export default ComponentInfo;
