import styled from "styled-components";

interface CheckBoxProps{
    checked:boolean
}
export const PaymentCheckBoxContainer = styled.div<CheckBoxProps>`
   width: 178px;
   height: 51px;
   padding-left: 5px;
   margin: 0px 4px;
   border-radius: 5px;
   cursor: pointer;
   border: 1px solid ${props => props.checked ? '#8047F8' : '#E5E5E5'};
   background-color: #E6E5E5;
   
   display: flex;
   justify-content: space-around;
   align-items: center;

   p{
    color: #574F4D;

    /* Components/Button S */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
   }
`;
