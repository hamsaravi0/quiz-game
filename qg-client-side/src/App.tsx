import React from 'react';
import { QuizForm } from './FComponents/QuizForm';
import './App.css';

// import React, { useState } from "react";

// // interface Props {
// //     init: string | number;
// // }

// export const useForm: React.FC<{initialValue: string}> = ({ initialValue }) => {
//     const [value, setValues] = useState<string>(initialValue);
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({
//             ...value,

//         })
//     }
//     return {
//         value, 
//         handleChange
//     };
// }

const App: React.FC = () => {
  
  return  <QuizForm />

}

export default App;
