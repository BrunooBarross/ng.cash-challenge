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
    const [totalCashIn, setTotalCashIn] = useState(0);
    const [totalCashOut, setTotalCashOut] = useState(0);

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const response = await getListTransactions(token);
                setListTransactions(response);
            } catch (e) { }
        };
        loadTransactions();
    }, [token]);

    useEffect(() => {
        if (listTransactions !== null) {
            setFilteredList(filterListByMonth(listTransactions.transactions, currentMonth));
        };
    }, [listTransactions, currentMonth])

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