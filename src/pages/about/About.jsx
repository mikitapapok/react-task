import React from 'react';
import { PageTitle, SharedBox } from '../sharedNotes/styled';
import Box from '@mui/material/Box';
import { List, ListItemText } from '@mui/material';

const About = () => {
    return (
        <SharedBox>
            <PageTitle className="dark">About</PageTitle>
            <Box>
                <h3>React task 3</h3>
                <p>
                    Main menu with few tabs must be created. Clicking each tab directs a user to a
                    new page. If URL does not exist, a user will be redirected to the Error page.
                </p>
                <List>
                    <h3>Requirement</h3>
                    <ListItemText>Follow requirement of first task</ListItemText>
                    <ListItemText>My Notes page includes list of personal notes</ListItemText>
                    <ListItemText>Shared Notes page includes List of shared Notes</ListItemText>
                    <ListItemText>Otherwise it must be redirected to error page</ListItemText>
                </List>
            </Box>
        </SharedBox>
    );
};

export default About;
