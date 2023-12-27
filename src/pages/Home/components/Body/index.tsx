import { Card } from "./components/card";
import { Grid } from "./components/grid/Grid";
import { BodyTitle, TestBody } from "./style";

import TraditionalCoffee from '../../../../../public/img/coffees/coffee_1.png';
import AmericanExpress from '../../../../../public/img/coffees/expresso_americano.png';
import SmoothExpress from '../../../../../public/img/coffees/expresso_cremoso.png';
import ColdExpress from '../../../../../public/img/coffees/expresso_gelado.png';
import CoffeeMilk from '../../../../../public/img/coffees/cafe_com_leite.png';
import Latte from '../../../../../public/img/coffees/latte.png';
import Cappuccino from '../../../../../public/img/coffees/cappucino.png';
import Macchiato from '../../../../../public/img/coffees/macchiato.png';
import Moccacino from '../../../../../public/img/coffees/moccacino.png';
import HotChocolate from '../../../../../public/img/coffees/chocolate_quente.png';
import Cuban from '../../../../../public/img/coffees/cubano.png';
import Havana from '../../../../../public/img/coffees/havaiano.png';
import Arab from '../../../../../public/img/coffees/arabe.png';
import Irish from '../../../../../public/img/coffees/irlandes.png';

import { ReactNode, useState } from "react";

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
export function Body(){

    const [coffees, setCoffees] = useState<CardProps[]>([{
        url:TraditionalCoffee,
        title:"Tradicional",
        subtitle:"Expresso Cremoso",
        description:"Café expresso tradicional com espuma cremosa",
        price:"9,90",
        tags:[{
            color:'',
            description:'Com leite',
        }]
    },
    {
        url:AmericanExpress,
        title:'',
        subtitle:'Expresso Americano',
        description:'Expresso diluído, menos intenso que o tradicional',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        }]
    },
    {
        url:SmoothExpress,
        title:'',
        subtitle:'Expresso Cremoso',
        description:'Café expresso tradicional com espuma cremosa',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        }]
    },
    {
        url:ColdExpress,
        title:'',
        subtitle:'Expresso Gelado',
        description:'Bebida peparada com café expresso e cubos de gelo',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        },
        {
            color:'',
            description:'Gelado'
        }]
    },
    {
        url:CoffeeMilk,
        title:'',
        subtitle:'Café com Leite',
        description:'Meio a meio de expresso tradiciona com leite vaporizado',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        },
        {
            color:'',
            description:'Com leite'
        }]
    },
    {
        url:Latte,
        title:'',
        subtitle:'Latte',
        description:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        },
        {
            color:'',
            description:'Com leite'
        }]
    },
    {
        url:Cappuccino,
        title:'',
        subtitle:'Capuccino',
        description:'Bebida com canela feita de doses iguais de café, leite e espuma',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        },
        {
            color:'',
            description:'Com leite'
        }]
    },
    {
        url:Macchiato,
        title:'',
        subtitle:'Macchiato',
        description:'Café expresso misturado com um pouco de leite quente e espuma',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        },
        {
            color:'',
            description:'Com leite'
        }]
    },
    {
        url:Moccacino,
        title:'',
        subtitle:'Mocaccino',
        description:'Café expresso com calda de chocolate, pouco leite e espuma',
        price:'9,90',
        tags:[{
            color:'',
            description:'Tradicional'
        },
        {
            color:'',
            description:'Com leite'
        }]
    },
    {
        url:CoffeeMilk,
        title:'',
        subtitle:'Chocolate Quente',
        description:'Bebida feita com chocolate dissolvido no leite quente e café',
        price:'9,90',
        tags:[{
            color:'',
            description:'Especial'
        },
        {
            color:'',
            description:'Com leite'
        }]
    },
    {
        url:Cuban,
        title:'',
        subtitle:'Cubano',
        description:'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price:'9,90',
        tags:[{
            color:'',
            description:'Especial'
        },
        {
            color:'',
            description:'Alcoólico'
        },
        {
            color:'',
            description:'Gelado'
        }]
    },
    {
        url:Cuban,
        title:'',
        subtitle:'Havaiano',
        description:'Bebida adocicada preparada com café e leite de coco',
        price:'9,90',
        tags:[{
            color:'',
            description:'Especial'
        }]
    },
    {
        url:Arab,
        title:'',
        subtitle:'Árabe',
        description:'Bebida preparada com grãos de café árabe e especiarias',
        price:'9,90',
        tags:[{
            color:'',
            description:'Especial'
        }]
    },
    {
        url:Irish,
        title:'',
        subtitle:'Irlandês',
        description:'Bebida a base de café, uísque irlandês, açucar e chantilly',
        price:'9,90',
        tags:[{
            color:'',
            description:'Especial'
        },
        {
            color:'',
            description:'Alcoólico'
        }]
    },
    
    
]);


    return(
<TestBody>
    {/* <BodyTitle>Nossos Cafés</BodyTitle> */}
    <Grid>
        {
            coffees.map((coffee)=>{
                return(
                    <Card
                        url={coffee.url}
                        title={coffee.title}
                        subtitle={coffee.subtitle}
                        description={coffee.description}
                        price={coffee.price}
                        tags={coffee.tags}
                    /> 
                )
            })
        }
        </Grid>
    </TestBody>
    )
}