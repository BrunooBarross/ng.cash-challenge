import dayjs from "dayjs";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list, date, filteredCashInOut, userId) => {
    let newList = [];
    let [year, month] = date.split('-');
    
    for (let i in list) {
        if (
            dayjs(list[i].createdAt).format("YYYY") === year &&
            dayjs(list[i].createdAt).format("MM") === month
        ) {
            if(parseInt(filteredCashInOut) === 1){ 
                newList.push(list[i]);
            };
            if(parseInt(filteredCashInOut) === 2){
                if(list[i].creditedAccountId === userId){
                    newList.push(list[i]);
                };
            };

            if(parseInt(filteredCashInOut) === 3){
                if(list[i].debitedAccountId === userId){
                    newList.push(list[i]);
                };
            };
        };
    };

    return newList;
};

export const formatCurrentMonth = (currentMonth) => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} de ${year}`;
};