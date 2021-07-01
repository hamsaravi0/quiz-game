import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Button } from '@material-ui/core';

import { useInput } from "./useInput";


export const QuizForm: React.FC = () => {
    const name = useInput('');
    const answers = useInput('');

    const handleSubmit = () => {
        alert(`Submitting Form: Name of Quiz: ${name.value}, with answers: ${answers.value}`);
        answers.reset(); name.reset();
    }

    return (
        <div>
            <Container maxWidth="sm">
                <TextField
                id="standard-textarea"
                label="Quiz Name"
                {...name.bind}
                />
            </Container>
            <Container maxWidth="sm">
                <TextField
                id="standard-textarea"
                label="Answers"
                {...answers.bind}
                multiline
                />
            </Container>
            <Container>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Container>
        </div>
    )
}