function consultaPreto() {
    const respostas = [
        {
            decisao: "claro né papai",
            mensagem: "seloko tio vai em frente."
        },
    {   
        decisao: "ai não fi",
        mensagem: "po para né"
    },
];

const indice = Math.floor (
Math.random() * respostas.length
); 

const resultado = respostas[indice];

document.getElementById("resposta").textContent =
resultado.decisao;

document.getElementById("mensagem").textContent =
resultado.mensagem;

}