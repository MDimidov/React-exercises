import { useState } from "react";

export default function useForm(initialValues, onSubmitHandler) {
    const [formValues, setFormValues] = useState(initialValues);


    function onChange(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        
        if (onSubmitHandler) {
            onSubmitHandler(formValues);
            setFormValues({});
        }
    }

    return {
        formValues,
        onChange,
        onSubmit,
    };
}