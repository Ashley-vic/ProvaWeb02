import Imagem from "./Imagem";
import BotaoDecrementar from "./BotaoDecrementar";
import BotaoIncrementar from "./BotãoIncrementar";
import { useState } from "react";

const TelaPrincipal = () => {

    const [id, setId] = useState(180)

    const incrementar = () => {
        setId((prev) => prev + 1)
    }

    const decrementar = () => {
        setId((prev) => prev - 1)
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <Imagem id = {id}/>
                    </tr>
                    <tr>
                        <td><BotaoIncrementar incrementar = {incrementar}/></td>
                        <td><BotaoDecrementar decrementar = {decrementar}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal;