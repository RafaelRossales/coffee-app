
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
    display: flex;
    max-width: 1160px;
    padding:40px 20px;
    margin: 0 auto;
    gap:32px;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:16px;

    h2{
        ${mixins.fonts.titleXL};
        color:${({ theme }) => theme.colors['base-subtitle']};
    }

    > form{
        display: flex;
        flex-direction: column;
        gap:32px;
    }
`
export const FormsConatiner = styled.div`
    padding: 40px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-subtitle']};
    width:100%;
    min-width: 640px;

    display: flex;
    flex-direction: column;
    gap:32px;
    `
export const AddressContainer = styled(FormsConatiner)``

export const Heading = styled.div`
        display: flex;
        gap:8px;

        div{
            span{
                color:${({ theme }) => theme.colors['base-subtitle']};
            }

            p{
                ${mixins.fonts.textS};
            }
        }
    `
export const PaymentContainer = styled(FormsConatiner)``

export const PaymentHeading = styled(Heading)`
        svg{
            color:${({ theme }) => theme.colors.purple};
        }
    `

export const PaymentOptions = styled.div`
        display: flex;
        flex-direction: column;
        gap:8px;

        > div{
            display: flex;
            align-items:center;
            justify-content: space-between;
            gap:12px;
        }
    `

export const Coffee =  styled.div`
        display: flex;
        justify-content: space-between;

        > div{
            > img{
                width:64px;
                height:64px
            }

            display: flex;
            align-items:stretch;
            gap:20px;

            > div{
                display: flex;
                flex-direction: column;
                gap:12px;
            }
        }

        > aside{
            font-weight: bold;
        }
    `

export const CartTotal = styled.div`
        padding:40px;
        border-radius: 6px 36px;
        background-color: ${({ theme }) => theme.colors['base-card']};
        width:100%;
        min-width:448px;

        > span{
            display: flex;
            height: 1px;
            background-color:${({ theme }) => theme.colors['base-button']};
            margin:24px 0;
        }
    `

export const CardTotalInfo = styled.div`
        display: flex;
        flex-direction: column;
        gap:12px;

        div{
            display:flex;
            align-items: center;
            justify-content: space-between;

            span:first-child{
                ${mixins.fonts.textS};
            }

            span:last-child{
                ${mixins.fonts.textS};
            }
        }

        div:last-child{
            span{
                ${mixins.fonts.textL};
                font-weight: bold;
            }
        }
    `

export const CheckoutButton = styled.button`
    margin-top: 24px;
    width:100%;
    padding:12px;
    text-transform: uppercase;

    ${mixins.fonts.buttonG};
    color:${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};

    transition: all 0.2s;

    &:hover{
        background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    border-radius: 6px;
`

export const PaymentrErroMessage = styled.p`
    ${mixins.fonts.textXS};
    font-weight: 400;
    color:red;
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const AddressForm = styled.div`
    display:grid;
    grid-template-areas: 
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap:16px 12px;
    
`