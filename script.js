var fechaHoraElemento = document.getElementById("fecha-hora");

function obtenerFechaHora() {
  var fechaHora = new Date();
  var fecha = fechaHora.toLocaleDateString();
  var hora = fechaHora.toLocaleTimeString();

  return fecha + " - " + hora;
}

var ubicacionElemento = document.getElementById("ubicacion");

function actualizarFechaHora() {
  const fechaHoraElemento = document.getElementById('fecha-hora');
  fechaHoraElemento.textContent = obtenerFechaHora();
}

actualizarFechaHora();

setInterval(actualizarFechaHora, 1000);

var ciudadActual = "";

function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
  
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitud}&longitude=${longitud}&localityLanguage=es`;
  
      fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
        console.log(data)
          var city = data.locality + " - " + data.city;
          var ciudad = data.city
          ciudadActual = ciudad;
          obtenerTiempo(ciudadActual);

          ubicacionElemento.textContent = city;
        })
        .catch(error => {
          ubicacionElemento.textContent = "Error al obtener la ubicación";
          console.log(error);
        });
    }, function(error) {
      ubicacionElemento.textContent = "No se pudo obtener la ubicación";
    });
  }
  

  obtenerUbicacion();

// archivo.js
function pedirUsuario() {

  var nombreUsuarioValido1 = "Daniel";
  var nombreUsuarioValido2 = "Maruja";
  var nombreUsuarioValido3 = "Jenkins";
  var nombreUsuarioValido4 = "Anyulieth";
  var nombreUsuarioValido5 = "Ancassi";
  var nombreUsuario = "";

  

  var boton = document.querySelector(".boton-logout");
  

  if (boton.classList.contains("log-out")) {

    boton.classList.remove("log-out");
    boton.classList.add("log-in");
    boton.innerHTML = `
      <span class="material-symbols-outlined">
        login
      </span>
      <p>Log in</p>
    `;
    var nombreUsuarioContainer = document.getElementById("nombreUsuarioContainer");
    nombreUsuarioContainer.textContent = "";
    var fotoPerfil = document.getElementById("fotoPerfil");
    fotoPerfil.src = "";
    var saludoElement = document.querySelector(".saludo");
    saludoElement.textContent = "";
    var fotoPerfilElement = document.getElementById("fotoPerfil");
    fotoPerfilElement.src = "";
    
    fotoPerfilElement.style.opacity = "0";

  } else {

    boton.classList.remove("log-in");
    boton.classList.add("log-out");
    boton.innerHTML = `
      <span class="material-symbols-outlined">
        logout
      </span>
      <p>Log out</p>
    `;

    while (nombreUsuario !== nombreUsuarioValido1 && nombreUsuario !== nombreUsuarioValido2 && nombreUsuario !== nombreUsuarioValido3 && nombreUsuario !== nombreUsuarioValido4 && nombreUsuario !== nombreUsuarioValido5) {
      nombreUsuario = prompt("Ingrese su nombre de usuario:");

      if (nombreUsuario) {
          if (nombreUsuario === nombreUsuarioValido1 || nombreUsuario === nombreUsuarioValido2 || nombreUsuario === nombreUsuarioValido3 || nombreUsuario === nombreUsuarioValido4 || nombreUsuario === nombreUsuarioValido5) {
              var nombreUsuarioContainer = document.getElementById("nombreUsuarioContainer");
              nombreUsuarioContainer.textContent = nombreUsuario;

              var fotoPerfil = document.getElementById("fotoPerfil");
              var saludoElement = document.querySelector(".saludo");
              if (nombreUsuario === "Daniel") {
                  fotoPerfil.src = "foto-perfil.png";
                  fotoPerfil.style.opacity = "1";
                  saludoElement.textContent = "Bienvenido";
              } else if (nombreUsuario === "Maruja") {
                  fotoPerfil.src = "foto-perfil-2.png";
                  fotoPerfil.style.opacity = "1";
                  saludoElement.textContent = "Bienvenido";
              }
              else if (nombreUsuario === "Jenkins") {
                fotoPerfil.src = "foto-perfil-3.png";
                fotoPerfil.style.opacity = "1";
                saludoElement.textContent = "Bienvenido";
              }
              else if (nombreUsuario === "Anyulieth") {
                fotoPerfil.src = "foto-perfil-4.png";
                fotoPerfil.style.opacity = "1";
                saludoElement.textContent = "Bienvenido";
              }
              else if (nombreUsuario === "Ancassi") {
                fotoPerfil.src = "foto-perfil-5.png";
                fotoPerfil.style.opacity = "1";
                saludoElement.textContent = "Bienvenido";
              }
          } else {
              alert("Nombre de usuario incorrecto. Por favor, inténtelo nuevamente.");
          }
      } else {
          alert("Debe ingresar un nombre de usuario válido. Por favor, inténtelo nuevamente.");
      }
  }
  }
}

function transparente(){
  var fotoPerfilElement = document.getElementById("fotoPerfil");
  fotoPerfilElement.style.opacity = "0";
  var saludoElement = document.querySelector(".saludo");
    saludoElement.textContent = "";
}

function cambiarSeccion(seccion) {
  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = ''; // Limpiar el contenido previo
  contenidoElemento.classList.add('transicion'); // Agregar clase de transición

  setTimeout(() => {
      if (seccion === 'home') {
          cargarDatosHome(); // Cargar datos del clima
      } else if (seccion === 'notificaciones') {
          mostrarNotificaciones(); // Mostrar notificaciones
      } else if (seccion === 'listas') {
          mostrarListasClimaticas(); // Mostrar datos climáticos de las ciudades
      } else if (seccion === 'guardados') {
        mostrarGuardados(); // Mostrar datos climáticos de las ciudades guardadas
      } else if (seccion === 'verificado') {
        mostrarVerificado(); // Mostrar texto de la Licencia Apache
      } else if (seccion === 'perfil') {
        mostrarPerfil(); // Mostrar información del perfil del usuario
      } else if (seccion === 'masOpciones') {
        mostrarMasOpciones(); // Mostrar opciones adicionales
      }
      contenidoElemento.classList.remove('transicion'); // Quitar clase de transición
  }, 500); // Duración de la transición
}

function cargarDatosHome() {
  // Limpiar el contenido actual
  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = ''; // Limpiar el contenido previo

  // Aquí puedes agregar la lógica para obtener los datos meteorológicos
  // Por ejemplo, podrías usar la ubicación actual o una ciudad predeterminada
  const ciudad = ciudadActual || ''; // Cambia 'Madrid' por la ciudad que desees
  obtenerTiempo(ciudad);

  // Agregar una clase para la transición
  contenidoElemento.classList.add('transicion');
  setTimeout(() => {
      contenidoElemento.classList.remove('transicion');
  }, 500); // Duración de la transición
}

function obtenerTiempo(ciudad) {
  const apiKey = '97fd797f096365a8d9fd318ec6668949';
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;
  
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
      console.log(data);

      var temperatura = data.main.temp;
      var descripcion = data.weather[0].description;
      var tempMax = data.main.temp_max;
      var tempMin = data.main.temp_min;
      var presion = data.main.pressure;
      var viento = data.wind.speed;
      var img = data.weather[0].icon
      
      var contenidoElemento = document.querySelector('.contenido');
      contenidoElemento.innerHTML = `<div class="ajustado" id="ajustado"><img src="http://openweathermap.org/img/wn/${img}@2x.png" alt="error" class="imagen">
      <div class="linea-1">La temperatura actual en <span class="ciudad">${ciudad}</span> es de ${temperatura}°C. El clima es ${descripcion}.</div>
      <div class="linea-2">
      <div class="temperatura-min">
      <p>
      <span class="material-symbols-outlined" id="abajo">
      arrow_downward
      </span> 
      ${tempMin}°C
      </p> 
      </div>
      <div class="temperatura-max">
      <p>
      <span class="material-symbols-outlined" id="arriba">
      arrow_upward
      </span> ${tempMax}°C
      </p>
      </div>
      </div>
      <div class="linea-3">
      <div class="presion">
      <p>
      <span class="material-symbols-outlined" id="pressure">
      altitude
      </span>
      ${presion} hPa
      </p>
      </div>
      <div class="viento">
      <p>
      <span class="material-symbols-outlined" id="aire">
      air
      </span>
      ${viento} Km/h
      </p>
      </div>
      </div>
      <div id="inputContainer">
      </div>
      </div>`;

      divPrincipal();
      
  })
  .catch(error => {
      console.log("Error al obtener los datos meteorológicos:", error);
  });
}

function toggleModoOscuro() {
  const body = document.body;
  body.classList.toggle('modo-oscuro');

  if (body.classList.contains('modo-oscuro')) {
      localStorage.setItem('modoOscuro', 'activo');
  } else {
      localStorage.setItem('modoOscuro', 'inactivo');
  }
}

function cargarPreferenciaModoOscuro() {
  const modoOscuro = localStorage.getItem('modoOscuro');
  if (modoOscuro === 'activo') {
      document.body.classList.add('modo-oscuro');
  }
}

// Llamar a la función para cargar la preferencia al cargar la página
document.addEventListener('DOMContentLoaded', cargarPreferenciaModoOscuro);

toggleButton.addEventListener('click', toggleModoOscuro);

var inputContainerShown = false;

function mostrarInput() {

  inputContainerShown = true;

  var inputContainer = document.getElementById("inputContainer");

  // Crea el elemento <input>
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Localizacion");
  input.setAttribute("class", "input-texto");

  // Crea el elemento <button>
  var boton = document.createElement("button");
  boton.setAttribute("class", "input-boton");

  // Crea el elemento <span> dentro del botón
  var span = document.createElement("span");
  span.setAttribute("class", "material-symbols-outlined");
  span.innerText = "location_searching";

  // Agrega el <span> al botón
  boton.appendChild(span);

  // Agrega el <input> y el <button> al contenedor
  inputContainer.appendChild(input);
  inputContainer.appendChild(boton);

  // Función para obtener el valor del campo de texto y llamar a obtenerTiempo()
  function obtenerTiempoConTexto() {
    var ciudad = input.value;
    obtenerTiempo(ciudad);
  }

  // Agrega el evento de click al botón
  boton.addEventListener("click", function() {
    obtenerTiempoConTexto();
    inputContainerShown = false;
  });

  // Agrega el evento de teclado al campo de texto
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      inputContainerShown = false;
      // Verifica si la tecla presionada es "Enter"
      obtenerTiempoConTexto();
    }
  });
}

function animacion() {
  var inputContainer = document.getElementById("inputContainer");
  
  // Hacemos visible el contenedor y lo volvemos a su tamaño normal
  inputContainer.style.opacity = 1;
  inputContainer.style.transform = "scale(1)";
};

function divPrincipal() {
  var div = document.getElementById("ajustado");
  
  // Hacemos visible el contenedor y lo volvemos a su tamaño normal después de 0.5 segundos
  setTimeout(function() {
    div.style.opacity = 1;
    div.style.transform = "scale(1)";
  }, 10); // 500 milisegundos = 0.5 segundos
}

var inputNotiShown = false;

function mostrarNotificaciones() {

  inputNotiShown = true;

  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = ''; // Limpiar el contenido previo\

    // Aquí puedes agregar la lógica para obtener las notificaciones
    const notificaciones = [
        "Nueva actualización disponible.",
        "Recuerda revisar el clima para el fin de semana.",
        "Se ha agregado una nueva ciudad a tus favoritos."
    ];

    // Actualizar el contador de notificaciones
    const contadorElemento = document.getElementById('contador-notificaciones');
    contadorElemento.textContent = notificaciones.length; // Actualiza el contador

    // Crear un contenedor para las notificaciones
    const notificacionesHTML = notificaciones.map(notificacion => `
        <div class="notificacion">
            ${notificacion}
        </div>
    `).join('');

    // Actualizar el contenido del contenedor con las notificaciones
    contenidoElemento.innerHTML = `
        <div class="ajustado" id="ajustado">
            <h2>Notificaciones</h2>
            ${notificacionesHTML}
        </div>
    `;

    // Agregar una clase para la transición
    contenidoElemento.classList.add('transicion');
    setTimeout(() => {
        contenidoElemento.classList.remove('transicion');
    }, 500); // Duración de la transición
}

var inputListShown = false;

function mostrarListasClimaticas() {

  inputListShown = true;

  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = '<p>Cargando datos...</p>'; // Mensaje de carga

  const ciudadesPeru = [
    { nombre: "Lima", id: "Lima" },
    { nombre: "Cusco", id: "Cusco" },
    { nombre: "Arequipa", id: "Arequipa" },
    { nombre: "Trujillo", id: "Trujillo" },
    { nombre: "Piura", id: "Piura" },
    { nombre: "Huancayo", id: "Huancayo" }
  ];

  const apiKey = '97fd797f096365a8d9fd318ec6668949'; // Asegúrate de usar tu propia API Key
  const promises = ciudadesPeru.map(ciudad => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.id}&appid=${apiKey}&lang=es&units=metric`;
    return fetch(apiUrl)
      .then(res => res.json())
      .then(data => ({
        nombre: ciudad.nombre,
        temperatura: data.main.temp,
        descripcion: data.weather[0].description
      }))
      .catch(error => ({
        nombre: ciudad.nombre,
        temperatura: 'N/A',
        descripcion: 'Error al obtener datos'
      }));
  });

  Promise.all(promises).then(ciudadesDatos => {
    const ciudadesHTML = ciudadesDatos.map(ciudad => `
      <div class="ciudad-climatica">
          <h4>${ciudad.nombre}</h4>
          <p>Temperatura: ${ciudad.temperatura}°C</p>
          <p>Descripción: ${ciudad.descripcion}</p>
      </div>
    `).join('');

    contenidoElemento.innerHTML = `
      <div class="ajustado">
          <h2>Datos Climáticos de Ciudades Importantes de Perú</h2>
          ${ciudadesHTML}
      </div>
    `;
  });

  contenidoElemento.classList.add('transicion');
    setTimeout(() => {
        contenidoElemento.classList.remove('transicion');
    }, 500); // Duración de la transición
}

