import { useState } from "react";

export function useForms(initialValues, onSubmitHandler) {

    const [formValues, setFormValues] = useState(initialValues);

    function onChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();

        onSubmitHandler(formValues);
        
        setFormValues(initialValues);
    }

    function changeValues(newValues) {
        setFormValues(newValues);
    }
    return {
        formValues,
        onChangeHandler,
        onSubmit,
        changeValues,
    }
}