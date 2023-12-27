import styled from "styled-components";

export const TextContainer = styled.div`
    width: 588px;
    height: auto;
    flex-direction: column;
    /* background-color: aqua; */
    display: flex;
    gap: 16px;
    color: #272221;

    h1{
        font-family: Baloo 2;
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 62.4px */
        align-self: stretch;
    }
    p{
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
    }
`

