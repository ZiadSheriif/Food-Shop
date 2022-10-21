import React from 'react';
import {StyledButtonForm,StyledFormHeader,StyledFormInput} from "./MealItemForm.styled";

const MealItemForm = () => {
    return (
        <>
            <form>
                <div>
                    <StyledFormHeader>Amount</StyledFormHeader>
                    <StyledFormInput type={"number"} min={0}/>
                </div>
                <StyledButtonForm>
                    + Add
                </StyledButtonForm>
            </form>
        </>
    );
};

export default MealItemForm;
