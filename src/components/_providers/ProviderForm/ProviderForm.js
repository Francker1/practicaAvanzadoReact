import React, { useState, useContext, createContext } from "react";
import { Form } from "react-bootstrap";

const FormContext = createContext({
    data: {},
    handleInputChange: () => {},
});


export const FormKeepAds = ({ onSubmit, initialState, store, ...props }) => {

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        onSubmit(data);
    };

    return (

        <FormContext.Provider value = {{data, handleInputChange}}>
                <Form onSubmit={submitForm} {...props} >
                    {props.children}
                </Form>
        </FormContext.Provider>
    )
}

export const Input = ({name, type, ...props}) => {

    const {data, handleInputChange} = useContext(FormContext);

    return (
        <>
            <Form.Control className="my-3" name={name} type={type} onChange={handleInputChange} value={data[name]} {...props}  />
        </>
    )
}