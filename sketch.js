
let x; // Declara a variável 'x', que representará a posição horizontal de um ponto.
let y; // Declara a variável 'y', que representará a posição vertical de um ponto.

function setup() {
  createCanvas(400, 400); // Cria uma tela (canvas) de 400 por 400 pixels.
 
  x = random(400); // Gera um valor aleatório entre 0 e 400 para 'x'.
  x = int(x); // Converte esse valor para um número inteiro.
 
  y = random(400); // Gera um valor aleatório entre 0 e 400 para 'y'.
  y = int(y); // Converte esse valor para um número inteiro.
}

function draw() {
  background(220); // Define a cor de fundo da tela como um cinza claro.

  x = x + random(-5, 5); // Move o ponto 'x' aleatoriamente entre -5 e 5 pixels.
  y = y + random(-5, 5); // Move o ponto 'y' aleatoriamente entre -5 e 5 pixels.

  x = constrain(x, 0, 400); // Garante que 'x' permaneça dentro da tela (entre 0 e 400).
  y = constrain(y, 0, 400); // Garante que 'y' permaneça dentro da tela (entre 0 e 400).

  let distancia; // Declara a variável 'distancia'.
  distancia = dist(mouseX, mouseY, x, y); // Calcula a distância entre o mouse e o ponto (x, y).

  circle(mouseX, mouseY, distancia); // Desenha um círculo com centro no mouse e diâmetro igual à distância até o ponto (x, y).
  //circle(x, y, 10); // (Comentado) Desenharia um círculo no ponto (x, y), com raio 10.

  if (distancia < 3) { // Se a distância entre o mouse e o ponto for menor que 3 pixels...
    text("Encontrei!", 200, 200); // Escreve "Encontrei!" no centro da tela.
    noLoop(); // Para a execução do draw() — o programa deixa de desenhar a cada frame.
  }
}