function mostrarGuardados() {
  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = '<p>Cargando datos...</p>'; // Mensaje de carga

  const ciudadesGuardadas = [
    { nombre: "Lima", id: "Lima" },
    { nombre: "Huancayo", id: "Huancayo" }
  ];

  const apiKey = '97fd797f096365a8d9fd318ec6668949'; // Asegúrate de usar tu propia API Key
  const promises = ciudadesGuardadas.map(ciudad => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.id}&appid=${apiKey}&lang=es&units=metric`;
    return fetch(apiUrl)
      .then(res => res.json())
      .then(data => ({
        nombre: ciudad.nombre,
        temperatura: data.main.temp,
        descripcion: data.weather[0].description
      }))
      .catch(error => ({
        nombre: ciudad.nombre,
        temperatura: 'N/A',
        descripcion: 'Error al obtener datos'
      }));
  });

  Promise.all(promises).then(ciudadesDatos => {
    const ciudadesHTML = ciudadesDatos.map(ciudad => `
      <div class="ciudad-climatica">
          <h4>${ciudad.nombre}</h4>
          <p>Temperatura: ${ciudad.temperatura}°C</p>
          <p>Descripción: ${ciudad.descripcion}</p>
      </div>
    `).join('');

    contenidoElemento.innerHTML = `
      <div class="ajustado">
          <h2>Datos Climáticos de Ciudades Guardadas</h2>
          ${ciudadesHTML}
      </div>
    `;
  });

  contenidoElemento.classList.add('transicion');
    setTimeout(() => {
        contenidoElemento.classList.remove('transicion');
    }, 500); // Duración de la transición
}

function mostrarVerificado() {
  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = ''; // Limpiar el contenido previo

  const licenciaTexto = `
      <div class="ajustado">
          <h2>Licencia Apache</h2>
          <p>Versión 2.0, enero de 2004</p>
          <p><a href="http://www.apache.org/licenses/">http://www.apache.org/licenses/</a></p>
          <h3>TÉRMINOS Y CONDICIONES PARA USO, REPRODUCCIÓN Y DISTRIBUCIÓN</h3>
          <ol>
              <li><strong>Definiciones.</strong>
                  <ul>
                      <li><strong>"Licencia"</strong> se refiere a los términos y condiciones para uso, reproducción y distribución definidos por las Secciones 1 a 9 de este documento.</li>
                      <li><strong>"Licenciante"</strong> significa el propietario de los derechos de autor o entidad autorizada por el propietario de los derechos de autor que otorga la Licencia.</li>
                      <li><strong>"Entidad Legal"</strong> significa la unión de la entidad que actúa y todas las demás entidades que controlan, son controladas por, o están bajo control común con esa entidad.</li>
                      <li><strong>"Usted" (o "Su")</strong> significa una persona o Entidad Legal que ejerce los permisos otorgados por esta Licencia.</li>
                      <li><strong>"Forma de Fuente"</strong> significa la forma preferida para realizar modificaciones, incluyendo pero no limitado a código fuente de software, documentación fuente y archivos de configuración.</li>
                      <li><strong>"Forma de Objeto"</strong> significa cualquier forma resultante de transformación mecánica o traducción de una forma de Fuente.</li>
                      <li><strong>"Trabajo"</strong> significa la obra de autoría, ya sea en forma de Fuente u Objeto, disponible bajo la Licencia.</li>
                      <li><strong>"Obras Derivadas"</strong> significa cualquier obra, ya sea en forma de Fuente u Objeto, que se basa en (o deriva de) el Trabajo.</li>
                      <li><strong>"Contribución"</strong> significa cualquier obra de autoría, incluyendo la versión original del Trabajo y cualquier modificación o adición a esa obra.</li>
                      <li><strong>"Contribuyente"</strong> significa el Licenciante y cualquier individuo o Entidad Legal en nombre de quien se ha recibido una Contribución.</li>
                  </ul>
              </li>
              <li><strong>Concesión de Licencia de Derechos de Autor.</strong> Sujeto a los términos y condiciones de esta Licencia, cada Contribuyente otorga a Usted una licencia de derechos de autor perpetua, mundial, no exclusiva, sin cargo, libre de regalías, irrevocable para reproducir, preparar Obras Derivadas de, exhibir públicamente, realizar públicamente, sublicenciar y distribuir el Trabajo y tales Obras Derivadas en forma de Fuente u Objeto.</li>
              <li><strong>Concesión de Licencia de Patente.</strong> Sujeto a los términos y condiciones de esta Licencia, cada Contribuyente otorga a Usted una licencia de patente perpetua, mundial, no exclusiva, sin cargo, libre de regalías, irrevocable.</li>
              <li><strong>Redistribución.</strong> Puede reproducir y distribuir copias del Trabajo o Obras Derivadas en cualquier medio, con o sin modificaciones.</li>
              <li><strong>Presentación de Contribuciones.</strong> A menos que Usted indique lo contrario, cualquier Contribución presentada intencionalmente para inclusión en el Trabajo por Usted al Licenciante estará bajo los términos y condiciones de esta Licencia.</li>
              <li><strong>Marcas Registradas.</strong> Esta Licencia no otorga permiso para usar los nombres comerciales, marcas registradas o nombres de productos del Licenciante.</li>
              <li><strong>Descargo de Responsabilidad.</strong> A menos que lo exija la ley aplicable o acordado por escrito, el Licenciante proporciona el Trabajo (y cada Contribuyente proporciona sus Contribuciones) en una base "TAL CUAL", SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sea expresas o implícitas, incluyendo, sin limitación, cualquier garantía o condición de TÍTULO, NO INFRACCIÓN, COMERCIABILIDAD, o ADECUACIÓN PARA UN PROPÓSITO PARTICULAR. Usted es el único responsable de determinar la idoneidad de usar o redistribuir el Trabajo y asume cualquier riesgo asociado con su ejercicio de permisos bajo esta Licencia.</li>
              <li><strong>Limitación de Responsabilidad.</strong> En ningún caso y bajo ninguna teoría legal, ya sea en agravio (incluyendo negligencia), contrato, o de otro modo, a menos que lo exija la ley aplicable (como actos deliberados y gravemente negligentes) o acordado por escrito, será cualquier Contribuyente responsable ante Usted por daños, incluyendo cualquier daño directo, indirecto, especial, incidental, o consecuente de cualquier carácter que surja como resultado de esta Licencia o del uso o la incapacidad de usar el Trabajo.</li>
              <li><strong>Aceptación de Garantía o Responsabilidad Adicional.</strong> Mientras redistribuye el Trabajo o las Obras Derivadas, puede optar por ofrecer, y cobrar una tarifa por, la aceptación de soporte, garantía, indemnización, u otras obligaciones y/o derechos de responsabilidad consistentes con esta Licencia.</li>
          </ol>
          <h3>FIN DE LOS TÉRMINOS Y CONDICIONES</h3>
          <h3>APÉNDICE: Cómo aplicar la Licencia Apache a su trabajo.</h3>
          <p>Para aplicar la Licencia Apache a su trabajo, adjunte el siguiente aviso estándar, con los campos entre corchetes "[]" reemplazados con su propia información identificativa. (¡No incluya los corchetes!) El texto debe estar encerrado en la sintaxis de comentario apropiada para el formato del archivo.</p>
          <p>Copyright [aaaa] [nombre del propietario de los derechos de autor]</p>
          <p>Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia"); no puede usar este archivo excepto en cumplimiento con la Licencia. Puede obtener una copia de la Licencia en</p>
          <p><a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a></p>
          <p>A menos que lo exija la ley aplicable o acordado por escrito, el software distribuido bajo la Licencia se distribuye en una base "TAL CUAL", SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sea expresas o implícitas. Consulte la Licencia para los permisos específicos que rigen el uso y las limitaciones bajo la Licencia.</p>
      </div>
  `;

  contenidoElemento.innerHTML = licenciaTexto; // Mostrar el texto de la licencia

  contenidoElemento.classList.add('transicion');
    setTimeout(() => {
        contenidoElemento.classList.remove('transicion');
    }, 500); // Duración de la transición
}

function mostrarPerfil() {
  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = ''; // Limpiar el contenido previo

  // Simulando la información del usuario (esto normalmente vendría de una base de datos)
  const usuario = {
      nombre: "Juan Pérez",
      correo: "juan.perez@example.com",
      descripcion: "Soy un apasionado de la meteorología y me encanta aprender sobre el clima."
  };

  const perfilHTML = `
      <div class="ajustado">
          <h2>Perfil de Usuario</h2>
          <p><strong>Nombre:</strong> ${usuario.nombre}</p>
          <p><strong>Correo:</strong> ${usuario.correo}</p>
          <p><strong>Descripción:</strong> ${usuario.descripcion}</p>
          <button onclick="eliminarCuenta()">Eliminar Cuenta</button>
      </div>
  `;

  contenidoElemento.innerHTML = perfilHTML; // Mostrar la información del perfil

  contenidoElemento.classList.add('transicion');
    setTimeout(() => {
        contenidoElemento.classList.remove('transicion');
    }, 500); // Duración de la transición
}

// Función para eliminar la cuenta (simulada)
function eliminarCuenta() {
  const confirmacion = confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.");
  if (confirmacion) {
      // Aquí iría la lógica para eliminar la cuenta del usuario
      alert("Cuenta eliminada exitosamente.");
      // Redireccionar a la página de inicio o realizar otra acción
      cambiarSeccion('home'); // Por ejemplo, regresar a la sección de inicio
  }
}

function mostrarMasOpciones() {
  const contenidoElemento = document.querySelector('.contenido');
  contenidoElemento.innerHTML = ''; // Limpiar el contenido previo

  const masOpcionesHTML = `
      <div class="ajustado">
          <h2>Más Opciones</h2>
          <div>
              <button onclick="cambiarPerfil()">Cambiar de Perfil</button>
          </div>
          <div>
              <h3>Apoya la limpieza de nuestros océanos</h3>
              <p>Únete a la campaña <a href="https://teamseas.org/" target="_blank">#TeamSeas</a> para ayudar a eliminar 30 millones de libras de basura de nuestros océanos.</p>
          </div>
      </div>
  `;

  contenidoElemento.innerHTML = masOpcionesHTML; // Mostrar las opciones
}

// Función para cambiar de perfil (simulada)
function cambiarPerfil() {
  alert("Funcionalidad para cambiar de perfil no implementada.");
}