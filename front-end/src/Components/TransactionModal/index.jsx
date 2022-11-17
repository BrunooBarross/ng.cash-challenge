import Modal from 'react-modal';
import { useState } from "react";
import { NumericFormat } from 'react-number-format';
import { postTransactions } from '../../Services/transactions';

import {
    DivModal,
    BtnDiv,
    LabelAlert
} from "./styled"

const TransactionModal = ({ modalIsOpen, setModalIsOpen, token, balance, loadPage, setLoadPage }) => {
    const [userName, setUserName] = useState("");
    const [valor, setValor] = useState("");
    const [text, setText] = useState("");

    const customStyles = {
        content: {
            width: '70%',
            height: '280px',
            top: '25%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    async function executeTransfer(event) {
        event.preventDefault();
        setText("");
        let valorConvertido = valor.toString().replace("R$", "")
        valorConvertido = valorConvertido.replace(".", "");
        valorConvertido = valorConvertido.replace(",", ".");

        if(valorConvertido > balance){
            setText("Você não possui saldo suficiente");
            return;
        }

        try {
            await postTransactions(token, userName, parseFloat(valorConvertido));
            setLoadPage(!loadPage);
            setModalIsOpen(false);
            return;
        } catch (e) {
            if(e.response.status === 404){
                return setText("Não foi possível encontrar o usuário " + userName + ", Tente Novamente!");
            }
            if(e.response.status === 401){
                return setText("Não é possível transferir para você mesmo!");
            }
        };
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            ariaHideApp={false}
        >
            <DivModal>
                <div className="modal-transfer">
                    <h5><ion-icon name="search"></ion-icon> Realize uma Transferência</h5>
                    <ion-icon name="close" onClick={() => setModalIsOpen(false)}></ion-icon>
                </div>
                <hr />
                <form onSubmit={executeTransfer}>
                    <input type="text" placeholder="Digite o nome do usuário" minLength={3} maxLength={20}
                        onChange={e => setUserName(e.target.value)} required />
                    <NumericFormat
                        placeholder="Valor"
                        thousandSeparator='.'
                        prefix={'R$'}
                        onChange={e => setValor(e.target.value)}
                        decimalSeparator=","
                        decimalScale={2}
                        required
                    />
                    <LabelAlert>{text}</LabelAlert>
                    <hr />
                    <BtnDiv>
                        <button className="btn-submit">
                            Transferir
                        </button>
                        <button type="button" className="btn-close" onClick={() => setModalIsOpen(false)}>
                            Fechar
                        </button>
                    </BtnDiv>
                </form>
            </DivModal>
        </Modal>
    );
}

export default TransactionModal;