import React from 'react'
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals/Meals";
import Note from "./Components/Layout/Note/Note";
import Card from 'react-bootstrap/Card';

function App() {
    return (
        <>
            <Header/>
            <main>
                <Meals/>
            </main>

        </>
    );
}

export default App;
