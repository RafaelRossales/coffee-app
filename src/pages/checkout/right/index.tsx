import { Container } from "./style";
import { Form } from "./form";
import { Payment } from "./payment";

export function Right(){
    return(
        <Container>
            <h1>Complete seu Pedido</h1>
            <Form/>
            <Payment/>
        </Container>
    )
}