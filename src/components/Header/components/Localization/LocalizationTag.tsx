import { Container } from "./styles";
import Mark from '../../../../../public/img/Icon.svg'

export function LocalizationTag(){
    return(
        <Container>
            <img src={Mark}/>
            Porto Alegre, RS
        </Container>
    )
}