import React from 'react';
import {StyledButtonForm} from "./MealItemForm.styled";
import Input from "./InputForm";

const MealItemForm = () => {
    return (
        <>
            <form style={{textAlign: "right"}}>
                <Input label={"Amount"}
                       input={{id: 'amount', min: 0, max: 5, defaultValue: '1', step: 1, type: "number"}}/>
                <StyledButtonForm>
                    + Add
                </StyledButtonForm>
            </form>
        </>
    );
};

export default MealItemForm;
