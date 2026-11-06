// Estado y elementos principales del portal.
const MODULOS = Array.isArray(window.MODULOS) ? window.MODULOS : [];
const CLAVE_PROGRESO = "hub-3dsa-progreso-v1";
const CLAVE_TEMA = "hub-3dsa-tema-v1";
const lista = document.getElementById("lista-modulos");
const buscador = document.getElementById("buscador");
const filtroDocente = document.getElementById("filtro-docente");
const filtroTecnologia = document.getElementById("filtro-tecnologia");
const botonLimpiarFiltros = document.getElementById("limpiar-filtros");
const dialogo = document.getElementById("dialogo-ficha");
const contenidoFicha = document.getElementById("contenido-ficha");
let modulosRepasados = leerProgreso();
let moduloQueAbrioFicha = null;
let estadoQuiz = null;

if (MODULOS.length === 0) {
  console.error("No se cargaron módulos. Revisa la ruta data/modulos.js.");
}

// Convierte las cadenas para comparar sin distinguir mayúsculas ni tildes.
function normalizar(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

// Devuelve los nombres de docente con un formato común, sin duplicados.
function obtenerDocentes(modulo) {
  const docentes = Array.isArray(modulo.docente) ? modulo.docente : [modulo.docente];
  return [...new Set(docentes.map((docente) => String(docente ?? "").trim()).filter(Boolean))];
}

// Evita que el contenido de los datos se interprete como etiquetas HTML.
function escaparHTML(valor) {
  return String(valor ?? "").replace(/[&<>"']/g, (caracter) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caracter]);
}

// Convierte las URLs seguras de las indicaciones en enlaces accesibles.
function renderizarTextoConEnlaces(texto) {
  return String(texto ?? "").split(/(https?:\/\/[^\s]+)/g).map((parte) => {
    if (!/^https?:\/\//i.test(parte)) return escaparHTML(parte);

    let urlTexto = parte;
    let puntuacion = "";
    while (/[.,;]$/.test(urlTexto)) {
      puntuacion = urlTexto.slice(-1) + puntuacion;
      urlTexto = urlTexto.slice(0, -1);
    }

    const url = enlaceSeguro(urlTexto);
    const enlace = url
      ? `<a href="${escaparHTML(url)}" target="_blank" rel="noopener noreferrer">${escaparHTML(urlTexto)}</a>`
      : escaparHTML(urlTexto);
    return enlace + escaparHTML(puntuacion);
  }).join("");
}

// Acepta enlaces web o rutas relativas; rechaza protocolos que no sean seguros.
function enlaceSeguro(valor) {
  const texto = String(valor ?? "").trim();
  if (!texto || /^[a-z][a-z\d+.-]*:/i.test(texto) && !/^https?:/i.test(texto)) {
    return "";
  }
  try {
    const url = new URL(texto, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

// Recupera el progreso guardado y usa una lista vacía si no se puede leer.
function leerProgreso() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_PROGRESO) || "[]");
    if (!Array.isArray(guardado)) return new Set();
    const idsValidos = new Set(MODULOS.map((modulo) => modulo.id));
    return new Set(guardado.filter((id) => idsValidos.has(id)));
  } catch {
    return new Set();
  }
}

// Guarda el progreso sin impedir que la página siga funcionando si falla.
function guardarProgreso() {
  try {
    localStorage.setItem(CLAVE_PROGRESO, JSON.stringify([...modulosRepasados]));
    return true;
  } catch {
    return false;
  }
}

// Añade una sección de lista o explica amablemente que aún no tiene datos.
function renderizarLista(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return '<p class="dato-pendiente">Aún no se ha agregado información a esta sección.</p>';
  }
  const disponibles = items.filter((item) => String(item ?? "").trim());
  if (disponibles.length === 0) {
    return '<p class="dato-pendiente">Aún no se ha agregado información a esta sección.</p>';
  }
  return `<ul>${disponibles.map((item) => `<li>${renderizarTextoConEnlaces(item)}</li>`).join("")}</ul>`;
}

// Muestra recursos y evidencias como enlaces o imágenes con texto alternativo.
function renderizarEnlaces(items, esEvidencia) {
  if (!Array.isArray(items) || items.length === 0) {
    return '<p class="dato-pendiente">Aún no se han agregado elementos a esta sección.</p>';
  }

  return `<ul>${items.map((item) => {
    const nombre = String(item?.nombre ?? "").trim() || "POR COMPLETAR";
    const enlace = enlaceSeguro(item?.enlace);
    const imagen = enlaceSeguro(item?.imagen);
    const textoAlternativo = String(item?.alt ?? "").trim();
    let contenido = escaparHTML(nombre);

    if (enlace) {
      contenido = `<a href="${escaparHTML(enlace)}" target="_blank" rel="noopener noreferrer">${contenido}</a>`;
    }

    if (esEvidencia && imagen) {
      if (textoAlternativo && normalizar(textoAlternativo) !== "por completar") {
        contenido += `<br><img src="${escaparHTML(imagen)}" alt="${escaparHTML(textoAlternativo)}">`;
      } else {
        contenido += '<span class="dato-pendiente"> — imagen omitida: agrega un texto alternativo descriptivo.</span>';
      }
    } else if (!enlace) {
      contenido += '<span class="dato-pendiente"> — enlace por completar.</span>';
    }

    return `<li>${contenido}</li>`;
  }).join("")}</ul>`;
}

// Construye las indicaciones del docente cuando el módulo las tiene.
function renderizarIndicaciones(indicaciones, docente) {
  if (!indicaciones) return "";
  const entregas = (indicaciones.entregas || []).map((entrega) => `
    <h4>${escaparHTML(entrega.titulo)}</h4>
    ${renderizarLista(entrega.actividades)}
  `).join("");
  return `
    <section aria-labelledby="titulo-indicaciones">
      <h3 id="titulo-indicaciones">Indicaciones del docente · ${escaparHTML(docente)}</h3>
      ${indicaciones.evaluacion ? `<p><strong>Evaluación:</strong> ${escaparHTML(indicaciones.evaluacion)}</p>` : ""}
      ${entregas}
    </section>`;
}

// Dibuja las tarjetas recorriendo los datos de data/modulos.js.
function renderizarModulos() {
  const termino = normalizar(buscador.value.trim());
  const docenteElegido = filtroDocente.value;
  const tecnologiaElegida = normalizar(filtroTecnologia.value);
  const visibles = MODULOS.filter((modulo) => {
    const campos = [
      modulo.nombre,
      modulo.resumen,
      ...obtenerDocentes(modulo),
      ...(modulo.programas || []),
      ...(modulo.herramientas || [])
    ];
    const coincideBusqueda = !termino || normalizar(campos.join(" ")).includes(termino);
    const coincideDocente = !docenteElegido || obtenerDocentes(modulo).includes(docenteElegido);
    const tecnologiasModulo = [...(modulo.programas || []), ...(modulo.herramientas || [])];
    const coincideTecnologia = !tecnologiaElegida || tecnologiasModulo.some((valor) =>
      normalizar(valor).trim() === tecnologiaElegida
    );
    return coincideBusqueda && coincideDocente && coincideTecnologia;
  });

  document.getElementById("contador").textContent =
    `Mostrando ${visibles.length} de ${MODULOS.length} módulos`;

  if (visibles.length === 0) {
    lista.innerHTML = '<div class="sin-resultados"><strong>No encontramos módulos con esa búsqueda.</strong><br>Prueba con otras palabras o cambia el filtro de docente.</div>';
    return;
  }

  lista.innerHTML = visibles.map((modulo) => {
    const repasado = modulosRepasados.has(modulo.id);
    const numero = String(MODULOS.indexOf(modulo) + 1).padStart(2, "0");
    const resumen = normalizar(modulo.resumen) === "por completar"
      ? "Aún no se ha agregado un resumen para este módulo."
      : escaparHTML(modulo.resumen);
    return `
      <article class="tarjeta">
        <div class="tarjeta-cabecera">
          <span class="numero" aria-hidden="true">${numero}</span>
          ${repasado ? '<span class="estado-repasado">Repasado ✓</span>' : ""}
        </div>
        <h3>${escaparHTML(modulo.nombre)}</h3>
        <p class="docente">Docentes: ${escaparHTML(obtenerDocentes(modulo).join(", ") || "POR COMPLETAR")}</p>
        <p class="resumen-corto">${resumen}</p>
        <button class="boton" type="button" data-modulo="${escaparHTML(modulo.id)}" aria-haspopup="dialog" aria-controls="dialogo-ficha">
          Ver ficha <span aria-hidden="true">→</span>
        </button>
      </article>`;
  }).join("");
}

// Comprueba que las tres preguntas tienen contenido real y una respuesta válida.
function quizCompleto(quiz) {
  if (!quiz || !Array.isArray(quiz.preguntas) || quiz.preguntas.length !== 3) return false;
  return quiz.preguntas.every((pregunta) => {
    const textoValido = (texto) => {
      const valor = String(texto ?? "").trim();
      return valor && normalizar(valor) !== "por completar";
    };
    return textoValido(pregunta.pregunta)
      && Array.isArray(pregunta.opciones)
      && pregunta.opciones.length >= 2
      && pregunta.opciones.every(textoValido)
      && Number.isInteger(pregunta.indiceCorrecta)
      && pregunta.indiceCorrecta >= 0
      && pregunta.indiceCorrecta < pregunta.opciones.length
      && textoValido(pregunta.explicacion);
  });
}

// Muestra el aviso pendiente o la pregunta actual del quiz del módulo.
function renderizarQuiz(modulo) {
  const panel = document.getElementById("panel-quiz");
  const contenido = document.getElementById("contenido-quiz");
  const anuncio = document.getElementById("anuncio-quiz");
  if (!quizCompleto(modulo.quiz)) {
    const esEjemplo = modulo.quiz?.esEjemplo === true;
    contenido.innerHTML = `
      <p class="quiz-aviso">
        ${esEjemplo ? "Este quiz está marcado como ejemplo de estructura." : "Este quiz aún está pendiente."}
        Completa las tres preguntas, opciones, respuesta correcta y explicación para poder responderlo.
      </p>`;
    anuncio.textContent = esEjemplo ? "Quiz de ejemplo pendiente de completar." : "Quiz pendiente de completar.";
    return;
  }

  if (!estadoQuiz || estadoQuiz.moduloId !== modulo.id) {
    estadoQuiz = { moduloId: modulo.id, indice: 0, aciertos: 0, respuesta: null };
  }

  if (estadoQuiz.terminado) {
    renderizarResultadoQuiz(modulo, contenido);
    return;
  }

  const pregunta = modulo.quiz.preguntas[estadoQuiz.indice];
  const opciones = pregunta.opciones.map((opcion, indice) => {
    const respondida = estadoQuiz.respuesta !== null;
    const esCorrecta = indice === pregunta.indiceCorrecta;
    const clase = respondida && esCorrecta ? " opcion-correcta"
      : respondida && indice === estadoQuiz.respuesta ? " opcion-incorrecta"
        : "";
    const estado = respondida && esCorrecta ? " — respuesta correcta"
      : respondida && indice === estadoQuiz.respuesta ? " — respuesta seleccionada, incorrecta"
        : "";
    return `
      <button class="opcion-quiz${clase}" type="button" data-quiz-opcion="${indice}" ${respondida ? "disabled" : ""}>
        ${escaparHTML(opcion)}${estado ? `<span class="solo-lectores">${estado}</span>` : ""}
      </button>`;
  }).join("");

  const retroalimentacion = estadoQuiz.respuesta === null
    ? ""
    : `<div class="quiz-retroalimentacion">
        <p><strong>${estadoQuiz.respuesta === pregunta.indiceCorrecta ? "¡Correcto!" : "Respuesta incorrecta."}</strong></p>
        <p>${escaparHTML(pregunta.explicacion)}</p>
      </div>`;
  const accion = estadoQuiz.respuesta === null
    ? ""
    : `<button class="boton" type="button" data-quiz-siguiente>
        ${estadoQuiz.indice === 2 ? "Ver resultado" : "Siguiente pregunta"}
      </button>`;

  contenido.innerHTML = `
    <p class="quiz-progreso">Pregunta ${estadoQuiz.indice + 1} de 3</p>
    <h4 id="pregunta-actual">${escaparHTML(pregunta.pregunta)}</h4>
    <div class="opciones-quiz" role="group" aria-labelledby="pregunta-actual">${opciones}</div>
    ${retroalimentacion}
    ${accion}`;
  anuncio.textContent = estadoQuiz.respuesta === null
    ? `Pregunta ${estadoQuiz.indice + 1} de 3.`
    : `${estadoQuiz.respuesta === pregunta.indiceCorrecta ? "¡Correcto!" : "Respuesta incorrecta."} ${pregunta.explicacion}`;
  if (estadoQuiz.respuesta !== null) {
    contenido.querySelector("[data-quiz-siguiente]").focus();
  } else {
    contenido.querySelector("[data-quiz-opcion]").focus();
  }
}

// Guarda el puntaje final y marca el módulo solo al lograr tres respuestas correctas.
function renderizarResultadoQuiz(modulo, contenido) {
  const puntaje = estadoQuiz.aciertos;
  let mensajeGuardado = "";
  if (puntaje === 3 && !modulosRepasados.has(modulo.id)) {
    modulosRepasados.add(modulo.id);
    const guardado = guardarProgreso();
    actualizarProgreso();
    renderizarModulos();
    if (!guardado) {
      mensajeGuardado = '<p class="quiz-aviso" role="status">El resultado se conservó durante esta sesión, pero el navegador no permitió guardar el progreso.</p>';
    }
  }

  contenido.innerHTML = `
    <div class="quiz-resultado">
      <h4>Resultado: ${puntaje} de 3</h4>
      <p>${puntaje === 3 ? "¡Excelente! El módulo quedó marcado como repasado." : "Puedes volver a intentarlo cuando quieras."}</p>
    </div>
    ${mensajeGuardado}
    <button class="boton" type="button" data-quiz-reintentar>Intentar de nuevo</button>`;
  document.getElementById("anuncio-quiz").textContent =
    `Resultado: ${puntaje} de 3. ${puntaje === 3 ? "El módulo quedó marcado como repasado." : "Puedes volver a intentarlo."}`;
  contenido.querySelector("[data-quiz-reintentar]").focus();
}

// Actualiza el contenido de la ficha sin romper si algún campo está vacío.
function renderizarFicha(modulo) {
  const resumen = String(modulo.resumen ?? "").trim();
  const docentes = obtenerDocentes(modulo);
  const textoDocentes = docentes.join(", ") || "POR COMPLETAR";
  contenidoFicha.innerHTML = `
    <div class="ficha-cabecera">
      <div>
        <span class="etiqueta">Docentes: ${escaparHTML(textoDocentes)}</span>
        <h2 id="ficha-titulo">${escaparHTML(modulo.nombre)}</h2>
      </div>
      <button class="cerrar" type="button" aria-label="Cerrar ficha">×</button>
    </div>
    <div class="ficha-contenido">
      <h3>Resumen</h3>
      ${!resumen || normalizar(resumen) === "por completar"
        ? '<p class="dato-pendiente">Aún no se ha agregado un resumen para este módulo.</p>'
        : `<p>${escaparHTML(resumen)}</p>`}
      <h3>Lo aprendido</h3>
      ${renderizarLista(modulo.aprendido)}
      <h3>Instrumentos</h3>
      ${renderizarLista(modulo.instrumentos)}
      <h3>Programas</h3>
      ${renderizarLista(modulo.programas)}
      <h3>Herramientas</h3>
      ${renderizarLista(modulo.herramientas)}
      <h3>Recursos</h3>
      ${renderizarEnlaces(modulo.recursos, false)}
      <h3>Evidencias</h3>
      ${renderizarEnlaces(modulo.evidencias, true)}
      ${renderizarIndicaciones(modulo.indicaciones, textoDocentes)}
      <section class="quiz-seccion" aria-labelledby="titulo-quiz">
        <h3 id="titulo-quiz">Quiz del módulo</h3>
        ${modulo.quiz?.esEjemplo === true ? '<p class="quiz-ejemplo">Quiz de ejemplo · completar con tus preguntas.</p>' : ""}
        <button class="boton boton-secundario" type="button" data-quiz-iniciar aria-controls="panel-quiz" aria-expanded="false">
          Abrir quiz
        </button>
        <div class="panel-quiz" id="panel-quiz" hidden>
          <p class="solo-lectores" id="anuncio-quiz" role="status" aria-live="polite"></p>
          <div id="contenido-quiz"></div>
        </div>
      </section>
      <div class="ficha-acciones">
        <button class="boton" type="button" data-marcar="${escaparHTML(modulo.id)}">
          ${modulosRepasados.has(modulo.id) ? "Quitar marca de repasado" : "Marcar como repasado"}
        </button>
      </div>
    </div>`;
}

// Abre la ficha y enfoca el botón visible para cerrar.
function abrirFicha(id) {
  const modulo = MODULOS.find((elemento) => elemento.id === id);
  if (!modulo) return;
  moduloQueAbrioFicha = id;
  renderizarFicha(modulo);
  dialogo.showModal();
  contenidoFicha.querySelector(".cerrar").focus();
}

// Actualiza la barra y el porcentaje total de módulos repasados.
function actualizarProgreso() {
  const total = MODULOS.length;
  const repasados = MODULOS.filter((modulo) => modulosRepasados.has(modulo.id)).length;
  const porcentaje = total ? Math.round((repasados / total) * 100) : 0;
  document.getElementById("resumen-progreso").textContent = `${repasados} de ${total} módulos repasados`;
  document.getElementById("porcentaje-progreso").textContent = `${porcentaje} %`;
  document.getElementById("barra-progreso").style.width = `${porcentaje}%`;
  document.getElementById("pista-progreso").setAttribute("aria-valuenow", String(porcentaje));
  document.getElementById("mensaje-progreso").textContent = porcentaje === 100
    ? "¡Lo lograste! Repasaste todos los módulos. 🎉"
    : "Cada ficha repasada cuenta. ¡Empecemos!";
}

// Aplica y, cuando se solicita, recuerda el tema elegido.
function aplicarTema(tema, guardar) {
  const esOscuro = tema === "oscuro";
  document.documentElement.dataset.theme = esOscuro ? "dark" : "light";
  document.getElementById("icono-tema").textContent = esOscuro ? "☀" : "☾";
  document.getElementById("boton-tema").setAttribute(
    "aria-label",
    esOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
  );
  if (guardar) {
    try {
      localStorage.setItem(CLAVE_TEMA, tema);
    } catch {
      // La selección del tema se mantiene hasta cerrar la página si el almacenamiento falla.
    }
  }
}

// Respeta la preferencia guardada o la del sistema operativo.
function iniciarTema() {
  let guardado = null;
  try {
    guardado = localStorage.getItem(CLAVE_TEMA);
  } catch {
    // Se usará la preferencia del sistema cuando el almacenamiento no esté disponible.
  }
  const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (guardado === "claro" || guardado === "oscuro") {
    aplicarTema(guardado, false);
  } else if (sistemaOscuro) {
    aplicarTema("oscuro", false);
  }
}

// Crea una opción por cada docente asignado en los datos.
function iniciarFiltroDocente() {
  const docentes = [...new Set(MODULOS.flatMap(obtenerDocentes).filter((docente) =>
    normalizar(docente) !== "por completar"
  ))].sort((a, b) => a.localeCompare(b, "es"));

  for (const docente of docentes) {
    const opcion = document.createElement("option");
    opcion.value = docente;
    opcion.textContent = docente;
    filtroDocente.append(opcion);
  }
}

// Forma las opciones del filtro con tecnologías y programas reales de los datos.
function iniciarFiltroTecnologia() {
  const opciones = new Map();
  for (const modulo of MODULOS) {
    for (const valor of [...(modulo.programas || []), ...(modulo.herramientas || [])]) {
      const nombre = String(valor ?? "").trim();
      const clave = normalizar(nombre);
      if (nombre && clave !== "por completar" && !opciones.has(clave)) {
        opciones.set(clave, nombre);
      }
    }
  }

  if (opciones.size === 0) {
    const opcionPendiente = document.createElement("option");
    opcionPendiente.textContent = "Aún no hay opciones completadas";
    opcionPendiente.disabled = true;
    filtroTecnologia.append(opcionPendiente);
    filtroTecnologia.disabled = true;
    return;
  }

  for (const [clave, nombre] of [...opciones.entries()].sort((a, b) => a[1].localeCompare(b[1], "es"))) {
    const opcion = document.createElement("option");
    opcion.value = clave;
    opcion.textContent = nombre;
    filtroTecnologia.append(opcion);
  }
}

// Inicializa la página una vez que los archivos deferidos se han cargado.
iniciarFiltroDocente();
iniciarFiltroTecnologia();
iniciarTema();
renderizarModulos();
actualizarProgreso();

buscador.addEventListener("input", renderizarModulos);
filtroDocente.addEventListener("change", renderizarModulos);
filtroTecnologia.addEventListener("change", renderizarModulos);
botonLimpiarFiltros.addEventListener("click", () => {
  buscador.value = "";
  filtroDocente.value = "";
  filtroTecnologia.value = "";
  renderizarModulos();
  buscador.focus();
});

lista.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button[data-modulo]");
  if (boton) abrirFicha(boton.dataset.modulo);
});

