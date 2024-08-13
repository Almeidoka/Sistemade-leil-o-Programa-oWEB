import React from "react";
import "./RecuperarSenha.css";

import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



const RecuperarSenha = () => {
    return (
        <div className="card">
            <Card title="Recuperar Senha">
                <InputText />
                <Password feedback={false} />
                <Button label="Recuperar Senha" />
                <Button label="Cancelar" />

            </Card>
            <div class="grid">
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
                </div>
            </div>
        </div>

    );
}
export default RecuperarSenha;