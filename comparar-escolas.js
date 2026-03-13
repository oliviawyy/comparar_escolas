const inputCidadeA = document.querySelector(".unidade__input unidadeA__cidade");
const inputCodigoA = document.querySelector(".unidade__input unidadeA__codigo");
const inputAnoConstrucaoA = document.querySelector(".unidade__input unidadeA__ano");
const inputCursosA = document.querySelector(".unidade__input unidadeA__cursos");

const inputCidadeB = document.querySelector(".unidade__input unidadeB__cidade");
const inputCodigoB = document.querySelector(".unidade__input unidadeB__codigo");
const inputAnoConstrucaoB = document.querySelector(".unidade__input unidadeB__ano");
const inputCursoB = document.querySelector(".unidade__input unidadeB__cursos");

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



/* ===== OBTER ELEMENTOS ===== */


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA A ===== */
  criarEscolaA() {}



/* ===== INSTANCIAR ESCOLA B ===== */
  criarEscolaB() {}


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
}

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */


