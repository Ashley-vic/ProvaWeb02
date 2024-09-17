import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const PokemonAxios = () => {

    const [id, setId] = useState(1)
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [imagem2, setImagem2] = useState("")

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                }
            )
            .catch((error) => console.log(error))
        }
        ,
        [id]
    )

    return (
        <>
            <h3>Nome: {nome}</h3>
            <h3>Id: {id}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={imagem} alt="pklm" style={{ width: "400px" }} />
                        </td>

                        <td>
                            <img src={imagem2} alt="pklm" style={{ width: "400px" }} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button
                                onClick={
                                    () => {
                                        setId((prev) => prev + 1)
                                    }
                                }
                            >
                                Proximo
                            </button>    
                        </td>

                        <td>
                            <button
                                onClick={
                                    () => {
                                        setId((prev) => prev - 1)
                                    }
                                }
                            >
                                Anterior
                            </button>
                        </td>
                 
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PokemonAxios