import { useEffect, useState } from 'react';
import { getListTransactions } from '../../Services/transactions';

import Header from "../../Components/Header";
import InfoArea from "../../Components/InfoArea";
import TableArea from "../../Components/TableArea";

import {
    Container,
    Body
} from "./styled"

const Home = () => {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const [listTransactions, setListTransactions] = useState(null);

    useEffect(() => {
        const loadTransactions = async () =>{
            try {
                const response = await getListTransactions(token);
                setListTransactions(response);
              } catch (e) {}
        };
        loadTransactions();
    }, [token]);
    
    return(
        <Container>
            <Header/>
            <Body>
                <InfoArea/>
                {listTransactions !== null ? 
                    <TableArea listTransactions={listTransactions}/> : 
                    <TableArea listTransactions={[]}/>
                }
            </Body>
        </Container>
    );
};

export default Home;