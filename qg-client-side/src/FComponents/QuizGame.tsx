import { render } from "@testing-library/react";
import React, { useState } from "react";

import { TextField, Container, Button } from '@material-ui/core';
import { useInput } from "./useInput";

export const QuizGame = () => {
    const word = useInput("");
    const data = [
        "attach",
        "wholesale",
        "screw",
        "injure",
        "beef",
        "third",
        "lonely",
        "illustrious",
        "chilly",
        "wrist",
        "left",
        "powerful"
    ];
    const [display, setDisplay] = useState<number[]>(new Array(data.length).fill(0));

    function handleSubmit() {
        let match = -1;
        data.forEach((text, i) => {
            if(text === (word.value)) {
                match = i;
            }
        })
        if(match !== -1) {
            setDisplay(prevField => {
                const field = [...prevField];
                field[match] = 1;
                return field;
            })
        }
        word.reset();
    }

    function handleOnKeyDown(e : React.KeyboardEvent) {
        if(e.code === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div>
            <Container>
                <TextField
                id="standard-textarea"
                label="Enter word"
                onKeyDown={handleOnKeyDown}
                {...word.bind}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Container>
       
            <table>
            <thead>
                <tr>
                    <th>Items</th>
                </tr>
            </thead>
            <tbody>
            {data.map((row, i) => {
                return (
                <tr>
                    <td>{display[i] === 0 ? "Locked" : row}</td>
                </tr>
                )
            })}
            </tbody>
        </table>
      </div>
    )

}
