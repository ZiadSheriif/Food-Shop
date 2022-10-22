import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemToCartHandler = (item) => {
    }

    const removeItemFromCartHandler = (item) => {
    }
    const cartContext = {
        items: [],
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        totalAmount: 0
    }

    return <CartContext.Provider value={}>
        {props.children}
    </CartContext.Provider>

}
export default CartProvider;