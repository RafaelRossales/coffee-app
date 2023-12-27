import { ReactNode } from "react";
import { Container } from "./styles";


interface GridContent{
    children:ReactNode
}

export function Grid({children}:GridContent){
    return(
        <Container>
                {children}
        </Container>
    )
}