import { useNavigate} from 'react-router-dom';

import {
    HeaderContainer,
    HeaderText,
    Icon
} from "./styled";

const Header = () => {
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem("userData")
        navigate("/")
    }

    return (
        <HeaderContainer>
            <HeaderText>
                Sistema Financeiro
                <Icon onClick={() => logout()}>
                    <ion-icon name="exit-outline"></ion-icon>
                    <h4>Sair</h4>
                </Icon>
            </HeaderText>
            
        </HeaderContainer>
    );
};

export default Header;