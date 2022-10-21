import styled, {keyframes} from 'styled-components';
import meals from "../Meals/Meals";

const mealsAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const StyledSectionMeal = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${mealsAppear} 1s ease-out forwards;
`

export const StyledUlMeal = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
