import "./AlterarSenha.css";

import React, { useState } from 'react';
import { Messages } from 'primereact/messages';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';



const AlterarSenha = () => {
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirm] = useState('');
    const[erro, setErro] = useState([]);
    const mensagem = React.useRef(null);

    const alterarSenha = (s) =>{
        const novaSenha = s.target.value;
        setSenha(novaSenha);
    }

    const confirmarSenha = (s) =>{
        setSenha(s.target.value);
    }
    return (
        <div className="card">
            <Card title="Alterar Senha ">
                <div>
                    <label for="Name">Email</label><br />
                    <InputText id="email" type="email" placeholder="Email" required />
                </div>
                <div>
                    <label for="Name">Código</label><br />
                    <InputText id="code" type="text" placeholder="Código" required />
                </div>
                <div>
                    <label for="Senha">Senha</label><br />
                    <Password id="new-password" value={senha} onChange={alterarSenha} toggleMask feedback={false} placeholder="Nova Senha" required />
                </div>
                <Button label="Alterar Senha" onChange= {confirmSenha}/>
                <Button label="Cancelar" />


            </Card>
        </div>


    );
}
export default AlterarSenha;