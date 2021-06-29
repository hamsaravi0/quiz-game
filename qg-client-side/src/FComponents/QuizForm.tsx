import React from "react";
import { useInput } from "./useInput";

export const QuizForm: React.FC = () => {
    const firstNameInput= useInput('');
    const lastNameInput = useInput('');

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Submitting Name ${firstNameInput.value}, ${lastNameInput.value}`);
        firstNameInput.reset(); lastNameInput.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First name" {...firstNameInput.bind}/>
            <input type="text" placeholder="Last name" {...lastNameInput.bind}/>
            <input type="submit" value="Submit" />
        </form>
    )
}