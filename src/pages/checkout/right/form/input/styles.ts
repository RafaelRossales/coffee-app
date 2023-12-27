import styled from "styled-components";

interface InputSize{
    width:string,
    height:string
}

export const InputComponent = styled.input<InputSize>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 4px;
    border: 1px solid #E6E5E5;
    background: #EDEDED;
    width: ${(props)=> props.width};
    height: ${(props)=> props.height};
    padding: 12px;
`