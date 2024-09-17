const login = async (login, senha) => {
    const response = await fetch("https://ru-avalie-sigaa.vercel.app/sigaa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, senha }),
    });
    if (response.ok) {
        return response.json();
    } else {
        return response.text();
    }
};

login("aqui vai o login do usuario", "aqui vai a senha do usuario")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });