import { CardBody, CardContent, CardFooter, CardImage, CardTag, CardText, CoffeePrice, TagSection } from "./styles";
import TraditionalCoffee from '../../../../../../../public/img/coffees/coffee_1.png'
import { CardForm } from "./form";

interface CardTags{
    color:string,
    description:string
}

interface CardProps{
    url:string,
    title:string,
    tags:CardTags[]
    subtitle:string,
    description:string
    price:string
}

export function Card({
    url,
    title,
    tags,
    subtitle,
    description,
    price
}:CardProps){
    return(
        <CardContent>
            <CardImage><img src={url}/></CardImage>
            <CardBody>
                <TagSection>
                    {
                        tags.map((tag) =>{
                            return(
                                <CardTag><p>{tag.description}</p></CardTag>
                            )
                        })
                    }
                </TagSection>
                <CardText>
                    <h1>{subtitle}</h1>
                    <p>{description}</p>
                </CardText>
            </CardBody>
            <CardFooter>
                    <CoffeePrice><span>R$</span>{price}</CoffeePrice>
            <CardForm/>
            </CardFooter>
        </CardContent>
    )
}