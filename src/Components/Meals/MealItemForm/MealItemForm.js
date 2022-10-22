import React from 'react';
import {StyledButtonForm} from "./MealItemForm.styled";
import Input from "./InputForm";

const MealItemForm = (props) => {
    return (
        <>
            <form style={{textAlign: "right"}}>
                <Input label={"Amount"}
                       input={{
                           id: 'amount_' + props.id,
                           min: 0,
                           max: 5,
                           defaultValue: '1',
                           step: 1,
                           type: "number"
                       }}/>
                <StyledButtonForm>
                    + Add
                </StyledButtonForm>
            </form>
        </>
    );
};

export default MealItemForm;
