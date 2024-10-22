import React, { useState } from "react";


const Formulario =()=>{
    const [valorInicial, setValorInicial] = useState(0);
    const [prazo, setPrazo] = useState(0);
    const [juro, setJuro] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [calculos, setCalculos] = useState([]);

    const calcular = () =>{
        let res = valorInicial = Math.pow((1+juro/100),prazo);
        setResultado(res);
        let novoItem = {valorInicial: valorInicial, prazo:prazo,juro:juro, final: res };
        setCalculos([...calculos, novoItem]);

    }

    return(
        <div className="formulario">
            <label >Valor Inicial</label>
            <input value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />

            <label >Prazo em Meses</label>
            <input value={prazo} onChange={(e) => setPrazo(e.target.value)} />
            
            <label >Juro Mensal</label>
            <input value={juro} onChange={(e) => setJuro(e.target.value)} />
            {resultado > 0 && <span>O valor final será de {resultado}</span>}
            <button className="botao" onClick={calcular}></button>

        </div>
    );
    
}
export default Formulario;