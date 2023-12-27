import { Advantages } from "./components/Advantages";
import { BannerImage } from "./components/Image";
import { Text } from "./components/Text/";
import { BannerSection, Container, Content } from "./style";

export function Banner(){
    return(
        <Container>
            <Content>
                <BannerSection>
                    <Text/>
                    <Advantages/>
                </BannerSection>
            <BannerImage/>
            </Content>
        </Container>
    )
}