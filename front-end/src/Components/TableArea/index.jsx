import dayjs from "dayjs";

import {
    Table,
    TableHeadColumn,
    Td,
    CashInfo,
    Value
} from "./styled";

const TableArea = ({listTransactions}) => {
    return(
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn>Data</TableHeadColumn>
                    <TableHeadColumn>Tipo</TableHeadColumn>
                    <TableHeadColumn>Info</TableHeadColumn>
                    <TableHeadColumn>Valor</TableHeadColumn>
                </tr>
            </thead>
            {listTransactions.transactions  ?
                <tbody>
                    {listTransactions.transactions.map((item, index)=>(
                    <tr key={index}>
                        <Td>{dayjs(item.createdAt).format("DD-MM-YY")}</Td>
                        {item.debitedAccountId === listTransactions.account.id ?  
                            <Td><CashInfo color={false}>cash-out</CashInfo></Td> :  
                            <Td><CashInfo color={true}>cash-in</CashInfo></Td>
                        }
                        {item.debitedAccountId === listTransactions.account.id ? 
                            <Td>Você transferiu para {item.credited.users.userName}</Td> :
                            <Td>Tansferência Recebida de {item.debited.users.userName}</Td>
                        }
                        <Value color={item.debitedAccountId === listTransactions.account.id ? false: true}>
                            {item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </Value>
                    </tr>
                    ))}
                </tbody> : <></>
            }
        </Table>
    )
};

export default TableArea;