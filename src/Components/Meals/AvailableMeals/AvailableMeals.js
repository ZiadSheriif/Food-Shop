import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
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
    ]
    const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

    return (
        <section>
            <ul className={classes.meals}>
                {mealList}
            </ul>
        </section>
    );
};
export default AvailableMeals;