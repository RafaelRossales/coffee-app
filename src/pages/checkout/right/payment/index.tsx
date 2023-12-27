import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentCheckbox } from "./PaymentCheckbox";
import { IconTitle, PaymentContainer, PaymentMethods, PaymentTitle } from "./style";

export function Payment(){
    return(
        <PaymentContainer>
            <PaymentTitle>
                <IconTitle><CurrencyDollar size={22} color="#8047F8"/><p>Pagamento</p></IconTitle>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </PaymentTitle>
            <PaymentMethods>
                <PaymentCheckbox 
                icon={<CreditCard size={22} color="#8047F8" />} 
                text="Cartão de Crédito"
                />
                <PaymentCheckbox 
                icon={<Bank size={22} color="#8047F8" />} 
                text="Cartão de Débito"
                />
                <PaymentCheckbox 
                icon={<Money size={22} color="#8047F8" />} 
                text="Dinheiro"
                />
            </PaymentMethods>
        </PaymentContainer>
    )
}