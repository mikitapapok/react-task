import React from "react";
import { ListItemText } from "@mui/material";
import NotesComponentText from "./notesComponentText";
import PropTypes, { objectOf } from "prop-types";
const NotesComponent = (props) => {
  return (
    <ListItemText
      className={
        props.item && props.todo.id === props.item.id ? "element-active" : ""
      }
      primary={<NotesComponentText todo={props.todo} onClick={props.onClick} />}
    />
  );
};
NotesComponent.propTypes = {
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
  inClick: PropTypes.func,
};
export default NotesComponent;
