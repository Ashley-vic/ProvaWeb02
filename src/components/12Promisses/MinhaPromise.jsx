import { useEffect } from "react"

const minhaPromise = new Promise(
    (resolve, reject) => {
        //alguma logica que esta produzindo algo e que demora algum tempo
        //console.log("iniciando a logica")
        setTimeout(
            ()=>{
                //console.log("logica terminada")
                const meuInt = Math.floor(Math.random()*10)+1
                //console.log(meuInt)
                if(meuInt%2===0) resolve({numero:meuInt, msg:"Deu tudo Certo"})
                else reject({numero:meuInt, msg:"Deu tudo errado"})
            }
            ,
            3000
        )
    }
)

const meuGet = (url) => {
    //fiz alguma coisa com a url
    //console.log(url)
    return minhaPromise
}

const MinhaPromise = () => {

    useEffect(
        () => {
            /*
            meuGet("http://fake")
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))*/
            meuGet("http:...")
                .then(
                    (response) => {
                        console.log(response.numero)
                        console.log(response.msg)
                    }

                )
                .catch(
                    (error) => {
                        console.log(error.numero)
                        console.log(error.msg)
                    }
                )
                //.finally(
                    //()=>{
                        // console.log(error.msg)
                    //}
                //)
                /*Ideia basica do fetch
                    fetch(.com)
                    .then((responde) => response.json())
                    .then((data) = console.table(data))
                    .catch((error) => console.log(error))
                */

        }
        ,
        []
    )

    return (
        <>
            <h1>Testando a promise</h1>
        </>
    )
}

export default MinhaPromise