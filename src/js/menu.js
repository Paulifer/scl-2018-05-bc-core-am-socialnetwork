window.onload = () => {
  openNav();
  closeNav();
  openPerfil();
  closePerfil();
  openQuienesSomos();
  closeQuienessomos();
  openSalud();
  closeSalud();
  openAlimentacion();
  closeAlimentacion();
  openActividades();
  closeActividades();
  openNoticias();
  closeNoticias();
  openPreguntasfrecuentes();
  closePreguntasfrecuentes();
}


/* Barra lateral */
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

/* Abrir y cerrar seccion perfil */

function openPerfil() {
  const btnPerfil = document.getElementById('perfil').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'block';
  });

}

function closePerfil() {
  const btnAtras = document.getElementById('atrasPerfil').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';
});
}

/* Abrir y cerrar seccion Quienes Somos */

function openQuienesSomos() {
  const btnQuienesSomos = document.getElementById('quienesSomos').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'block';
  });
}

function closeQuienessomos() {
  const btnAtrasQuienessomos = document.getElementById('atrasQuienessomos').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';
  });
}

/* Abrir y cerrar seccion Salud */

function openSalud() {
  const btnSalud = document.getElementById('salud').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'block';

  });
}

function closeSalud() {
  const btnAtraSalud = document.getElementById('atrasSalud').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';

  });
}

/* Abrir y cerrar seccion alimentacion */

function openAlimentacion() {
  const btnAlimentacion = document.getElementById('alimentacion').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'block';

  });

}

function closeAlimentacion() {
  const btnAtrasAlimentacion = document.getElementById('atrasAlimentacion').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';
  });
  openNav();
  closeNav();
}

/* Abrir y cerrar seccion actividades */

function openActividades() {
  const btnNoticias = document.getElementById('actividades').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'block';
  });
}

function closeActividades() {
  const btnAtrasActividades = document.getElementById('atrasActividades').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';

  });
  openNav();
  closeNav();
}

/* Abrir y cerrar seccion Noticias */
function openNoticias() {
  const btnNoticias = document.getElementById('noticias').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'block';

    // id container .style.display="none";
  });

}
function closeNoticias() {
  const btnAtrasNoticias = document.getElementById('atrasNoticias').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';
    openNav();
  closeNav();
    // id container .style.display="none";
  });
}

/* Abrir y cerrar seccion preguntas frecuentes */

function openPreguntasfrecuentes() {
  const btnPreguntasfrecuentes = document.getElementById('preguntasFrecuentes').addEventListener('click', () => {
    document.getElementById('containerMuro').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'block';
  });

}

function closePreguntasfrecuentes() {
  const btnAtrasPreguntasfrecuentes = document.getElementById('atrasPreguntasFrecuentes').addEventListener('click', () => {
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';
  });
  openNav();
  closeNav();
}


// abrir muro

function openHome() {
  const btnHome = document.getElementById('home').addEventListener('click', () => {
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('containerQuienesSomos').style.display = 'none';
    document.getElementById('containerSalud').style.display = 'none';
    document.getElementById('containerAlimentacion').style.display = 'none';
    document.getElementById('containerActividades').style.display = 'none';
    document.getElementById('containerNoticias').style.display = 'none';
    document.getElementById('containerPreguntasFrecuentes').style.display = 'none';
    document.getElementById('containerMuro').style.display = 'block';
  });
openNav();
  closeNav();
}


$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});