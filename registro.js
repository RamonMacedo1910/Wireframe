document.addEventListener("DOMContentLoaded", () => {
    // Array de alunos (substitua com seus próprios dados)
    const alunos = [
        { nome: "Yukio Utiyama Sato", rm: "14020", entrada: "2024-05-14 08:30", saida: "2024-05-14 17:00" },
        { nome: "Pedro Andreotti Sales", rm: "12045", entrada: "2024-05-14 07:50", saida: "2024-05-14 15:30" },
        { nome: "Ramon Mesquita", rm: "14053", entrada: "2024-05-14 12:30", saida: "N/A" },
        { nome: "Arthur Kalinauskas", rm: "16032", entrada: "2024-05-14 09:00", saida: "2024-05-14 18:00" },
        { nome: "Thayna", rm: "18025", entrada: "2024-05-14 10:00", saida: "2024-05-14 17:30" },
        { nome: "Gabriel Lareglia", rm: "20010", entrada: "2024-05-14 08:45", saida: "2024-05-14 16:45" },
        { nome: "Brenno ", rm: "22015", entrada: "2024-05-14 11:15", saida: "N/A" }
    ];

    // Função para pesquisar e exibir entradas e saídas do aluno
    const pesquisarAluno = () => {
        const termoPesquisa = document.getElementById("search").value.toLowerCase();
        const alunoEncontrado = alunos.find(aluno => aluno.nome.toLowerCase().includes(termoPesquisa));

        if (alunoEncontrado) {
            document.getElementById("entranceGroup").innerHTML = `<div class="upperBox centered">
                <div class="innerFirstBox">
                    <div class="centered" style="width: 100%;">
                        <div class="nm_aluno">Nome: ${alunoEncontrado.nome}</div>
                        <div class="rm_aluno">RM: ${alunoEncontrado.rm}</div>
                    </div>
                    <div class="randomImg"></div>
                </div>
                <div class="innerSecondBox">
                    <div class="txtLabel2">Entrada</div>
                    <div class="roundedInner">
                        <div class="txtLabel2 hour">${formatarData(alunoEncontrado.entrada)}</div>
                        <div class="randomImg2"></div>
                    </div>
                </div>
            </div>`;

            document.getElementById("exitGroup").innerHTML = `<div class="upperBox centered">
                <div class="innerFirstBox">
                    <div class="centered" style="width: 100%;">
                        <div class="nm_aluno">Nome: ${alunoEncontrado.nome}</div>
                        <div class="rm_aluno">RM: ${alunoEncontrado.rm}</div>
                    </div>
                    <div class="randomImg"></div>
                </div>
                <div class="innerSecondBox">
                    <div class="txtLabel2">Saída</div>
                    <div class="roundedInner">
                        <div class="txtLabel2 hour">${formatarData(alunoEncontrado.saida)}</div>
                        <div class="randomImg3"></div>
                    </div>
                </div>
            </div>`;
        } else {
            document.getElementById("entranceGroup").innerHTML = "Aluno não encontrado.";
            document.getElementById("exitGroup").innerHTML = "";
        }
    };

    // Função para formatar a data
    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;
    };

    // Adicionar evento de clique ao ícone de pesquisa
    document.getElementById("search").addEventListener("click", pesquisarAluno);
});
