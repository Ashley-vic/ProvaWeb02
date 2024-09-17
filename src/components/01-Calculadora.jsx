const Calculadora = () => {

    const somar = (x,y) => {
        return x + y;
    }

    const subtrair = (x,y) => x - y;

    const multiplicar = (x,y) => {
        return x * y;
    }

    const dividir = (x,y) => {
        return x / y;
    }

    return (
        <div>
            <h1>Calculando o numero 10 e 2</h1>
            <h2>O resultado da Soma é: {somar(10, 2)}</h2>
            <h2>O resultado da Subtração é: {subtrair(10, 2)}</h2>
            <h2>O resultado da Multiplicação é: {multiplicar(10,2)}</h2>
            <h2>O resultado da Divisão é: {dividir(10, 2)}</h2>
        </div>
    )
}

export default Calculadora