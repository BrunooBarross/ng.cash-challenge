import { useEffect, useState } from 'react';
import { getListTransactions } from '../../Services/transactions';
import { getCurrentMonth, filterListByMonth } from "../../Helpers/dateFilter"

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
    const [filteredList, setFilteredList] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        const loadTransactions = async () =>{
            try {
                const response = await getListTransactions(token);
                setListTransactions(response);
              } catch (e) {}
        };
        loadTransactions();
    }, [token]);

    useEffect(()=>{ 
        if(listTransactions !== null){
            setFilteredList(filterListByMonth(listTransactions.transactions, currentMonth));
        };   
    },[listTransactions, currentMonth])
  
    function handleMonthChange(newMonth){
        setCurrentMonth(newMonth);
    }

    return(
        <Container>
            <Header/>
            <Body>
                <InfoArea
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                />
                {listTransactions !== null ? 
                    <TableArea 
                        listTransactions={filteredList} 
                        account={listTransactions.account}
                    /> : 
                    <TableArea listTransactions={[]}/>
                }
            </Body>
        </Container>
    );
};

export default Home;