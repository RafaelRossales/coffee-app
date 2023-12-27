import { ShoppingCart } from "phosphor-react";
import { CartContainer } from "./styles";

export function Cart(){
    return(
        <CartContainer>
            <ShoppingCart size={32} color="#C47F17"/>
        </CartContainer>
    )
}