//V0
/*const Supermercado = (props) => {
    return (
        <div>
            <h1>SuperMercado {props.nome}</h1>
            {props.children}
        </div>
    )
}*/

//V1
/*import { Children } from "react"
const Supermercado = (props) => {
    return (
        <div>
            <h1>SuperMercado {props.nome}</h1>
            {
                Children.map(
                    props.children,
                    (filho) => {
                        return (
                            <div style={{backgroundColor: "red"}}>
                                {filho}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}*/

//V2
import { Children , cloneElement} from "react"
const Supermercado = (props) => {
    return (
        <div>
            <h1>SuperMercado {props.nome}</h1>
            {
                Children.map(
                    props.children,
                    filho => 
                        cloneElement(filho, {supermercado:props.nome})  
                )
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => {
    return (
        <div>
            <h3>Leguma {nome} do Supermercado {supermercado}</h3>
        </div>
    )
}

const Fruta = ({nome}) => {
    return (
        <div>
            <h3>Fruta {nome}</h3>
        </div>
    )
}

const Bebida = ({nome}) => {
    return (
        <div>
            <h3>Bebida {nome}</h3>
        </div>
    )
}

export {Supermercado, Legume, Fruta, Bebida};