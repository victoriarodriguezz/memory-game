import { useState } from "react";

const useCache = () => {
    const [userName, setUserName] = useState(localStorage.getItem('user-name') || '');

    const updateUserName = (name) => {
        setUserName(name);
        localStorage.setItem('user-name', name);
    }

    return { userName, updateUserName };
}

export default useCache;