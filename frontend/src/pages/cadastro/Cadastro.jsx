import React from "react";
import "./Cadastro.css";

import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



const Cadastro = () => {
    return (
        <div className="card">
            <Card title="Cadastrar">
                <div>
                    <label for="Name">Nome</label><br />
                    <InputText />
                </div>
                <div>
                    <label for="Senha">Senha</label><br />
                    <Password feedback={false} />
                </div>
                <Button label="Confirmar" />
                <Button label="Cancelar" />

            </Card>
        </div>

    );
}
export default Cadastro;