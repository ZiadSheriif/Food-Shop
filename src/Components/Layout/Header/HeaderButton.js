import CardIcon from "../../Card/CardIcon";
import classes from './HeaderButton.module.css';
import cartContext from "../../../Context/cart-context";
import {useContext} from "react";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(cartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    return (
        <>
            <button onClick={props.onShow} className={classes.button}>
                <span className={classes.icon}><CardIcon/></span>
                <span className={classes.bump}>Your Cart</span>
                <span className={classes.badge}> &nbsp;{numberOfCartItems}</span>
            </button>
        </>
    );

};
export default HeaderCartButton;