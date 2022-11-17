import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
`;


const DivSelect = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    width: 35%;
    b{
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

const Select = styled.select`
    font-size: 15px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    background-color: rgba(51, 20, 190, 0.16);
`;

const ButtonTransaction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 200px;
    width: 35%;
    height: 30px;
    border-radius: 10px;
    margin-top: 15px;
    background-color: green;
    cursor: pointer;

    span{
        font-size: 16px;
        font-weight: 500;
        color: #fff;
    }
`;

export {
    Container,
    DivSelect,
    Select,
    ButtonTransaction
};