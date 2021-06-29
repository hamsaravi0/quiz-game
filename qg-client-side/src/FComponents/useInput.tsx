import React, { useState } from "react";

interface Bind {
    value: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
interface Package {
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>,
        reset: () => void,
        bind: Bind
    }

export const useInput = (initialValue: string ) : Package => {
    const [value, setValue] = useState<string>(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value, 
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value);
            }
        }
    }
}