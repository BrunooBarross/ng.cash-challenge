import {
    Container,
    Title,
    Info
} from "./styled"

export const ResumeItem = ({ title, value }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Info color={title = "Balanço" ? "Green" : "Black"}>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Info>
        </Container>
    );;
}