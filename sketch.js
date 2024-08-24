let campoIdade;
let campoDrama;
let campoComedia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoDrama = createCheckbox("Gosta de dramas?");
  campoComedia = createCheckbox("Gosta de comédia?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeComedia = campoComedia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeComedia);

  fill(color(0, 0, 128));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeComedia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Interstellar";
    } else {
      if (idade >= 12) {
        if (gostaDeDrama || gostaDeComedia) {
          return "A Vida Secreta das Abelhas";
        } else {
          return "Jumanji: Bem-vindo à Selva";
        }
      } else {
        if (gostaDeDrama) {
          return "O Corcunda de Notre Dame";
        } else {
          return "Como Treinar o Seu Dragão";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "O Rei Leão";
    } else {
      return "Madagascar";
    }
  }
}