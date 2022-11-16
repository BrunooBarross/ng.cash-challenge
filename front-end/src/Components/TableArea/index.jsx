import {
    Table,
    TableHeadColumn
} from "./styled";

const TableArea = () => {
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
            <tbody>

            </tbody>
        </Table>
    )
};

export default TableArea;