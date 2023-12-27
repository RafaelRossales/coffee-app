import styled from "styled-components";

interface FormContainerProps{
    width:string;
    height:string
}

export const FormContainer=styled.div<FormContainerProps>`
    display: flex;
    flex-direction: row;
    width: ${(props)=> props.width};
    height: ${(props)=> props.height};
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 5px;

    border-radius: 6px;
    background: #E6E5E5;
`

export const FormButton = styled.div`
    margin-left: 10px;
    /* display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    background-color: #4B2995;

    width: auto;
    border: none;
    cursor: pointer; */
`
export const PlusControl = styled.button`
    width: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
export const MinusControl = styled.button`
    width: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
`