import styled from "styled-components";

export const CardContainer  = styled.div`
    display: flex;
    width: 448px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 6px 44px;
    background:#F3F2F2;
`

export const CoffeeSection = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    height: 250px;
    overflow: auto;
`

export const ResumeSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    flex-wrap: wrap;
    /* width: 368px; */
    /* width: 448px; */
`

export const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* width: 100vw; */
    /* width: auto; */
    /* background-color: yellow; */
    /* position: absolute; */
    width: 360px;

    p{
        color: #574F4D;
        text-align: right;

        /* Text/Regular M */
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
    }

    span{
        color:#403937;
        text-align: right;

        /* Text/Bold L */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 26px */
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;

    h1{
        color:#403937;
        /* Title/Title XS */
        font-family: Baloo 2;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 23.4px */
    }
`

export const FinishButton = styled.button`
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    background:#DBAC2C;
    color: white;
    border: none;
    margin-top: 10px;
    cursor: pointer;
`