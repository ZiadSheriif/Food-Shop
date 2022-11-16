import styled from "styled-components";

export const CartStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`
export const ActionStyled = styled.div`
  text-align: right;
`

export const Button = styled.button
    `
      font: inherit;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #8a2b06;
      padding: 0.5rem 2rem;
      border-radius: 25px;
      margin-left: 1rem;
      &:hover, &:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
      }
    `
export const ButtonActions = styled.button`
  background-color: #8a2b06;
  color: white;
  font: inherit;
  cursor: pointer;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  &:hover, &:active {
    background-color: gray;
    // border-color: #5a1a01;
  }
`

