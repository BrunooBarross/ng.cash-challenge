import Header from "../../Components/Header";
import InfoArea from "../../Components/InfoArea";
import TableArea from "../../Components/TableArea";

import {
    Container,
    Body
} from "./styled"

const Home = () => {
    return(
        <Container>
            <Header/>
            <Body>
                <InfoArea/>
                <TableArea/>
            </Body>
        </Container>
    );
};

export default Home;