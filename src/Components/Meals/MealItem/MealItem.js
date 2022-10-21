import  {StyledMealItem,StyledMealItemPrice,StyledMealItemName} from "./MealItem.styled";

const MealItem = (props) => {
    const price = `$${props.price}`;
    console.log(price);

    return (
        <StyledMealItem>
            <div>
                <StyledMealItemName>{props.name}</StyledMealItemName>
                <em >{[props.description]}</em>
                <StyledMealItemPrice> {price}</StyledMealItemPrice>
            </div>
        </StyledMealItem>
    );

};
export default MealItem;