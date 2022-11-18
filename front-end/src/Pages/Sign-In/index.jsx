import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import UserContext from '../../Contexts/UserContext';
import { useContext } from 'react';
import { signIn } from '../../Services/userApi';

import Banner from '../../Components/Banner'
import ModalAlert from '../../Components/Modal-Alert/ModalAlert';

import {
    Container,
    RegisterContainer,
    Button,
    Div
} from "./styled"

const SignIn = () => {
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({ userName: "", password: "" });
    const [load, setLoad] = useState(false);
    const [alert, setAlert] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState("../assets/images/error.png");
    const [alertColor, setAlertColor] = useState(false);

    const { setUserData } = useContext(UserContext);
    
    async function userLogin(event) {
        try {
            setAlert(null);
            event.preventDefault();
            setLoad(true);
            const response = await signIn(loginData.userName, loginData.password);
            localStorage.setItem("userData", JSON.stringify({ token: response.token, userName: response.userName }))
            setUserData({ token: response.token, userName: response.userName });
            setLoad(false);
            navigate('/home')
        } catch (error) {
            setAlertColor(false);
            setImageSrc("../assets/images/error.png")
            if (error.response.status === 404) {
                setAlert('Usuário ou senha incorretos');
                setIsOpen(true);
            }
            if (error.response.status === 401) {
                setAlert('Usuário ou senha incorretos');
                setIsOpen(true);
            }
            setTimeout(() => {
                setIsOpen(false);
            }, 2400);
            setLoad(false);
        }
    }

    return (
        <Container>
            <ModalAlert alert={alert} modalIsOpen={modalIsOpen} imageSrc={imageSrc} alertColor={alertColor}></ModalAlert>
            <Banner></Banner>
            <RegisterContainer load={load} onSubmit={userLogin}>
                <img src="../assets/images/logo.png" alt="logo" />
                <input type="text" name="userName"  minLength="3" placeholder='Usuário'
                    onChange={e => setloginData({ ...loginData, userName: e.target.value })}
                    disabled={load ? true : false} required />
                <input type="password" minLength="8" name="password" placeholder='password'
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$"
                    onChange={e => setloginData({ ...loginData, password: e.target.value })}
                    title='A senha deve conter 8 caracteres uma letra maiúscula uma minúscula e um número'
                    disabled={load ? true : false} required />
                <Button load={load} disabled={load ? true : false} type="submit">{load ? <ThreeDots color="#fff" height={13} /> : "Log In"}</Button>
                <Div>
                    <Link to={`/signup`}>
                        <span>First time? Create an account!</span>
                    </Link>
                </Div>
            </ RegisterContainer>
        </Container>
    );
}

export default SignIn;