import {StyledMealSummaryHeaderTwo,StyledMealSummarySection} from "./MealSummary.styled";

const MealSummary = () => {
    return (
        <StyledMealSummarySection>
            <StyledMealSummaryHeaderTwo >
                Delicious Food , Delivered To You
            </StyledMealSummaryHeaderTwo>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </StyledMealSummarySection>

    );

};
export default MealSummary;