import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { signUp } from '../../Services/userApi';

import ModalAlert from '../../Components/Modal-Alert/ModalAlert';
import Banner from '../../Components/Banner';

import {
    Container,
    RegisterContainer,
    Button,
    Div
} from "./styled"

const SignUp = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({ userName: "", password: "", confirmPassword: "" });
    const [load, setLoad] = useState(false);
    const [alert, setAlert] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState("../assets/images/error.png");
    const [alertColor, setAlertColor] = useState(false);

    async function registerUser(event) {
        event.preventDefault();
        setAlert(null);
        setLoad(true);

        if (register.password !== register.confirmPassword) {
            setImageSrc("../assets/images/error.png")
            setAlert('Senhas divergentes');
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2400);
            setLoad(false);
            return;
        }
        try {
            await signUp(register);
            setLoad(false);
            setAlertColor(true);
            setImageSrc("../assets/images/accept.png");
            setAlert('Cadastro Realizado!');
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
                navigate('/');
                setAlertColor(false);
            }, 2400);
        } catch (error) {
            if (error.response.status === 409) {
                setImageSrc("../assets/images/error.png")
                setAlert('Username não disponível!');
                setIsOpen(true);
                setTimeout(() => {
                    setIsOpen(false);
                }, 2400);
            }
            if (error.response.status === 422) {
                setAlert('Senhas Divergentes!');
            }
            setLoad(false);
        }
    }

    return (
        <Container>
            <ModalAlert alert={alert} modalIsOpen={modalIsOpen} imageSrc={imageSrc} alertColor={alertColor}></ModalAlert>
            <Banner></Banner>
            <RegisterContainer encType='multipart/form-data' load={load} onSubmit={registerUser}>
                <span>Cadastro de Usuário</span>
                <input type="name" name="name" minLength="3" placeholder='username'
                    onChange={e => setRegister({ ...register, userName: e.target.value })}
                    disabled={load ? true : false} required />
                <input type="password" minLength="8" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$" name="password" placeholder='password'
                    title='A senha deve conter 8 caracteres uma letra maiúscula uma minúscula e um número'
                    onChange={e => setRegister({ ...register, password: e.target.value })}
                    disabled={load ? true : false} required />
                <input type="password" minLength="8" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$" name="confimrPassword" placeholder='confirm password'
                    title='A senha deve conter 8 caracteres uma letra maiúscula uma minúscula e um número'
                    onChange={e => setRegister({ ...register, confirmPassword: e.target.value })}
                    disabled={load ? true : false} required />
                <Button load={load} disabled={load ? true : false} type="submit">{load ? <ThreeDots color="#fff" height={13} /> : "Sign Up"}</Button>
                <Div>
                    <Link to={`/`}>
                        <span>Switch back to login</span>
                    </Link>
                </Div>
            </ RegisterContainer>
        </Container>
    );
}

export default SignUp;