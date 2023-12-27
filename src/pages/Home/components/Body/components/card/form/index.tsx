import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { FormButton, FormContainer, MinusControl, PlusControl } from "./styles";
import { ReactNode, useState } from "react";

interface CardFormProps{
    width:string
    height:string
    button:ReactNode
}

export function CardForm({width,height,button}:CardFormProps){

    let [amount,setAmount] = useState(1);
    let [disableMinus,setDisableMinus]= useState(false);

    function addCoffeeAmount(){
        setAmount(()=>{
            if(disableMinus) setDisableMinus(!disableMinus);
            return amount++
        });
    }

    function removeCoffeeAmount(){
        setAmount(()=>{
            if(amount <= 1) setDisableMinus(true)
            return amount--
        });
    }

    return(
        <>
        <FormContainer width={width} height={height}>
            <MinusControl onClick={removeCoffeeAmount} disabled={disableMinus}>
                <Minus size={12} color="#8047F8" />
            </MinusControl>
                {amount}
            <PlusControl onClick={addCoffeeAmount}>
                <Plus size={12}  color="#8047F8"/>
            </PlusControl>
        </FormContainer>
        <FormButton>
            {button}
        </FormButton>
        </>


    )
}