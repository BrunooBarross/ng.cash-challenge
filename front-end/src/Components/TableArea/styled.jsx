import styled from "styled-components"

const Table = styled.table`
    width: 95%;
    height: 100px;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
`

const TableHeadColumn = styled.th`
    padding: 20px;
    text-align: center;
    font-weight: bold;
    font-size: large;
`
const Td = styled.td`
    padding-top: 10px;
    padding-bottom: 10px;
`

const Value = styled.td`
    font-weight: bold;
    color: ${props => props.color ? "green": "red"};
`

const CashInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 25px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color ? "blue": "red"};
`
export {
    Table,
    TableHeadColumn,
    Td,
    CashInfo,
    Value
};