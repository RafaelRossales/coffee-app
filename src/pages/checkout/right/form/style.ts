import styled from "styled-components";

export const FormContainer = styled.div`
display: flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 32px;
align-self: stretch;
border-radius: 6px;
background: #F3F2F2;
width: 640px;
`
export const FormContent = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 32px;
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    color: red;

    p{
        margin-left: 22px;
        color: #574F4D;

        /* Text/Regular S */
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
    }
`

export const FormBody = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap:16px;
`

export const FormSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const IconTitle = styled.div`
    display: flex;
    flex-direction: row;

    h1{
        color: #403937;

        /* Text/Regular M */
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
    }
`