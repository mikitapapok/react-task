import React, { useEffect, useState } from 'react';

import { ListItemText } from '@mui/material';
import { ModalUnstyled } from '@mui/material';

import ComponentInfo from './componentInfo';
import NoteListItem from './noteListItem';
import { todoList } from '../../constants/noteList';
import {
    Backdrop,
    ChangeDescription,
    StyledInput,
    Container,
    EditButton,
    ModalWindow,
    NotesList,
    StyledList,
    StyledListComponent,
} from './styled';

const Notes = () => {
    const [initValue, setInitValue] = useState([]);
    const [componentInfo, setComponentInfo] = useState({});
    const [open, setOpen] = useState(false);
    const [changeDescriptionInputValue, setChangeDescriptionInputValue] = useState('');

    const localStorage = window.localStorage;
    useEffect(() => {
        setInitValue(JSON.parse(localStorage.getItem('todoList')) || todoList);
    }, []);

    const setDescription = (element) => {
        setChangeDescriptionInputValue(element.target.value);
    };

    const changeDescription = () => {
        const changedItem = initValue.find((todo) => todo.id === componentInfo.id);
        changedItem.description = changeDescriptionInputValue;
        localStorage.setItem('todoList', JSON.stringify(initValue));
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };

    const getItemInfo = (e) => {
        const getCurrentItem = initValue.find((todo) => {
            return todo.id == e.currentTarget.id;
        });
        setComponentInfo(getCurrentItem);
        setChangeDescriptionInputValue(getCurrentItem.description);
    };

    return (
        <>
            <NotesList>
                <Container>
                    <StyledList>
                        {initValue.map((todo) => (
                            <StyledListComponent
                                isActive={
                                    componentInfo && componentInfo.id === todo.id ? true : false
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
                    </StyledList>
                </Container>
                <ComponentInfo componentInfo={componentInfo} openModal={openModal} />
            </NotesList>
            {open && (
                <ModalUnstyled open={open} onClose={closeModal} BackdropComponent={Backdrop}>
                    <ModalWindow>
                        <h2>Change Item Description</h2>
                        <ChangeDescription>
                            <StyledInput
                                type="text"
                                onChange={setDescription}
                                value={changeDescriptionInputValue}
                            />
                            <EditButton onClick={changeDescription}>Change</EditButton>
                        </ChangeDescription>
                    </ModalWindow>
                </ModalUnstyled>
            )}
        </>
    );
};

export default Notes;
