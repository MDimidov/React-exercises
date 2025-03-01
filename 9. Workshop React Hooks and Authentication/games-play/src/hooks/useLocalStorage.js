import { useState } from "react";

export function useLocalStorage(key, initialValues) {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);

        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

            return persistedState;
        }

        return initialValues;
    });

    function setLocalStorageState(value) {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [state, setLocalStorageState];
}
