import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    @media (max-width: 556px) {
        font-size: 13px;
    }
`;

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`;

const Info = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;

export {
    Container,
    Title,
    Info
};