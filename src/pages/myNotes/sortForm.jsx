import React from 'react';
import { PropTypes } from 'prop-types';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import {
    SearchButton,
    SearchField,
    SortFormContainer,
    StyledDatePicker,
    StyledTextField,
} from './styled';

const SortForm = ({ pickDatesToSort, dates, getSearchValue, resetOption, searchInput }) => {
    return (
        <>
            <SortFormContainer>
                <SearchField>
                    <StyledTextField value={searchInput} onChange={getSearchValue} />
                </SearchField>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateRangePicker
                        startText="Check-in"
                        endText="Check-out"
                        value={dates}
                        onChange={(newValue) => {
                            pickDatesToSort(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <StyledDatePicker>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </StyledDatePicker>
                        )}
                    />
                </LocalizationProvider>
                <SearchButton onClick={resetOption}>reset options</SearchButton>
            </SortFormContainer>
        </>
    );
};

SortForm.propTypes = {
    pickDatesToSort: PropTypes.func,
    dates: PropTypes.array,
    searchInput: PropTypes.string,
    getSearchValue: PropTypes.func,
    resetOption: PropTypes.func,
};

export default SortForm;
