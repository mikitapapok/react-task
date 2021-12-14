import React, { useState } from "react";

import { Container, NotesList, StyledListComponent } from "./styled";

import List from "@mui/material/List";
import { ListItemText } from "@mui/material";

import ComponentInfo from "./componentInfo";
import NoteListItem from "./noteListItem";
import { todoList } from "../../constans/noteList";

const Notes = () => {
  const [componentInfo, setComponentInfo] = useState(null);

  const getItemInfo = (e) => {
    const getCurrentItem = todoList.find((todo) => {
      return todo.id == e.currentTarget.id;
    });
    setComponentInfo(getCurrentItem);
    console.log(componentInfo);
  };

  return (
    <NotesList>
      <Container>
        <List>
          {todoList.map((todo) => (
            <StyledListComponent
              className={
                componentInfo && componentInfo.id === todo.id ? "active" : null
              }
              key={todo.id}
            >
              <ListItemText
                primary={
                  <NoteListItem
                    id={todo.id}
                    title={todo.title}
                    showId={false}
                    description={todo.description}
                    date={todo.date}
                    getItemInfo={getItemInfo}
                  />
                }
              />
            </StyledListComponent>
          ))}
        </List>
      </Container>
      <ComponentInfo
        id={componentInfo ? componentInfo.id : null}
        title={componentInfo ? componentInfo.title : null}
        description={componentInfo ? componentInfo.description : null}
        date={componentInfo ? componentInfo.date : null}
      />
    </NotesList>
  );
};

export default Notes;
