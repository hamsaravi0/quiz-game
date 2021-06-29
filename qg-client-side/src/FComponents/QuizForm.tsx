import React, { useState } from "react";

// interface Props {
//     text: string,
//     ok?: boolean, // can make this optional by adding ? before :
//     i: number,
//     fn: (bob:string) => string;
// }

export const QuizForm: React.FC = () => {
    const [name, setName] = useState<string>();
    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Submitting Name ${name}`);
    }
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="First name" onChange={handleChange}/>
            <input type="submit" value="Submit" />
        </form>
    )
}