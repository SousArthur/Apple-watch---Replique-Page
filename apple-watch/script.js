const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno",
};

const meiaNoite = {
    nome: "Meia-noite",
    pasta:  "imagens-meia-noite"
};

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
}

const opcoesCores = [verdeCipreste, azulInverno,  meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;

function trocarImagem() {
    //mudar a imagem selecionada de exibição
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id; //busca no html dentro do input o campo selecionado
    imagemSelecionada = idOpcaoSelecionada.charAt(0); //tem a função de pegar o primeiro caracter a partir do primeiro ID e atualizar a variavel "imagemSelecionada"
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg"; // vai buscar dentro pasta exibir a imagem conforme a que teve o click
}

function trocarTamanho(){
    // alterar o titulo do produto conforme a seleção
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //atualizar a variavel de controle conforme o tamanho selecionado
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // mudar o tamanho da imagem conforme as opções
    if (opcoesTamanho[tamanhoSelecionado] === "41mm") {    
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }    
}

function trocarCor(){
    //trocar titulo da pagina
    //alterar a cor da imagem visualização
    //trocar nome da cor
    //trocar imagem de visualizacao
    //atualizar selecao
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    nomeCor.innerText = " Cor - "+ opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg";
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg";
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg";
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}