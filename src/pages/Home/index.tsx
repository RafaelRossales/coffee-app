import { Banner } from "./components/Banner";
import { Content } from "./components/Banner/style";
import { Body } from "./components/Body";


export function Home(){
    return(
        <>
        <Banner/>
        {/* <Content> */}
            <Body/>
        {/* </Content> */}
        </>
    )
}