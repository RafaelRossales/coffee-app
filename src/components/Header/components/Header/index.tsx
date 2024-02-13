import { Link } from "react-router-dom";
import Logo from '../../../../../public/img/Logo.svg';
import { Aside, Container } from "./style";
import { MapPin } from "@phosphor-icons/react";
import { useCart } from "../../../../hooks/useCart";
import { ShoppingCart } from "phosphor-react";

export function Header(){

    const { cart } = useCart();
    return(
        <Container>
            <Link to="/">
                <img src={Logo}/>
            </Link>

            <Aside>
                <div>
                    <MapPin size={22} weight="fill"/>
                    <span>Porto Algere, RS</span>
                </div>

                <Link to={'cart'} aria-disabled={cart.length === 0}>
                    <ShoppingCart size={22} weight="fill"/>
                    {cart.length > 0 ? <span>{cart.length}</span> : null}
                </Link>
            </Aside>
        </Container>
    )
}