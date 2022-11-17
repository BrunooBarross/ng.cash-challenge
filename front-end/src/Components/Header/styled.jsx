import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 150px;
    background-image: linear-gradient(black , #5e5b5b);
    z-index: 0;
`

const HeaderText = styled.h1`
    position: relative;
    width: 980px;
    margin: 0;
    padding: 0;
    color: #fff;
    padding-top: 30px;
    font-size: 25px;
`

const Icon = styled.div`
    position: absolute;
    width: 35px;
    height: 40px;
    top: 25px;
    right: 20px;
    color: #fff;
    cursor: pointer;

    ion-icon{
        font-size: 25px;
    }

    h4{
        font-size: 16px;
    }
`

export {
    HeaderContainer,
    HeaderText,
    Icon
}