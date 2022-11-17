import {
    Container,
    Title,
    Info
} from "./styled"

export const ResumeItem = ({ title, value }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Info color={title === "Balanço" ? "green" : title === "Entradas" ? "blue": "red"}>
                {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </Info>
        </Container>
    );;
}