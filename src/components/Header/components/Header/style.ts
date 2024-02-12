import styled from "styled-components";

export const Container = styled.header`
    max-width: 1160px;
    padding:32px 20px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Aside = styled.aside`
    display: flex;
    gap:12px;

    div{
        display: flex;
        align-items:center;
        gap:4px;

        background-color: ${({theme}) => theme.colors['purple-light']};

        svg{
            color:${({theme}) => theme.colors.purple};
        }

        span{
            color:${({theme}) => theme.colors['purple-dark']};
        }

        padding:10px 8px;
        border-radius:6px;
    }

    a{
        display: flex;
        align-items: center;
    }
`