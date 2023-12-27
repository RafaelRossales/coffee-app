
// import { Container } from "../style";
import { ResumeCard } from "./ResumeCard";
import { CardContainer, CoffeeSection, Container, FinishButton, ResumeSection, Text } from "./style";

export function Left(){
    return(
        <Container>
            <h1>Cafés Selecionados</h1>
            <CardContainer>
                <CoffeeSection>
                    <ResumeCard/>
                    <ResumeCard/>
                </CoffeeSection>
                <ResumeSection>
                    <Text><p>Total itens</p><p> R$29,70</p></Text>
                    <Text><p>Entrega</p><p> R$3,50</p></Text>
                    <Text><span>Total</span><span> R$33,20</span></Text>

                    <FinishButton>
                        Confirmar Pedido
                    </FinishButton>
                </ResumeSection>
            </CardContainer>
        </Container>
    )
}