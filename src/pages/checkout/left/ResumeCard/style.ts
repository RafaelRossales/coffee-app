import styled from "styled-components";

export const ResumeCardContainer = styled.div`
    width: 368px;
    height: 80px;
    display: flex;
    padding: 8px 4px;
    justify-content: space-evenly;
    align-items: flex-start;
    align-self: stretch;
    background: #F3F2F2;
    margin-bottom: 25px;
    padding-bottom: 10px !important;
    border-bottom: 1px solid #E6E5E5;
    /* stroke-width: 1px; */
    /* stroke:  #E6E5E5; */
`

export const ResumeCardImage = styled.div`
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
`

export const ResumeCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    height: 64px;
`

export const ResumeCardInfoSection = styled.div`
    display: flex;
    flex-direction: row;
`

export const Diviser = styled.div`
    border: 1px solid #E6E5E5;
    width: 368px;
`

export const ResumeCardPrice = styled.div`
    display: flex;
    background: #F3F2F2;
    span{
        color: #574F4D;
        text-align: right;

        /* Text/Bold M */
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 20.8px */
    }
`

export const RemoveButton = styled.button`
    display: flex;
    height: 32px;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    background: #E6E5E5;
    border: none;
    cursor: pointer;

    span{
        color:  #574F4D;

        /* Components/Button S */
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
        text-transform: uppercase;
    }
`
