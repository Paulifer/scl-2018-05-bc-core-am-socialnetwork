

window.onload = () => {
  openPerfil();
  openQuienesSomos();
  openSalud();
  openAlimentacion();
  openActividades();
  openNoticias();
  openPreguntasfrecuentes();
  openNav();
  closeNav();
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openPerfil() {
  const btnPerfil = document.getElementById('perfil').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = "none";
    document.getElementById("containerQuienesSomos").style.display = "none";
    document.getElementById("containerSalud").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'none'
    document.getElementById("containerPerfil").style.display = "block";
    document.getElementById('mySidenav').style.display = "block";
    //id container .style.display="none";
  });
  
}

function openQuienesSomos() {
  const btnQuienesSomos = document.getElementById('quienesSomos').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = 'none';
    document.getElementById("containerPerfil").style.display = 'none';
    document.getElementById("containerSalud").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'none'
    document.getElementById("containerQuienesSomos").style.display = 'block';
    //id container .style.display="none";
  });
  openNav();
  closeNav();
}

function openSalud() {
  const btnSalud = document.getElementById('salud').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = 'none';
    document.getElementById("containerPerfil").style.display = 'none';
    document.getElementById("containerQuienesSomos").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'none';
    document.getElementById("containerSalud").style.display = 'block';

  });
  openNav();
  closeNav();
}


function openAlimentacion() {
  const btnAlimentacion = document.getElementById('alimentacion').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = 'none';
    document.getElementById("containerPerfil").style.display = 'none';
    document.getElementById("containerQuienesSomos").style.display = 'none';
    document.getElementById("containerSalud").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'block';

  });
  openNav();
  closeNav();

}

function openActividades() {
  const btnNoticias = document.getElementById('actividades').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = 'none';
    document.getElementById("containerPerfil").style.display = 'none';
    document.getElementById("containerQuienesSomos").style.display = 'none';
    document.getElementById("containerSalud").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'block';
  });
  openNav();
  closeNav();
}

function openNoticias() {
  const btnNoticias = document.getElementById('noticias').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = 'none';
    document.getElementById("containerPerfil").style.display = 'none';
    document.getElementById("containerQuienesSomos").style.display = 'none';
    document.getElementById("containerSalud").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'block';

    //id container .style.display="none";
  });
  openNav();
  closeNav();

}

function openPreguntasfrecuentes() {
  const btnPreguntasfrecuentes = document.getElementById('preguntasFrecuentes').addEventListener('click', () => {
    document.getElementById("containerMuro").style.display = 'none';
    document.getElementById("containerPerfil").style.display = 'none';
    document.getElementById("containerQuienesSomos").style.display = 'none';
    document.getElementById("containerSalud").style.display = 'none';
    document.getElementById("containerAlimentacion").style.display = 'none';
    document.getElementById("containerActividades").style.display = 'none';
    document.getElementById("containerNoticias").style.display = 'none';
    document.getElementById("containerPreguntasFrecuentes").style.display = 'block';
    //id container .style.display="none";
  });
openNav();
  closeNav();
}

//Al hacer click en voler 

