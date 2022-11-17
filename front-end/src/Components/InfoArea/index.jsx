import { formatCurrentMonth } from "../../Helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

import {
    Container,
    MonthArea,
    ResumeArea,
    MonthArrow,
    MonthTitle
} from "./styled"

const InfoArea = ({ currentMonth, onMonthChange, balance, totalCashIn, totalCashOut }) => {
    const handlePrevMouth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const handleNextMouth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={handlePrevMouth}>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow onClick={handleNextMouth}>➡️</MonthArrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem title={"Entradas"} value={totalCashIn} />
                <ResumeItem title={"Saídas"} value={totalCashOut} />
                <ResumeItem title={"Balanço"} value={balance} />
            </ResumeArea>
        </Container>
    );
};

export default InfoArea;