import classes from './MealItem.module.css'

const MealItem = (props) => {
    const price = `$${props.price}`;
    console.log(price);

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <em >{[props.description]}</em>
                <div className={classes.price}> {price}</div>
            </div>
        </li>
    );

};
export default MealItem;