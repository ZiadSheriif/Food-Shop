import React from 'react';
import mealImage from '../../../assets/meals.jpg';
import {StyledHeader, StyledImage, StyledDiv} from "./Header.styled";

const Header = (props) => {
    return (
        <>
            <StyledHeader>
                <h1>React Meals</h1>
                <button>Card</button>
            </StyledHeader>
            <StyledDiv>
                <StyledImage src={mealImage} alt={"A table of delicious food"}/>
            </StyledDiv>
        </>
    );
};
export default Header;