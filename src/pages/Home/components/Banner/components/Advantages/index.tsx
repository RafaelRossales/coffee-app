import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Advantage, AdvantageColumn, AdvantageIcon, AdvantagesConatiner } from "./styles";

export function Advantages(){
    return(
        <AdvantagesConatiner>
            <AdvantageColumn>
                <Advantage>
                    <AdvantageIcon testColor="yellow_dark">
                        <Timer color="#ffff"/>
                    </AdvantageIcon>
                    Compra Simples e Segura
                </Advantage>
                <Advantage >
                    <AdvantageIcon testColor="yellow">
                        <ShoppingCart color="#ffff"/>
                    </AdvantageIcon>
                    Embalagem Mantém o café intacto
                </Advantage>
            </AdvantageColumn>
            <AdvantageColumn>
                <Advantage>
                    <AdvantageIcon testColor="gray">
                        <Package color="#ffff"/>
                    </AdvantageIcon>
                    Entrega rápida e rastreada
                </Advantage>
                <Advantage>
                    <AdvantageIcon testColor="purple">
                        <Coffee color="#ffff"/>
                    </AdvantageIcon>
                    O café chega fresquinho até você
                </Advantage>
            </AdvantageColumn>
        </AdvantagesConatiner>
    )
}