import React from 'react';
import {StyledFormHeader, StyledFormInput,StyledLabel} from "./MealItemForm.styled";

const Input = (props) => {
    return (
        <>
            <StyledFormHeader>
                <StyledLabel htmlFor={props.input.id}>{props.label}</StyledLabel>
                <StyledFormInput {...props.input}/>
            </StyledFormHeader>
        </>
    );
};

export default Input;
