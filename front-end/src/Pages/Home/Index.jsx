import { useEffect, useState } from 'react';
import { getListTransactions } from '../../Services/transactions';
import { getCurrentMonth, filterListByMonth } from "../../Helpers/dateFilter"

import Header from "../../Components/Header";
import InfoArea from "../../Components/InfoArea";
import TableArea from "../../Components/TableArea";
import SectionArea from '../../Components/SectionArea';

import {
    Container,
    Body
} from "./styled"

const Home = () => {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const [listTransactions, setListTransactions] = useState(null);
    const [filteredList, setFilteredList] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [totalCashIn, setTotalCashIn] = useState(0);
    const [totalCashOut, setTotalCashOut] = useState(0);
    const [filteredCashInOut, setFilteredCashInOut] = useState(1); // 1 Todos - 2 Cash-in - 3 Cash-out
    const [loadPage, setLoadPage] = useState(false);
    
    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const response = await getListTransactions(token);
                setListTransactions(response);
            } catch (e) { }
        };
        loadTransactions();
    }, [token, loadPage]);

    useEffect(() => {
        if (listTransactions !== null) {
            setFilteredList(filterListByMonth(listTransactions.transactions, currentMonth, filteredCashInOut, listTransactions.account.id));
        };
    }, [listTransactions, currentMonth, filteredCashInOut])

    function handleMonthChange(newMonth) {
        setCurrentMonth(newMonth);
    }

    useEffect(() => {
        let totalCashIn = 0;
        let totalCashOut = 0;

        const calculateCashInOut = () => {
            for (let i in filteredList) {
                if (filteredList[i].debitedAccountId === listTransactions.account.id) {
                    totalCashOut += filteredList[i].value;
                } else {
                    totalCashIn += filteredList[i].value;
                }
            };
            setTotalCashIn(totalCashIn);
            setTotalCashOut(totalCashOut);
        }

        if (listTransactions !== null) {
            calculateCashInOut();
        }

    }, [filteredList])

    return (
        <Container>
            <Header />
            <Body>
                <InfoArea
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                    balance={listTransactions !== null ? listTransactions.account.balance : 0}
                    totalCashIn={totalCashIn}
                    totalCashOut={totalCashOut}
                />
                <SectionArea 
                    token={token}
                    setFilteredCashInOut={setFilteredCashInOut}
                    balance={listTransactions !== null ? listTransactions.account.balance : 0}
                    loadPage={loadPage}
                    setLoadPage={setLoadPage}
                />
                {listTransactions !== null ?
                    <TableArea
                        listTransactions={filteredList}
                        account={listTransactions.account}
                    /> :
                    <TableArea listTransactions={[]} />
                }
            </Body>
        </Container>
    );
};

export default Home;