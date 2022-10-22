import Modal from '../Modal/Modal'
import {CartStyled, TotalStyled, Button, ButtonActions, ActionStyled} from "./Cart.styled";

const Cart = (props) => {
    const cartItems = (
        <CartStyled>
            {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
                <li>{item.name}</li>
            ))}
        </CartStyled>
    );

    return (
        <Modal onCLosed={props.onClosed}>
            {cartItems}
            <TotalStyled>
                <span>Total Amount</span>
                <span>35.62</span>
            </TotalStyled>
            <ActionStyled>
                <ButtonActions onClick={props.onClosed}>Close</ButtonActions>
                <Button>Order</Button>
            </ActionStyled>
        </Modal>
    );
};

export default Cart;