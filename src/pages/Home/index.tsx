import { Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Heading, Hero, HeroContent, CoffeeList} from "./style";
import { Info } from "phosphor-react";
import { useTheme } from "styled-components";
import { Card } from "./components/Body/components/card";
import { coffees } from './../../../data.json'

interface CardTags{
    color:string,
    description:string
}

interface CardProps{
    id:number
    url:string,
    title:string,
    tags:CardTags[]
    subtitle:string,
    description:string
    price:string
    amount:number
}

export function Home(){
    
    const theme = useTheme();

    return(
        <div>
            <Hero>
                <HeroContent>
                    <Heading>
                        <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde estiver, 
                            qualquer hora.
                        </span>
                    </Heading>
                    <Info>
                        <div>
                            <ShoppingCart
                            size={32}
                            weight="fill"
                            color={theme.colors.background}
                            style={{backgroundColor:theme.colors['yellow-dark']}}
                            />
                            <span>Compra simples e segura</span>
                        </div>
                        <div>
                            <Package
                             size={32}
                             weight="fill"
                             color={theme.colors.background}
                             style={{ backgroundColor: theme.colors['base-text'] }}
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div>
                            <Timer
                            size={32}
                            weight="fill"
                            color={theme.colors.background}
                            style={{ backgroundColor: theme.colors.yellow }}
                            />
                            <span>Entrega rápida e rastreada</span>
                        </div>
                    </Info>
                <img src='../../../../../../../public/img/hero.svg' alt="Café do Coffee Delivery"/>
                </HeroContent>
                <img src='../../../../../../../public/img/hero-bg.svg' id="hero-bg" alt=""/>
            </Hero>
            <CoffeeList>
                <h2>Nossos cafés</h2>

                <div>
                {coffees.map((coffee) => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
                </div>
            </CoffeeList>
        </div>
    )
}