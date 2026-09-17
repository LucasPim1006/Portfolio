const checkbox = document.getElementById("btnDark");

if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", function () {
  
        document.body.classList.toggle("dark", checkbox.checked);        
        localStorage.setItem("darkMode", checkbox.checked);
    });

var texto = "Estudante no Cotemig, fã de front-end e criar jogos.";
var divTexto = document.getElementById("texto-digitado");
var i = 0;

function digitar() {
    if (i < texto.length) {
        divTexto.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 45);
    }
}
digitar();

var elementos = document.querySelectorAll(".animar");

function animarScroll() {
    var topoTela = window.innerHeight * 0.85;

    for (var j = 0; j < elementos.length; j++) {
        var posicao = elementos[j].getBoundingClientRect().top;

        if (posicao < topoTela) {
            elementos[j].classList.add("visivel");
        }
    }
}

window.addEventListener("scroll", animarScroll);
animarScroll();


function mascara_telefone ()
        {
           
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }


var formulario = document.getElementById("meu-formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    abrirJanela(
        "Mensagem Enviada!",
        "Obrigado pelo contato! Sua mensagem foi enviada com sucesso.",
        ""
    );

    formulario.reset();
});

function abrirJanela(titulo, descricao, link) {
    document.getElementById("titulo-modal").innerText = titulo;
    document.getElementById("texto-modal").innerText = descricao;

    var btnGithub = document.getElementById("link-github-modal");

    if (link != "" && link != null) {
        btnGithub.href = link;
        btnGithub.style.display = "inline-flex";
    } else {
        btnGithub.style.display = "none";
    }

    document.getElementById("janela-modal").style.display = "flex";
}

function fecharJanela() {
    document.getElementById("janela-modal").style.display = "none";
}