/* ===== OBTER ELEMENTOS ===== */
// elementos A
const inputCidadeA = document.querySelector('.unidadeA__cidade');
const inputCodigoA = document.querySelector('.unidadeA__codigo');
const inputAnoA = document.querySelector('.unidadeA__ano');
const inputCursosA = document.querySelector('.unidadeA__cursos');

// elementos B
const inputCidadeB = document.querySelector('.unidadeB__cidade');
const inputCodigoB = document.querySelector('.unidadeB__codigo');
const inputAnoB = document.querySelector('.unidadeB__ano');
const inputCursosB = document.querySelector('.unidadeB__cursos');

// Selecionar os botões corretamente
const btnAbrirEscolaA = document.getElementById("unidadeA__abrir");
const btnFecharEscolaA = document.getElementById("unidadeA__fechar");
const btnAbrirEscolaB = document.getElementById("unidadeB__abrir");
const btnFecharEscolaB = document.getElementById("unidadeB__fechar");

// Mensagem
const mensagemA = document.querySelector(".unidadeA__mensagem");

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function validarCampos(cidade, codigo, anoConstrucao, qtdeCursos) {
  if (
    cidade.value === "" ||
    codigo.value === "" ||
    anoConstrucao.value === "" ||
    qtdeCursos.value === ""
  ) {
    return false;
  }
  return true;
}

/* ===== INSTANCIAR ESCOLA A ===== */
let escolaA;
const instanciarA = document.getElementById("unidadeA__instanciar");

instanciarA.addEventListener("click", () => {
  if (!validarCampos(inputCidadeA, inputCodigoA, inputAnoA, inputCursosA)) {
    mensagemA.textContent = "Preencha todos os campos para criar a escola.";
    return;
  }

  escolaA = new Senai(
    Number(inputCodigoA.value),
    inputCidadeA.value,
    Number(inputAnoA.value),
    Number(inputCursosA.value)
  );

  mensagemA.textContent = `Escola criada em ${escolaA.cidade}!`;
  mensagemA.className = "unidadeA__mensagem status status--criado";
});

/* ===== INSTANCIAR ESCOLA B ===== */
let escolaB;
// Adicione lógica semelhante para instanciar a escola B, se necessário

/* ===== ADICIONAR EVENTOS PARA OS BOTÕES ===== */
btnAbrirEscolaA.addEventListener("click", () => {
  if (escolaA) {
    escolaA.abrirEscola();
  } else {
    mensagemA.textContent = "A escola A ainda não foi criada.";
  }
});

btnFecharEscolaA.addEventListener("click", () => {
  if (escolaA) {
    escolaA.fecharEscola();
  } else {
    mensagemA.textContent = "A escola A ainda não foi criada.";
  }
});

// Adicione eventos para os botões de abrir e fechar a escola B, se necessário

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }

  /* 🚨NÃO ALTERAR A CLASSE 🚨 */

  /* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */

  /* ===== ABRIR ESCOLA ===== */
  abrirEscola() {
    const mensagem = document.getElementById("mensagem");
    if (this.statusFuncionamento === false) {
      this.statusFuncionamento = true;
      mensagem.textContent = `A escola do SENAI ${this.cidade} agora está aberta! Bem-vindo(a)!`;
    } else {
      mensagem.textContent = "A escola já está aberta!";
    }
  }

  /* ===== FECHAR ESCOLA ===== */
  fecharEscola() {
    const mensagem = document.getElementById("mensagem");
    if (this.statusFuncionamento === true) {
      this.statusFuncionamento = false;
      mensagem.textContent = `A escola do SENAI ${this.cidade} agora está fechada! As atividades foram encerradas!`;
    } else {
      mensagem.textContent = "A escola já está fechada!";
    }
  }

  /* ===== RELATÓRIO DE COMPARAÇÃO ===== */

  /* ===== NOVA CONSULTA ===== */
  consulta() {
    relatorio.style.display = "none";

    inputCodigoA.value = "";
    inputCidadeA.value = "";
    inputAnoA.value = "";
    inputCursosA.value = "";

    inputCodigoB.value = "";
    inputCidadeB.value = "";
    inputAnoB.value = "";
    inputCursosB.value = "";
  }
}

