const cubo = document.querySelector('.cubo');
let arrastando = false;
let inicioX, inicioY;
let rotacaoX = -30, rotacaoY = -30;

const PressionarMouse = (evento) => {
  arrastando = true;
  inicioX = evento.clientX;
  inicioY = evento.clientY;
};

const MoverMouse = (evento) => {
  if (!arrastando) return;
  const deslocamentoX = evento.clientX - inicioX;
  const deslocamentoY = evento.clientY - inicioY;
  rotacaoX += deslocamentoY * -0.5;
  rotacaoY += deslocamentoX * 0.5;
  cubo.style.transform = `rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`;
  inicioX = evento.clientX;
  inicioY = evento.clientY;
};

const SoltarMouse = () => {
  arrastando = false;
};

const IniciarToque = (evento) => {
  arrastando = true;
  inicioX = evento.touches[0].clientX;
  inicioY = evento.touches[0].clientY;
};

const MoverToque = (evento) => {
  if (!arrastando) return;
  const deslocamentoX = evento.touches[0].clientX - inicioX;
  const deslocamentoY = evento.touches[0].clientY - inicioY;
  rotacaoX += deslocamentoY * -0.5;
  rotacaoY += deslocamentoX * 0.5;
  cubo.style.transform = `rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`;
  inicioX = evento.touches[0].clientX;
  inicioY = evento.touches[0].clientY;
};

const FinalizarToque = () => {
  arrastando = false;
};

document.addEventListener('mousedown', PressionarMouse);
document.addEventListener('mousemove', MoverMouse);
document.addEventListener('mouseup', SoltarMouse);
document.addEventListener('touchstart', IniciarToque);
document.addEventListener('touchmove', MoverToque);
document.addEventListener('touchend', FinalizarToque);