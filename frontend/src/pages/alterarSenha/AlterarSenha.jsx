import React from "react";
import "./AlterarSenha.css";

import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



const AlterarSenha = () => {
    return (
        <div className="card">
            <Card title="Alterar Senha ">
                <div>
                    <label for="Name">Email</label><br />
                    <InputText />
                </div>
                <div>
                    <label for="Name">Código</label><br />
                    <InputText />
                </div>
                <div>
                    <label for="Senha">Senha</label><br />
                    <Password feedback={false} />
                </div>
                    <Button label="Alterar Senha" />
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
export default AlterarSenha;