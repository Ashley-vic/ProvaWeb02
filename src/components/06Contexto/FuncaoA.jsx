import FuncaoB from  "./FuncaoB"
import FuncaoC from  "./FuncaoC"

import CorContexto from "./MeuContexto";

const FuncaoA = () => {

    const cor = "red";

    return (
        <CorContexto.Provider value = {{cor:cor, nome:"Jarpa", cor2:"blue"}}>
            <div>
                <h1 style={{ backgroundColor: cor }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}

export default FuncaoA;