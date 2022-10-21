import styled from "styled-components";

export const StyledButtonForm = styled.button`
  //background: #92320c;
  //color: #fff;
  //border: none;
  //width: 75%;
  //border-radius: 20px;
  //height: 30%;
  //padding: 8px;
  //margin-top: 3px;
  //text-align: center;
  //display: block;
  //margin-left: 40px;
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  &:hover , &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`
export const StyledFormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`
export const StyledFormInput = styled.input`
  //width: 60px;
  //height: 30px;
  //border-color: whitesmoke;
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`
export const StyledLabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`