// Espera a página carregar inteira para rodar o código
document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------------------------------------
    // 1. TROCAR TEMA (MODO ESCURO / MODO CLARO)
    // -------------------------------------------------------------
    const botaoTema = document.getElementById("btn-tema");
    const corpo = document.body;
  
    // Lógica simples ao clicar no botão
    botaoTema.addEventListener("click", function () {
      corpo.classList.toggle("tema-claro");
  
      // Troca o ícone do botão
      const estaNoTemaClaro = corpo.classList.contains("tema-claro");
      if (estaNoTemaClaro) {
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    });
  
  
    // -------------------------------------------------------------
    // 2. EFEITO DE DIGITAÇÃO SIMPLES
    // -------------------------------------------------------------
    const frase = "Estudante no Cotemig, fã de front-end e gamedev.";
    const localTexto = document.getElementById("texto-digitado");
    let contador = 0;
  
    function digitarLetra() {
      if (contador < frase.length) {
        localTexto.textContent += frase.charAt(contador);
        contador++;
        setTimeout(digitarLetra, 45); // Velocidade da digitação
      }
    }
    digitarLetra(); // Inicia a digitação
  
  
    // -------------------------------------------------------------
    // 3. ANIMAÇÃO DE APARECER AO ROLAR A PÁGINA
    // -------------------------------------------------------------
    const elementosParaAnimar = document.querySelectorAll(".animar");
  
    function verificarScroll() {
      const alturaTela = window.innerHeight * 0.85;
  
      elementosParaAnimar.forEach(function (elemento) {
        const topoElemento = elemento.getBoundingClientRect().top;
  
        if (topoElemento < alturaTela) {
          elemento.classList.add("visivel");
        }
      });
    }
  
    window.addEventListener("scroll", verificarScroll);
    verificarScroll(); // Executa ao abrir a página também
  
  
    // -------------------------------------------------------------
    // 4. MÁSCARA PARA O CAMPO DE TELEFONE
    // -------------------------------------------------------------
    const campoTelefone = document.getElementById("telefone");
  
    campoTelefone.addEventListener("input", function (e) {
      let numero = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
  
      if (numero.length > 10) {
        // Formato para celular: (31) 99999-9999
        e.target.value = numero.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (numero.length > 5) {
        // Formato parcial: (31) 99999
        e.target.value = numero.replace(/^(\d{2})(\d{4,5})/, "($1) $2");
      } else if (numero.length > 2) {
        // Formato DDD: (31)
        e.target.value = numero.replace(/^(\d{2})/, "($1) ");
      } else {
        e.target.value = numero;
      }
    });
  
  
    // -------------------------------------------------------------
    // 5. ENVIO DO FORMULÁRIO (ABRE O MODAL COMO CONFIRMAÇÃO)
    // -------------------------------------------------------------
    const meuFormulario = document.getElementById("meu-formulario");
  
    meuFormulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); // Evita recarregar a página
  
      // Abre a janela de confirmação sem o botão do GitHub
      abrirJanela(
        "Mensagem Enviada!",
        "Obrigado pelo contato! Sua mensagem foi enviada com sucesso.",
        null
      );
  
      meuFormulario.reset(); // Limpa os campos do formulário
    });
  
  });
  
  
  // -------------------------------------------------------------
  // 6. FUNÇÕES PARA CONTROLAR A JANELA MODAL
  // -------------------------------------------------------------
  function abrirJanela(titulo, descricao, linkGithub) {
    document.getElementById("titulo-modal").innerText = titulo;
    document.getElementById("texto-modal").innerText = descricao;
  
    const botaoGithub = document.getElementById("link-github-modal");
  
    // Se passou o link do GitHub, mostra o botão. Se não, esconde.
    if (linkGithub) {
      botaoGithub.href = linkGithub;
      botaoGithub.style.display = "inline-flex";
    } else {
      botaoGithub.style.display = "none";
    }
  
    document.getElementById("janela-modal").style.display = "flex";
  }
  
  function fecharJanela() {
    document.getElementById("janela-modal").style.display = "none";
  }