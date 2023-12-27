import { HeaderContainer, HeaderInfo } from "./styles";
import Logo from '../../../public/img/Logo.svg'
import { LocalizationTag } from "./components/Localization/LocalizationTag";
import { Cart } from "./components/cart";


export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo}/>
            <HeaderInfo>
                <LocalizationTag/>
                <Cart/>
            </HeaderInfo>
        </HeaderContainer>
    )
}