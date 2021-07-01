import React, { useState } from "react";

export const useInput= (initialValue: string ) => {
    const [value, setValue] = useState<string>(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(initialValue),
        bind: {
            value, 
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value);
            }
        }
    }
}