contenidoFicha.addEventListener("click", (evento) => {
  if (evento.target.closest(".cerrar")) {
    dialogo.close();
    return;
  }

  const botonMarcar = evento.target.closest("button[data-marcar]");
  if (botonMarcar) {
    const id = botonMarcar.dataset.marcar;
    if (modulosRepasados.has(id)) {
      modulosRepasados.delete(id);
    } else {
      modulosRepasados.add(id);
    }

    const guardado = guardarProgreso();
    actualizarProgreso();
    renderizarModulos();
    const modulo = MODULOS.find((elemento) => elemento.id === id);
    if (modulo) renderizarFicha(modulo);
    if (!guardado) {
      document.getElementById("mensaje-progreso").textContent =
        "El progreso cambió en esta sesión, pero el navegador no permitió guardarlo.";
    }
    contenidoFicha.querySelector(".cerrar").focus();
    return;
  }

  const botonAbrirQuiz = evento.target.closest("[data-quiz-iniciar]");
  if (botonAbrirQuiz) {
    const modulo = MODULOS.find((elemento) => elemento.id === moduloQueAbrioFicha);
    if (!modulo) return;
    const panel = document.getElementById("panel-quiz");
    const seAbrira = panel.hidden;
    panel.hidden = !seAbrira;
    botonAbrirQuiz.setAttribute("aria-expanded", String(seAbrira));
    botonAbrirQuiz.textContent = seAbrira ? "Cerrar quiz" : "Abrir quiz";
    if (seAbrira) {
      estadoQuiz = null;
      renderizarQuiz(modulo);
    }
    return;
  }

  const opcionQuiz = evento.target.closest("[data-quiz-opcion]");
  if (opcionQuiz && estadoQuiz && estadoQuiz.respuesta === null) {
    const modulo = MODULOS.find((elemento) => elemento.id === estadoQuiz.moduloId);
    const respuesta = Number(opcionQuiz.dataset.quizOpcion);
    const pregunta = modulo?.quiz?.preguntas[estadoQuiz.indice];
    if (!pregunta || !Number.isInteger(respuesta) || respuesta < 0 || respuesta >= pregunta.opciones.length) return;
    estadoQuiz.respuesta = respuesta;
    if (respuesta === pregunta.indiceCorrecta) estadoQuiz.aciertos += 1;
    renderizarQuiz(modulo);
    return;
  }

  if (evento.target.closest("[data-quiz-siguiente]") && estadoQuiz) {
    const modulo = MODULOS.find((elemento) => elemento.id === estadoQuiz.moduloId);
    if (!modulo) return;
    if (estadoQuiz.indice === 2) {
      estadoQuiz.terminado = true;
      renderizarQuiz(modulo);
    } else {
      estadoQuiz.indice += 1;
      estadoQuiz.respuesta = null;
      renderizarQuiz(modulo);
    }
    return;
  }

  if (evento.target.closest("[data-quiz-reintentar]") && estadoQuiz) {
    const modulo = MODULOS.find((elemento) => elemento.id === estadoQuiz.moduloId);
    if (!modulo) return;
    estadoQuiz = { moduloId: modulo.id, indice: 0, aciertos: 0, respuesta: null };
    renderizarQuiz(modulo);
  }
});

// Cierra al pulsar el fondo y permite que Escape cierre el diálogo nativo.
dialogo.addEventListener("click", (evento) => {
  if (evento.target === dialogo) dialogo.close();
});

// Cierra el diálogo con Escape de forma explícita y compatible con teclado.
dialogo.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    evento.preventDefault();
    dialogo.close();
  }
});

// Devuelve el foco a la tarjeta que abrió la ficha al cerrarla.
dialogo.addEventListener("close", () => {
  const botonOrigen = [...lista.querySelectorAll("button[data-modulo]")]
    .find((boton) => boton.dataset.modulo === moduloQueAbrioFicha);
  (botonOrigen || document.getElementById("buscador")).focus();
  moduloQueAbrioFicha = null;
});

document.getElementById("boton-tema").addEventListener("click", () => {
  const temaAplicado = document.documentElement.dataset.theme;
  const temaActual = temaAplicado === "dark"
    ? "oscuro"
    : temaAplicado === "light"
      ? "claro"
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
  aplicarTema(temaActual === "oscuro" ? "claro" : "oscuro", true);
});
