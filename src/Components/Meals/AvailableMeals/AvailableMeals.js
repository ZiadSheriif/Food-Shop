import MealItem from "../MealItem/MealItem";
import Card from '../../Card/Card';
import {StyledSectionMeal, StyledUlMeal} from "./AvailableMeals.styled";

const DUMMY_MEALS = [
    {
        id: '1',
        name: 'Meal 1',
        description: 'Meal description 1',
        price: '100',
    },
    {
        id: '2',
        name: 'Meal 2',
        description: 'Meal description 2',
        price: '200'
    },
    {
        id: '3',
        name: 'Meal 3',
        description: 'Meal description 3',
        price: '300'
    },
    {
        id: '4',
        name: 'Meal 4',
        description: 'Meal description 4',
        price: '400'
    },
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>));
    // console.log(mealList);

    return (
        <StyledSectionMeal>
            <Card>
                <StyledUlMeal>
                    {mealList}
                </StyledUlMeal>
            </Card>
        </StyledSectionMeal>
    );
};
export default AvailableMeals;