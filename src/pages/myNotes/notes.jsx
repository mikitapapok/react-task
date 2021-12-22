import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ListItemText } from '@mui/material';
import { ModalUnstyled } from '@mui/material';

import ComponentInfo from './componentInfo';
import NoteListItem from './noteListItem';
import { todoList } from '../../constants/noteList';
import { useLocalStorage } from '../../hooks/useLocaleStorage';
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
import PropTypes from 'prop-types';

const Notes = ({ condition }) => {
    const info = useSelector((state) => state.userInfo);
    const [todosFromLocalStorage, setTodosFromLocalStorage] = useLocalStorage('todoList', todoList);
    const [todos, setTodos] = useState([]);
    const [componentInfo, setComponentInfo] = useState({});
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [changeDescriptionInputValue, setChangeDescriptionInputValue] = useState('');

    useEffect(() => {
        setTodos(todosFromLocalStorage.filter((e) => (condition ? e.isShared : !e.isShared)));
        info;
    }, [todosFromLocalStorage]);

    const setDescription = (element) => {
        setChangeDescriptionInputValue(element.target.value);
    };

    const submitFormChanges = (element) => {
        const changedTodoList = todosFromLocalStorage.map((todo) => {
            return todo.id === element.id
                ? { ...todo, description: changeDescriptionInputValue }
                : todo;
        });
        const currentElement=changedTodoList.find(todo=>todo.id===element.id)
        setTodosFromLocalStorage(changedTodoList);
        setComponentInfo(currentElement)
        closeModal();
    };

    const changePickedItem = (element) => {
        getItemInfo(element);
        openModal();
    };

    const openModal = () => {
        setIsEditModalOpen(true);
    };
    const closeModal = () => {
        setIsEditModalOpen(false);
    };

    const getItemInfo = (e) => {
        const getCurrentItem = todos.find((todo) => {
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
                        {todos.map((todo) => (
                            <StyledListComponent
                                isActive={componentInfo?.id === todo.id}
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
                                            changePickedItem={changePickedItem}
                                        />
                                    }
                                />
                            </StyledListComponent>
                        ))}
                    </StyledList>
                </Container>
                <ComponentInfo componentInfo={componentInfo} openModal={openModal} />
            </NotesList>
            {isEditModalOpen && (
                <ModalUnstyled
                    open={isEditModalOpen}
                    onClose={closeModal}
                    BackdropComponent={Backdrop}
                >
                    <ModalWindow>
                        <h2>Change Item Description</h2>
                        <ChangeDescription>
                            <StyledInput
                                type="text"
                                onChange={setDescription}
                                value={changeDescriptionInputValue}
                            />
                            <EditButton onClick={() => submitFormChanges(componentInfo)}>
                                Change
                            </EditButton>
                        </ChangeDescription>
                    </ModalWindow>
                </ModalUnstyled>
            )}
        </>
    );
};
Notes.propTypes = {
    condition: PropTypes.bool,
};
export default Notes;
