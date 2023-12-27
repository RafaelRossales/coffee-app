import styled from "styled-components";

export const CardContent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    height: 310px;
    flex-shrink: 0;
    background: orange;
    border-radius: 6px 36px;
    position: relative;
    background:  #F3F2F2;
    margin-top: 10px;
`
export const CardImage=styled.div`
    align-self: center;
    position: relative;
    z-index: 10;
    margin-top:-12%;
`
export const CardTag = styled.div`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: beige;
    margin-top: 5px;

    p{
        color:  #C47F17;
        font-family: Roboto;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 13px */
        text-transform: uppercase;
    }
`

export const TagSection = styled.div`
    width: auto;
    display: flex;
    flex-direction:row;
    gap:3px;
    align-items: center;
    justify-content: center;
`
export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 256px;
`

export const CardText= styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 216px;
    margin-top: 12px;

    h1{
        color:  #403937;
        text-align: center;

        /* Title/Title S */
        font-family: Baloo 2;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; 
    }

    p{
        color:  #8D8686;
        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const CardFooter = styled.div`
    width: 208px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin-bottom:20px ;
    /* bottom: 0; */
    margin-top: 17%;
`

export const CoffeePrice = styled.div`
    color: #574F4D;
    /* Title/Title M */
    font-family: Baloo 2;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    display: flex;
    align-items: baseline;
    justify-content: center;
    
    span{
        margin-right: 2px;
        font-size: 14px;
        font-weight: 400;
    }
`