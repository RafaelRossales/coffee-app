import { 
    Diviser, 
    ResumeCardContainer,
    ResumeCardImage, 
    ResumeCardInfo, 
    ResumeCardInfoSection, 
    ResumeCardPrice,
    RemoveButton 
} from "./style";
import AmericanExpress from '../../../../../public/img/coffees/expresso_americano.png'
import { CardForm } from "../../../Home/components/Body/components/card/form";
import { TrashSimple } from "phosphor-react";

export function ResumeCard(){
    
    return(
        <ResumeCardContainer>
            <ResumeCardImage>
                <img src={AmericanExpress} width={64} height={64}/>
            </ResumeCardImage>
            <ResumeCardInfo>
                <p>Expresso Tradicional</p>
                <ResumeCardInfoSection>
                    <CardForm 
                        width="72px" 
                        height="32px" 
                        button={<RemoveButton><TrashSimple size={22} color="#8047F8"/><span>Remover</span></RemoveButton>}
                    />
                </ResumeCardInfoSection>
            </ResumeCardInfo>
            <ResumeCardPrice>
                <span>R$ 9,90</span>
            </ResumeCardPrice>
        </ResumeCardContainer>
    )
}