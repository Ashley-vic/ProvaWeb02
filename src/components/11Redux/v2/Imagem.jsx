import { useSelector } from "react-redux"

const Imagem = ({nome, imagem}) => {
    const id = useSelector(
        (state) => state.id.value
    )

    return (
        <>
            <h1>Id: {id}</h1>
            <h1>{nome}</h1>
            <img 
                src={imagem}
                style={{width:"400px"}}
                alt="pkm" 
            />
        </>
    )
}

export default Imagem