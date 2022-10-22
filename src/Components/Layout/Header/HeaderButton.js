import CardIcon from "../../Card/CardIcon";
import classes from './HeaderButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <>
            <button onClick={props.onShow} className={classes.button}>
                <span className={classes.icon}><CardIcon/></span>
                <span className={classes.bump}>Your Cart</span>
                <span className={classes.badge}> &nbsp;3</span>
            </button>
        </>
    );

};
export default HeaderCartButton;