import { MapPinLine } from "phosphor-react";
import { InputComponent } from "./input/styles";
import { FormBody, FormContainer, FormContent, FormSection, IconTitle, Title } from "./style";

export function Form(){
    return(
        <FormContainer>
        <FormContent>
            <Title>
                <IconTitle>
                    <MapPinLine size={22} color="#C47F17"/>
                    <h1>Endereço de entrega</h1>
                </IconTitle>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </Title>
        </FormContent>
        <FormBody>
            <InputComponent
                placeholder="CEP" 
                width='230px' 
                height='42px'
             />
             <InputComponent
                placeholder="Rua" 
                width='560px' 
                height='42px'
             />
             <FormSection>
                <InputComponent
                    placeholder="Rua" 
                    width='200px' 
                    height='42px'
                />
                <InputComponent
                    placeholder="Rua" 
                    width='348px' 
                    height='42px'
                />
             </FormSection>
             <FormSection>
                <InputComponent
                    placeholder="Bairro" 
                    width='200px' 
                    height='42px'
                />
                <InputComponent
                    placeholder="Cidade" 
                    width='276px' 
                    height='42px'
                />
                <InputComponent
                    placeholder="UF" 
                    width='60px' 
                    height='42px'
                />
             </FormSection>
        </FormBody>
    </FormContainer>
    )
}