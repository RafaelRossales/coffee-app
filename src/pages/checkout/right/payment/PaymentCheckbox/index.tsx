import { ReactNode, useState } from "react";
import { PaymentCheckBoxContainer } from "./style";

interface CheckBoxProps{
    icon:ReactNode
    text:string
}

export function PaymentCheckbox({icon,text}:CheckBoxProps){

    let [checked, setCheck] = useState(false)

    function checkOption(){
        setCheck(!checked)
    }

    return(
        <PaymentCheckBoxContainer checked={checked}onClick={checkOption}>
            {icon} <p>{text}</p>
        </PaymentCheckBoxContainer>
    )
}