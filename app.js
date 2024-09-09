function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "Nenhum resultado encontrado.Você esqeceu de digitar nome do artista ou estilo musical"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Cria uma div para cada resultado, formatando os dados
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
           //cria um novo elemnto
            resultados += `
            <div class="item-resultado">
            <h3>
            <a target="_blank">${dado.titulo}</a> 
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Clique aqui.</a> 
            </div>
        `;

        }

    }

    if (!resultados){
        resultados = "Nenhum resultado encontrado."
    }

    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
}

