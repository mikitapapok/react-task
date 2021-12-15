import React, { useState } from 'react';

import { ListItemText } from '@mui/material';

import ComponentInfo from './componentInfo';
import NoteListItem from './noteListItem';
import { todoList } from '../../constants/noteList';
import { Container, NotesList, StyledList, StyledListComponent } from './styled';

const Notes = () => {
    const [componentInfo, setComponentInfo] = useState({});

    const getItemInfo = (e) => {
        const getCurrentItem = todoList.find((todo) => {
            return todo.id == e.currentTarget.id;
        });
        setComponentInfo(getCurrentItem);
    };

    return (
        <NotesList>
            <Container>
                <StyledList>
                    {todoList.map((todo) => (
                        <StyledListComponent
                            isActive={componentInfo && componentInfo.id === todo.id ? true : false}
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
                </StyledList>
            </Container>
            <ComponentInfo componentInfo={componentInfo} />
        </NotesList>
    );
};

export default Notes;
