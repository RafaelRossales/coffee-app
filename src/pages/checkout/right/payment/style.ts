import styled from "styled-components";

export const PaymentContainer = styled.div`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    border-radius: 6px;
    background:#F3F2F2;
    width: 640px;
    height: 207px;
`

export const PaymentMethods = styled.div`
    display: flex;
    flex-direction: row;
`
export const PaymentTitle = styled.div`
    display: flex;
    flex-direction: column;
    color: #574F4D;
    /* Text/Regular S */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    
    span{
        margin-left: 21px;
    }
`

export const IconTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;

p{
    color:  #403937;

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
}

`
