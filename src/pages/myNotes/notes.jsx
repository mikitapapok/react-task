import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import NotesComponent from "./notesComponent";
import ComponentInfo from "./componentInfo";
const Notes = () => {
  const [componentInfo, setComponentInfo] = useState(null);
  const todoList = [
    {
      id: 1,
      title: "delectus aut autem",
      description: "id labore ex et quam laborum",
      date: new Date("3.08.2000").toDateString(),
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      description: "quo vero reiciendis velit similique earum",
      date: new Date("4.09.2010").toDateString(),
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      description: "odio adipisci rerum aut animi",
      date: new Date("7.07.2008").toDateString(),
    },
    {
      id: 4,
      title: "et porro tempora",
      description: "alias odio sit",
      date: new Date("3.08.2025").toDateString(),
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi",
      description: "vero eaque aliquid doloribus et culpa",
      date: new Date("3.03.2012").toDateString(),
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam ",
      description: "et fugit eligendi deleniti quidem qui sint nihil autem",
      date: new Date("10.08.2007").toDateString(),
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      description:
        "repellat consequatur praesentium vel minus molestias voluptatum",
      date: new Date("3.12.2008").toDateString(),
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      description: "provident id voluptas",
      date: new Date("2.02.2019").toDateString(),
    },
  ];
  const getItemInfo = (e) => {
    const getCurrentItem = todoList.find((todo) => {
      return todo.id == e.currentTarget.id;
    });
    setComponentInfo(getCurrentItem);
  };

  return (
    <div className="notes">
      <Box sx={{ bgcolor: "background.paper" }}>
        <List className="notes-list">
          {todoList.map((todo) => (
            <ListItem key={todo.id}>
              <NotesComponent
                className="notes-list__component"
                key={todo.id}
                todo={todo}
                item={componentInfo}
                onClick={getItemInfo}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <ComponentInfo item={componentInfo} />
    </div>
  );
};

export default Notes;
