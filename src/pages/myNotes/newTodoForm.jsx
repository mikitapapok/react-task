import React from 'react';
import { Formik } from 'formik';

import {
    CreateTodoText,
    SearchButton,
    StyledCreateField,
    StyledCreateForm,
    StyledFormField,
} from './styled';
import { ValidationSchemeForCreate } from '../../constants/validation';
import PropTypes from 'prop-types';

const NewTodoForm = ({ createTodo }) => {
    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
            }}
            validationSchema={ValidationSchemeForCreate}
            onSubmit={(values, actions) => {
                createTodo(values);
                alert('New todo created');
                actions.resetForm();
            }}
        >
            {({ errors }) => (
                <StyledCreateForm>
                    <CreateTodoText>create new todo</CreateTodoText>
                    <StyledFormField
                        as={StyledCreateField}
                        name="title"
                        label={errors.description || 'Enter title'}
                        error={!!errors.title}
                        data-test-id="submit-form-field"
                    />
                    <StyledFormField
                        as={StyledCreateField}
                        name="description"
                        label={errors.description || 'Enter description'}
                        error={!!errors.description}
                    />
                    <SearchButton type="submit" data-button="1">
                        create
                    </SearchButton>
                </StyledCreateForm>
            )}
        </Formik>
    );
};
NewTodoForm.propTypes = {
    createTodo: PropTypes.func,
};
export default NewTodoForm;
