import { useState } from "react";

export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible((prevState) => !prevState);
    };

    const inputType = visible ? "text" : "password";

    return { inputType, visible, toggleVisibility };
};

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
