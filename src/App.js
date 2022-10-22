import React, {useState} from 'react'
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals/Meals";
import Note from "./Components/Layout/Note/Note";
import Card from 'react-bootstrap/Card';
import Cart from "./Components/Cart/Cart";

function App() {
    const [cartShown, setCartShown] = useState(false);
    const showCartHandler = () => {
        setCartShown(true);
    };
    const hideCartHandler = () => {
        setCartShown(false);
    };
    return (
        <>
            {cartShown && <Cart onClosed={hideCartHandler}/>}
            <Header onShow={showCartHandler}/>
            <main>
                <Meals/>
            </main>

        </>
    );
}

export default App;
