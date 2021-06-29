import React from "react";
import { useInput } from "./useInput";

export const QuizForm: React.FC = () => {
    const { value, bind, reset } = useInput('');

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Submitting Name ${value}`);
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First name" {...bind}/>
            <input type="submit" value="Submit" />
        </form>
    )
}