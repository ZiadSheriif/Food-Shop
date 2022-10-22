import React from 'react';
import mealImage from '../../../assets/meals.jpg';
import {StyledHeader, StyledImage, StyledDiv} from "./Header.styled";
import HeaderCartButton from "./HeaderButton";

const Header = (props) => {
    return (
        <>
            <StyledHeader>
                <h1>React Meals</h1>
                <HeaderCartButton  onShow={props.onShow}>Card</HeaderCartButton>
            </StyledHeader>
            <StyledDiv>
                <StyledImage src={mealImage} alt={"A table of delicious food"}/>
            </StyledDiv>
        </>
    );
};
export default Header;