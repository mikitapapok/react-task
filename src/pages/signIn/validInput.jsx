import React from 'react';
import { PropTypes } from 'prop-types';

import { Field } from 'formik';
import { ValidContainer, StyledField } from './styled';

const ValidInput = ({ type, error, name, label, autoComplete }) => {
    return (
        <ValidContainer>
            <Field
                as={StyledField}
                type={type}
                name={name}
                label={error || label}
                error={!!error}
                autoComplete={autoComplete}
            />
        </ValidContainer>
    );
};

ValidInput.propTypes = {
    type: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    autoComplete: PropTypes.string,
};
export default ValidInput;
