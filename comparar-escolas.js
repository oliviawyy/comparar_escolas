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

/* ===== INSTANCIAR ESCOLA A ===== */
const escolaA = new Senai(inputCodigoA, inputCidadeA, inputAnoA, inputCursosA)

/* ===== INSTANCIAR ESCOLA B ===== */
const escolaB = new Senai(inputCodigoB, inputCidadeB, inputAnoB, inputCursosB)


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





/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
validar(){
  if (isNaN(inputCodigoA, inputCidadeA, inputAnoA, inputCursosA) || isNaN(inputCodigoB, inputCidadeB, inputAnoB, inputCursosB)) {
    relatorio.style.display = "flex"
    relatorio.innerHTML =
    `
    <p> Preencha todos os campos para criar a escola. </p>
    
    `;
  };
};


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


