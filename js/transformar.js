function capsLk() {
    // Obtém o texto do input
    const texto = document.getElementById("texto").value;

    // Converte o texto para letras minúsculas e atualiza a div com o texto convertido
    const NewTexto = document.getElementById("res");
    NewTexto.innerHTML = texto.toLocaleLowerCase();

    // Referência para a div onde a imagem será inserida
    const imgDiv = document.getElementById("img");

    // Limpa a div caso já tenha alguma imagem
    imgDiv.innerHTML = "";

    // Verifica se o texto está vazio
    if (texto === "") {
        // Cria um novo elemento de imagem
        const img = document.createElement("img");

        // Define o caminho da imagem (personalize conforme necessário)
        img.src = "img/cachorro.png"; // Substitua pelo caminho da imagem

        // Adiciona classes de estilo à imagem (opcional)
        img.classList.add("img-fluid", "mt-3", "w-25", "rounded-circle");

        // Insere a imagem na div
        imgDiv.appendChild(img);
    } else {
        // Cria um novo elemento de imagem
        const img = document.createElement("img");

        // Define o caminho da imagem (personalize conforme necessário)
        img.src = "img/Gato ok.png"; // Substitua pelo caminho da imagem

        // Adiciona classes de estilo à imagem (opcional)
        img.classList.add("img-fluid", "mt-3", "w-25", "rounded-circle");

        // Insere a imagem na div
        imgDiv.appendChild(img);
    }
}

function copiarTexto(elementId) {
    var texto = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado com sucesso!");
    }, function(err) {
        console.error("Erro ao copiar texto: ", err);
    });
}
