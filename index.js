const mensaje = document.getElementById('mensaje');
const botonRepetir = document.getElementById('repetir');
const jardin = document.querySelector('.jardin');
let temporizador;

function iniciarAnimacion() {
  clearTimeout(temporizador);
  mensaje.classList.remove('visible');
  mensaje.setAttribute('aria-hidden', 'true');
  botonRepetir.hidden = true;

  // Reinicia las animaciones CSS de la rosa y sus hojas.
  jardin.style.display = 'none';
  void jardin.offsetWidth;
  jardin.style.display = '';

  const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  temporizador = setTimeout(() => {
    mensaje.classList.add('visible');
    mensaje.setAttribute('aria-hidden', 'false');
    botonRepetir.hidden = false;
  }, movimientoReducido ? 100 : 4700);
}

botonRepetir.addEventListener('click', iniciarAnimacion);
iniciarAnimacion();
