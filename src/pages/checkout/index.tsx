import { Left } from "./left";
import { Right } from "./right";
import { Payment } from "./right/payment";
import { Container } from "./style";


export function Checkout(){
    return(
        <Container>
            <Right/>
            <Left/>
        </Container>
    )
}