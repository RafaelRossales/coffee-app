import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Left } from "./left";
import { Right } from "./right";
import { Payment } from "./right/payment";
import { Container } from "./style";


export function Checkout(){

    // const { cartProducts } = useContext(CartContext)
    // console.log(cartProducts)
    return(
        <Container>
            <Right/>
            <Left/>
        </Container>
    )
}