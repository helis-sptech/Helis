function barras(etapa) {
   const barra1 = document.getElementById("barra1");
   const barra2 = document.getElementById("barra2");
   const barra3 = document.getElementById("barra3");

   const etapa1 = document.getElementById("etapa1");
   const etapa2 = document.getElementById("etapa2");
   const etapa3 = document.getElementById("etapa3");

   barra1.className = "barra";
   barra2.className = "barra";
   barra3.className = "barra";

   etapa1.className = "";
   etapa2.className = "";
   etapa3.className = "";

   if (etapa >= 1) {
    barra1.className = "barra-atual";
    etapa1.className = "etapa-atual";
   }

   if (etapa >= 2) {
    barra2.className = "barra-atual";
    etapa2.className = "etapa-atual";
   }

   if (etapa >= 3) {
    barra3.className = "barra-atual";
    etapa3.className = "etapa-atual";
   }
}

function avancar() {
document.getElementById("conteudo-informacoes").style.display = "none";
document.getElementById("conteudo-endereco").style.display = "block";

barras(2);
}

function avancar2() {
document.getElementById("conteudo-endereco").style.display = "none";
document.getElementById("conteudo-responsavel").style.display = "block";

barras(3);
}

function voltar() {
document.getElementById("conteudo-endereco").style.display = "none";
document.getElementById("conteudo-informacoes").style.display = "block";

barras(1);
}

function voltar2() {
document.getElementById("conteudo-responsavel").style.display = "none";
document.getElementById("conteudo-endereco").style.display = "block";

barras(2);
}

function finalizar() {
   alert("Cadastro finalizado!")
}