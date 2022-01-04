import React from 'react';

import PropTypes from 'prop-types';

import { StyledSpan, EditButton, ShareButton, NoteListContainer } from './styled';
import shareIcon from '../../images/iconmonstr-share-9.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoList } from '../../selectors/selectors';
import { shareTodo } from '../../redux/actions/actionCreators';
const NoteListItem = ({
    getItemInfo,
    id,
    title,
    description,
    date,
    showId,
    openModal,
    changePickedItem,
    condition,
}) => {
    const todoList = useSelector(selectTodoList);
    const dispatch = useDispatch();
    const submitTodo = () => {
        const currentTodo = todoList.find((todo) => todo.id === id);
        dispatch(shareTodo(currentTodo));
        alert('Todo is shared');
    };
    const formatDescription =
        description.length > 20 ? `${description.slice(0, 20).trim()}...` : `${description}`;

    return (
        <NoteListContainer
            onClick={getItemInfo}
            id={id}
            onDoubleClick={changePickedItem}
            data-test-id="note-list-item"
        >
            <h2>{title}</h2>
            {showId && (
                <p>
                    <StyledSpan>Id: </StyledSpan>
                    {id.slice(0, 2)}
                </p>
            )}
            <p>
                <StyledSpan>Description: </StyledSpan>
                {showId ? description : `${formatDescription}`}
            </p>
            <p>
                <StyledSpan>Date: </StyledSpan>
                {date}
            </p>
            {showId && <EditButton onClick={openModal}>Edit</EditButton>}
            {!condition && !showId && (
                <ShareButton onClick={submitTodo}>
                    <img src={shareIcon} alt="" />
                </ShareButton>
            )}
        </NoteListContainer>
    );
};

NoteListItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    getItemInfo: PropTypes.func,
    showId: PropTypes.bool,
    openModal: PropTypes.func,
    changePickedItem: PropTypes.func,
    condition: PropTypes.bool,
};

export default NoteListItem;
