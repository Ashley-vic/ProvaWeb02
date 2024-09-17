import { useEffect } from "react";
import { useState } from "react";

const FunctionEstados = () => {

    //let contador = 10;

    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true)

    const acaoBotao = () => {
        setContador(contador+1)
    }

    useEffect(
        () => {
            if (contador%2 === 0) {
                setEhPar(true)
            } else {
                setEhPar(false)
            }
        }
        ,
        [contador]
    )

    return (
        <>
            <h1>Contador: {contador}</h1>
            <h1>É par: {"" + ehPar}</h1>
            <button
                onClick={acaoBotao}
            >
                Aumentar Contador
            </button>
        </>
    )
}

export default FunctionEstados