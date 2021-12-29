import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { ListItemText } from '@mui/material';
import { ModalUnstyled } from '@mui/material';

import ComponentInfo from './componentInfo';
import NoteListItem from './noteListItem';
import {
    Backdrop,
    ChangeDescription,
    Container,
    EditButton,
    ModalWindow,
    NotesList,
    StyledList,
    StyledListComponent,
    StyledField,
    NotesContainer,
    NotFoundText,
    LoadingButton,
} from './styled';

import { addTodo, changeTodo } from '../../redux/actions/actionCreators';
import { getState, getTodos } from '../../selectors/selectors';
import SortForm from './sortForm';
import NewTodoForm from './newTodoForm';

const Notes = ({ condition }) => {
    const storeState = getTodos();
    const todoList = useSelector(getState).todos;
    const sharedTodos = useSelector(getState).sharedTodos;
    const dispatch = useDispatch();

    const [todos, setTodos] = useState([]);
    const [dateValue, setDateValue] = useState([new Date('2000'), new Date('2030')]);
    const [searchInputValues, setSearchInputValue] = useState('');
    const [componentInfo, setComponentInfo] = useState({});
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [created, setCreated] = useState(false);
    const [changeDescriptionInputValue, setChangeDescriptionInputValue] = useState('');
    const [currentTodo, setCurrentTodo] = useState(null);
    const [loadingInfiniyScroll, setLoadingInfinityScroll] = useState(false);

    const dragStartTodo = (card) => {
        setCurrentTodo(card);
    };
    const dropHandler = (e, card) => {
        e.preventDefault();
        setTodos(
            todos.map((element) => {
                if (element.id === card.id) {
                    return { ...element, id: currentTodo.id };
                }
                if (element.id === currentTodo.id) {
                    return { ...element, id: card.id };
                }
                return element;
            })
        );
    };

    const getSortList = (list) => {
        return list.filter((todo) =>
            dateValue[1]
                ? new Date(todo.date) >= dateValue[0] &&
                  new Date(todo.date) <= dateValue[1] &&
                  todo.title.toLowerCase().includes(searchInputValues.toLowerCase())
                : new Date(todo.date) >= dateValue[0] &&
                  todo.title.toLowerCase().includes(searchInputValues.toLowerCase())
        );
    };

    const loadDataOnScroll = () => {
        setLoadingInfinityScroll(!loadingInfiniyScroll);
        setTodos((prev) => (condition ? [...prev, ...sharedTodos] : [...prev, ...todoList]));
    };

    useEffect(() => {
        const sortedTodo = getSortList(todoList);
        const sortedSharedTodo = getSortList(sharedTodos);
        setTodos(!condition ? sortedTodo : sortedSharedTodo);
    }, [storeState, dateValue, searchInputValues, created]);

    const setDescription = (element) => {
        setChangeDescriptionInputValue(element.target.value);
    };

    const pickDatesToSort = (payload) => {
        setDateValue(payload);
    };

    const resetOption = () => {
        setSearchInputValue('');
        setDateValue([new Date('2000'), new Date('2030')]);
    };

    const getSearchValue = (e) => {
        setSearchInputValue(e.target.value);
    };

    const createTodo = (todo) => {
        dispatch(addTodo(todo));
        setCreated(!created);
    };

    const submitFormChanges = (element) => {
        const changedTodoList = todos.map((todo) => {
            return todo.id === element.id
                ? { ...todo, description: changeDescriptionInputValue }
                : todo;
        });

        const currentElement = changedTodoList.find((todo) => todo.id === element.id);

        setComponentInfo(currentElement);
        dispatch(changeTodo(currentElement));
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
    const sortTodos = (prevTodo, nextTodo) => {
        if (prevTodo.id > nextTodo.id) {
            return 1;
        } else {
            return -1;
        }
    };

    return (
        <NotesContainer>
            <SortForm
                resetOption={resetOption}
                dates={dateValue}
                pickDatesToSort={pickDatesToSort}
                searchInput={searchInputValues}
                getSearchValue={getSearchValue}
            />
            <NotesList>
                {!condition && <NewTodoForm createTodo={createTodo} />}
                <Container>
                    <StyledList>
                        {todos.length ? (
                            todos.sort(sortTodos).map((todo) => (
                                <StyledListComponent
                                    isActive={componentInfo?.id === todo.id}
                                    key={todo.id}
                                >
                                    <ListItemText
                                        draggable={true}
                                        key={todo.id}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDragStart={() => dragStartTodo(todo)}
                                        onDrop={(e) => dropHandler(e, todo)}
                                        primary={
                                            <NoteListItem
                                                id={todo.id}
                                                title={todo.title}
                                                showId={false}
                                                description={todo.description}
                                                date={todo.date}
                                                getItemInfo={getItemInfo}
                                                changePickedItem={changePickedItem}
                                                condition={condition}
                                            />
                                        }
                                    />
                                </StyledListComponent>
                            ))
                        ) : (
                            <NotFoundText>nothing found</NotFoundText>
                        )}
                        <LoadingButton onClick={loadDataOnScroll}>load more data</LoadingButton>
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
                            <StyledField
                                type="text"
                                onChange={setDescription}
                                value={changeDescriptionInputValue}
                                label="change value"
                            />
                            <EditButton onClick={() => submitFormChanges(componentInfo)}>
                                Change
                            </EditButton>
                        </ChangeDescription>
                    </ModalWindow>
                </ModalUnstyled>
            )}
        </NotesContainer>
    );
};
Notes.propTypes = {
    condition: PropTypes.bool,
};
export default Notes;
