import dayjs from "dayjs";

import {
    Table,
    TableHeadColumn,
    Td,
    CashInfo,
    Value,
    DivCenter
} from "./styled";

const TableArea = ({ listTransactions, account }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn>Data</TableHeadColumn>
                    <TableHeadColumn>Tipo</TableHeadColumn>
                    <TableHeadColumn>Info</TableHeadColumn>
                    <TableHeadColumn>Valor</TableHeadColumn>
                </tr>
            </thead>
            {listTransactions ?
                <tbody>
                    {listTransactions.map((item, index) => (
                        <tr key={index}>
                            <Td>{dayjs(item.createdAt).format("DD-MM-YY")}</Td>
                            {item.debitedAccountId === account.id ?
                                <DivCenter><CashInfo color={"false"}>cash-out</CashInfo></DivCenter> :
                                <DivCenter><CashInfo color={"true"}>cash-in</CashInfo></DivCenter>
                            }
                            {item.debitedAccountId === account.id ?
                                <Td>Você transferiu para {item.credited.users.userName}</Td> :
                                <Td>Tansferência Recebida de {item.debited.users.userName}</Td>
                            }
                            <Value color={item.debitedAccountId === account.id ? "false" : "true"}>
                                {item.debitedAccountId === account.id ? "- " : ""}
                                {item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </Value>
                        </tr>
                    ))}
                </tbody> : <></>
            }
        </Table>
    )
};

export default TableArea;