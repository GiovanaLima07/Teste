const imagens = [
  { src: "/img/Fundo.png", alt: "" },
  { src: "/img/Fundo2.png", alt: "" },
  { src: "/img/Fundo3.png", alt: "" },
  { src: "/img/Fundo4.png", alt: "" }
];

const carrosselImagem = document.getElementById("hero-carrossel");
const buttons = document.querySelectorAll("#carrossel-controles button");
let currentIndex = 0;
let intervalo = null;

function trocarImagens(index) {
  carrosselImagem.classList.add("opacity-0");

  setTimeout(() => {
    currentIndex = index;
    carrosselImagem.style.backgroundImage = `url('${imagens[index].src}')`;

    buttons.forEach((btn, i) => {
      btn.classList.toggle("bg-[#f07a00]", i === index);
      btn.classList.toggle("bg-[#1a1464]", i !== index);
    });

    carrosselImagem.classList.remove("opacity-0");
  }, 300);
}

function iniciarCarrossel() {
  intervalo = setInterval(() => {
    let proximoIndex = (currentIndex + 1) % imagens.length;
    trocarImagens(proximoIndex);
  }, 3000);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    trocarImagens(parseInt(btn.dataset.index));
    clearInterval(intervalo);
    iniciarCarrossel();
  });
});

trocarImagens(currentIndex);
iniciarCarrossel();
