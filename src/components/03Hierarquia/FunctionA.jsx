import FunctionB from "./FunctionB"

const FunctionA = () => {
    return (
        <div>
            <h1>Componente A</h1>
            <FunctionB x={10} y={2}/>
        </div>
    )
}

export default FunctionA