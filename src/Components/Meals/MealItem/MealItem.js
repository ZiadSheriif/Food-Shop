import {StyledMealItem, StyledMealItemPrice, StyledMealItemName} from "./MealItem.styled";
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price}`;
    // console.log(price);

    return (
        <>
            <StyledMealItem>
                <div>
                    <StyledMealItemName>{props.name}</StyledMealItemName>
                    <em>{[props.description]}</em>
                    <StyledMealItemPrice> {price}</StyledMealItemPrice>
                </div>
                <MealItemForm id={props.id}/>
            </StyledMealItem>
        </>
    );

};
export default MealItem;