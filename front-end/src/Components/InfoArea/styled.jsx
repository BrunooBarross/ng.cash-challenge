import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -35px;
`;

const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const MonthArrow = styled.div`
    cursor: pointer;
    width: 30px;
    text-align: center;
    font-size: 25px;
`;

const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;

export {
    Container,
    MonthArea,
    ResumeArea,
    MonthArrow,
    MonthTitle
};