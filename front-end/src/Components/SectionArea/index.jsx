import { useState } from 'react';
import TransactionModal from '../TransactionModal';
import {
    Container,
    DivSelect,
    Select,
    ButtonTransaction
} from "./styled"

const SectionArea = ({ setFilteredCashInOut, token, balance, loadPage, setLoadPage }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Container>
            <TransactionModal 
                token={token}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                balance={balance}
                loadPage={loadPage}
                setLoadPage={setLoadPage}
            />
            <DivSelect>
                <b>Filtro:</b>
                <Select onChange={e => setFilteredCashInOut(e.target.value)}>
                    <option value={1}>Todos</option>
                    <option value={2}>Cash-in</option>
                    <option value={3}>Cash-out</option>
                </Select>
            </DivSelect>
            <ButtonTransaction onClick={() => setModalIsOpen(!modalIsOpen)}>
                <span>Transferir</span>
            </ButtonTransaction> 
        </Container>
    )
}

export default SectionArea;