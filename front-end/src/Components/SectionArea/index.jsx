import {
    Container,
    DivSelect,
    Select,
    ButtonTransaction
} from "./styled"

const SectionArea = ({ setFilteredCashInOut }) => {

    return (
        <Container>
            <DivSelect>
                <b>Filtro:</b>
                <Select onChange={e => setFilteredCashInOut(e.target.value)}>
                    <option value={1}>Todos</option>
                    <option value={2}>Cash-in</option>
                    <option value={3}>Cash-out</option>
                </Select>
            </DivSelect>
            <ButtonTransaction>
                <span>Transferir</span>
            </ButtonTransaction>
        </Container>
    )
}

export default SectionArea;