import { useEffect } from "react";

const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = !true
        if(x) resolve({ msg: "Deu certo" })
        else reject({ msg: "Deu errado"})
    }
)

const MeuAsync = () => {
    useEffect(
        () => {
            getPromessaAsync()
        }
        ,
        []
    )

    function getPromessaThen() {
        minhaPromessa
            .then(
                (data) => {console.log(data.msg)}
            )
            .catch(
                (data) => {console.log(data.msg)}
            )
   }

   async function getPromessaAsync() {
        try {
            const data = await minhaPromessa
            console.log(data.msg)
        } catch (erro) {
            console.log(erro.msg)
        }
   }

    return (
        <>
            <h1>Tratando Async</h1>
        </>
    );
}

export default MeuAsync;