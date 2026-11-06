// Datos del HUB. Sustituye POR COMPLETAR solo con apuntes y evidencias reales.
// Crea una plantilla de tres preguntas sin inventar preguntas ni respuestas.
function crearQuizPendiente(esEjemplo = false) {
  const crearPregunta = () => ({
    pregunta: "POR COMPLETAR",
    opciones: ["POR COMPLETAR", "POR COMPLETAR", "POR COMPLETAR", "POR COMPLETAR"],
    indiceCorrecta: -1,
    explicacion: "POR COMPLETAR"
  });

  return {
    esEjemplo,
    preguntas: [crearPregunta(), crearPregunta(), crearPregunta()]
  };
}

window.MODULOS = [
  {
    id: "mantenimiento-sistema",
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: ["Arcides Canales", "Julio Portillo"],
    resumen: "El módulo aborda el diseño de una base de datos para un sistema, su implementación en SQL o Access, y la creación de una interfaz WebForm con operaciones CRUD y acceso mediante login. Incluye documentación del proceso y una presentación final del sistema.",
    aprendido: [
      "Diseñar una base de datos, definir sus tablas y representar su estructura mediante un diagrama relacional o sin relaciones.",
      "Crear y mantener datos usando tablas y al menos tres operaciones CRUD en una interfaz WebForm, con acceso mediante login.",
      "Documentar y explicar el proceso y funcionamiento del sistema mediante capturas de pantalla y una presentación en video."
    ],
    instrumentos: [
      "Diseño de la base de datos, tablas y diagrama en el cuaderno.",
      "Documento Word o Google Docs con portada, introducción y capturas del proceso.",
      "Video de exposición de 2 a 5 minutos sobre el funcionamiento del sistema.",
      "Requisito de entrega: código y base de datos en GitHub con README.md."
    ],
    programas: [
      "Microsoft Access (si se elige esta alternativa para crear las tablas).",
      "Herramienta SQL (nombre por completar).",
      "Microsoft Word o Google Docs."
    ],
    herramientas: [
      "SQL o Microsoft Access para crear las tablas.",
      "ASP.NET Web Forms para la interfaz.",
      "Operaciones CRUD (mínimo tres).",
      "Login para el acceso al sistema.",
      "GitHub y README.md para entregar el código y la base de datos."
    ],
    recursos: [
      { nombre: "Video docente sobre CRUD (enlace por completar)", enlace: "" },
      { nombre: "POR COMPLETAR", enlace: "" },
      { nombre: "POR COMPLETAR", enlace: "" }
    ],
    evidencias: [
      { nombre: "Diseño de base de datos, tablas y diagrama en cuaderno (foto o enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Documento con portada, introducción y capturas del proceso (enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Video final de exposición de 2 a 5 minutos (enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Repositorio GitHub con código, base de datos y README.md (enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Qué se pide diseñar en el cuaderno antes de crear las tablas del sistema?",
          opciones: [
            "La base de datos y un diagrama relacional o sin relaciones.",
            "Únicamente la pantalla de inicio de sesión.",
            "El video final de exposición.",
            "La portada del documento sin describir el sistema."
          ],
          indiceCorrecta: 0,
          explicacion: "Las indicaciones piden diseñar la base de datos y crear un diagrama de su estructura."
        },
        {
          pregunta: "¿Cuál es el mínimo de operaciones CRUD que debe contemplar la interfaz WebForm?",
          opciones: ["Una", "Dos", "Tres", "Cinco"],
          indiceCorrecta: 2,
          explicacion: "La interfaz gráfica en WebForm debe contemplar mínimo 3 CRUD para dar mantenimiento a la base de datos."
        },
        {
          pregunta: "¿Cuánto debe durar el video final que explica cómo funciona el sistema?",
          opciones: [
            "Entre 30 segundos y 1 minuto.",
            "Mínimo 2 minutos y máximo 5 minutos.",
            "Exactamente 10 minutos.",
            "No se indica una duración."
          ],
          indiceCorrecta: 1,
          explicacion: "La instrucción especifica un mínimo de 2 minutos y un máximo de 5 minutos."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Diseño de la base de datos",
          actividades: [
            "En el cuaderno, diseñar la base de datos del sistema y crear las tablas en SQL o Access, por comandos o de manera gráfica.",
            "Crear en el cuaderno un diagrama relacional o sin relaciones.",
            "En un documento Word o Google Docs, colocar capturas de la creación de la base de datos y las tablas en Access o SQL.",
            "Agregar al documento una portada y una introducción que explique el sistema."
          ]
        },
        {
          titulo: "Operaciones de mantenimiento",
          actividades: [
            "Diseñar una interfaz gráfica en WebForm que contemple mínimo 3 CRUD para realizar mantenimiento a la base de datos, basada en el CRUD del video docente.",
            "Enlazar el sistema con un login (investigación).",
            "Agregar al documento Word o Google Docs el proceso de creación del sistema."
          ]
        },
        {
          titulo: "Video final o exposición",
          actividades: [
            "Crear un video breve donde explique cómo funciona el sistema (mínimo 2 minutos y máximo 5 minutos)."
          ]
        },
        {
          titulo: "Requisitos obligatorios",
          actividades: [
            "No se recibe código generado por Inteligencia Artificial (25%).",
            "Entregar el código y la base de datos en GitHub con archivo README.md.",
            "El trabajo fuera de tiempo se recibe con base 7."
          ]
        }
      ]
    }
  },
  {
    id: "mantenimiento-microempresa-propuesta",
    nombre: "Puesta en marcha de la microempresa",
    docente: ["Julio Portillo"],
    resumen: "La propuesta presenta Auralix IT Solutions, una empresa de outsourcing enfocada en diseñar, implementar, mantener, proteger y optimizar bases de datos relacionales para otras organizaciones. Plantea objetivos de transformación digital y una proyección financiera estimada para El Salvador.",
    aprendido: [
      "Distinguir datos de información y explicar el uso de bases relacionales con tablas y llaves primarias y foráneas.",
      "Identificar técnicas propuestas para rendimiento, seguridad y continuidad, como normalización, índices, controles de acceso, cifrado y respaldos.",
      "Describir la estructura inicial, inversión, planes de servicio y punto de equilibrio estimados para Auralix IT Solutions."
    ],
    instrumentos: [
      "Propuesta de negocio y objetivos específicos para orientar el análisis del proyecto.",
      "Hipótesis de mejora de rendimiento y satisfacción del cliente, pendientes de validación con datos.",
      "Plan de negocios y proyección financiera del Anexo A."
    ],
    programas: [
      "MySQL (motor mencionado; selección de uso por confirmar).",
      "PostgreSQL (motor mencionado; selección de uso por confirmar).",
      "Microsoft SQL Server (motor mencionado; selección de uso por confirmar)."
    ],
    herramientas: [
      "Bases de datos relacionales y consultas SQL.",
      "Llaves primarias y foráneas, normalización e índices.",
      "Particionamiento de tablas y memoria caché.",
      "Autenticación, privilegio mínimo, cifrado y auditoría.",
      "Respaldos completos, incrementales y diferenciales."
    ],
    recursos: [
      { nombre: "Texto compartido: introducción, propósito, objetivos e hipótesis de Auralix IT Solutions (enlace al documento por completar)", enlace: "" },
      { nombre: "Texto compartido: marco teórico técnico y de negocio (enlace al documento por completar)", enlace: "" },
      { nombre: "Texto compartido: plan de negocios y viabilidad financiera, Anexo A (enlace al documento por completar)", enlace: "" }
    ],
    evidencias: [
      { nombre: "Documento final de la propuesta Auralix IT Solutions (archivo, enlace o captura por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿A qué se dedica principalmente Auralix IT Solutions según la propuesta?",
          opciones: [
            "A externalizar servicios para diseñar, implementar, mantener, asegurar y optimizar bases de datos relacionales.",
            "A vender únicamente equipos de cómputo a usuarios particulares.",
            "A ofrecer servicios de transporte y logística.",
            "A desarrollar videojuegos sin administrar información."
          ],
          indiceCorrecta: 0,
          explicacion: "La propuesta define Auralix como una empresa de outsourcing de servicios tecnológicos especializados en bases de datos relacionales."
        },
        {
          pregunta: "¿Qué motores de bases de datos relacionales menciona el marco técnico?",
          opciones: [
            "MySQL, PostgreSQL y Microsoft SQL Server.",
            "SQLite, Redis y MongoDB únicamente.",
            "Excel, Word y PowerPoint.",
            "PrestaShop, Bootstrap y Xamarin.Forms."
          ],
          indiceCorrecta: 0,
          explicacion: "El texto menciona MySQL, PostgreSQL y Microsoft SQL Server como motores relacionales."
        },
        {
          pregunta: "¿Cuál es la inversión inicial total estimada en el Anexo A?",
          opciones: ["$10,800.00", "$20,435.00", "$2,900.00", "$3,600.00"],
          indiceCorrecta: 1,
          explicacion: "La propuesta estima una inversión inicial total de $20,435.00."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Introducción y propósito general",
          actividades: [
            "La propuesta plantea Auralix IT Solutions, una empresa de outsourcing de servicios tecnológicos enfocada en diseñar, implementar, mantener, asegurar y optimizar bases de datos relacionales para terceros.",
            "Su propósito es impulsar la transformación digital de las empresas clientes, su productividad, competitividad y toma de decisiones basada en datos."
          ]
        },
        {
          titulo: "Objetivos e hipótesis",
          actividades: [
            "Objetivo general: impulsar la transformación digital empresarial mediante soluciones avanzadas de datos.",
            "Objetivos específicos: implementar análisis de datos para apoyar decisiones gerenciales; mejorar eficiencia y productividad con herramientas digitales; seleccionar y capacitar al personal necesario.",
            "Hipótesis propuesta: reestructurar bases de datos y optimizar consultas SQL reduciría el tiempo de respuesta en 30% y aumentaría la satisfacción del cliente en 20% durante seis meses. Son metas hipotéticas, no resultados verificados."
          ]
        },
        {
          titulo: "Marco teórico: datos, SQL y rendimiento",
          actividades: [
            "Diferenciar datos sin procesar de información estructurada y útil para la toma de decisiones; contrastar archivos físicos y hojas de cálculo con sistemas gestores de bases de datos.",
            "El marco técnico propone bases relacionales con MySQL, PostgreSQL o Microsoft SQL Server, organizadas en tablas, registros y campos relacionados mediante llaves primarias y foráneas.",
            "Técnicas teóricas de rendimiento descritas: índices, normalización, particionamiento de tablas y memoria caché."
          ]
        },
        {
          titulo: "Marco teórico: seguridad, continuidad y negocio",
          actividades: [
            "La propuesta enumera autenticación, privilegio mínimo, cifrado de datos en reposo y tránsito, auditoría y defensas contra inyección SQL y fuerza bruta.",
            "También plantea respaldos completos, incrementales y diferenciales, además de políticas de alta disponibilidad.",
            "El modelo de outsourcing se presenta como una forma de reducir costos fijos y acceder a especialistas; menciona protección de datos personales e ISO/IEC 27000."
          ]
        },
        {
          titulo: "Plan de negocios y viabilidad financiera · Anexo A",
          actividades: [
            "Mercado objetivo: El Salvador; cifras estimadas en dólares estadounidenses.",
            "Personal inicial propuesto: 6 integrantes (gerencia general, DBA senior, dos DBA junior/soporte, atención al cliente y contador externo); planilla mensual estimada de $2,900.00.",
            "Inversión inicial total estimada: $20,435.00, distribuida en mobiliario ($1,660.00), equipo y servidor ($5,700.00), licencias ($1,695.00), trámites legales ($580.00) y capital de trabajo de tres meses ($10,800.00).",
            "Planes mensuales propuestos: Básico $150, Intermedio $350 y Premium $650; gastos operativos fijos estimados de $3,600.00 al mes.",
            "La propuesta estima cerca de 12 clientes activos para el punto de equilibrio y recuperar la inversión durante el primer año. La viabilidad de esa estimación depende de la mezcla de planes y debe verificarse."
          ]
        }
      ]
    }
  },
  {
    id: "orientacion-estudiante-proceso",
    nombre: "Orientación al estudiante al proceso",
    docente: ["Javier Mineros"],
    resumen: "Simulación intensiva de desarrollo de software en la que equipos trabajan como una startup para resolver un problema del campus mediante una base de datos funcional en Microsoft Access. El sprint sigue la metodología de la Acción Completa en tres fases: informarse, planificar y decidir; ejecutar; y controlar y valorar. Incluye diseño MER, desarrollo y pruebas, presentación final y retrospectiva.",
    aprendido: [
      "Investigar un problema del campus, planificar el trabajo con un backlog y diseñar un Diagrama Entidad-Relación (MER).",
      "Construir en Microsoft Access una base de datos con tablas, relaciones y formularios, e importar datos de prueba falsos.",
      "Aplicar pruebas de calidad, corregir fallos, presentar una demostración y elaborar una retrospectiva de equipo."
    ],
    instrumentos: [
      "Documento de requisitos y Diagrama MER aprobado.",
      "Base de datos Microsoft Access funcional (v0.5) con datos de prueba.",
      "Pruebas de errores y correcciones de QA.",
      "Presentación final (Demo Day / Pitch de Venta) y ficha de retrospectiva tipo semáforo."
    ],
    programas: [
      "Microsoft Access (desarrollo de la base de datos).",
      "Trello o Notion (gestión del proyecto; herramientas recomendadas).",
      "DBDiagram.io (diseño del MER; herramienta recomendada).",
      "Mockaroo (generación de datos de prueba; herramienta recomendada).",
      "Gemini o ChatGPT (consultoría para SQL y dudas; apoyo recomendado).",
      "Gamma.app (apoyo para diapositivas; herramienta recomendada)."
    ],
    herramientas: [
      "Metodología de la Acción Completa y trabajo por fases del sprint.",
      "Backlog de tareas y organización del trabajo en equipo.",
      "Diagrama Entidad-Relación (MER).",
      "Microsoft Access: tablas, relaciones y formularios.",
      "Datos de prueba falsos; la propuesta recomienda generar 50 o más registros.",
      "Pruebas de QA, corrección de fallos, Demo Day y retrospectiva tipo semáforo."
    ],
    recursos: [
      { nombre: "Material o guía del sprint (enlace por completar)", enlace: "" },
      { nombre: "Recursos de Microsoft Access usados por el curso (enlace por completar)", enlace: "" },
      { nombre: "Material de apoyo para diseñar el MER y generar datos (enlace por completar)", enlace: "" }
    ],
    evidencias: [
      { nombre: "Documento PDF: portada, problema, solución y Diagrama MER (enlace por completar)", enlace: "", imagen: "", alt: "" },
      { nombre: "Base de datos Microsoft Access (.accdb) funcional (enlace por completar)", enlace: "", imagen: "", alt: "" },
      { nombre: "Ficha de retrospectiva tipo semáforo (enlace por completar)", enlace: "", imagen: "", alt: "" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Qué actividades forman parte de la Fase Alpha del sprint?",
          opciones: [
            "Investigar el problema, crear el backlog y diseñar el Diagrama MER.",
            "Crear formularios en Access e importar datos de prueba.",
            "Hacer QA, presentar el Demo Day y completar la retrospectiva.",
            "Entregar solo el archivo .accdb."
          ],
          indiceCorrecta: 0,
          explicacion: "Alpha corresponde a informarse, planificar y decidir; incluye investigación, backlog y diseño del MER."
        },
        {
          pregunta: "¿Cuál es el entregable indicado para el martes 10?",
          opciones: [
            "Una base de datos funcional v0.5 con datos de prueba cargados.",
            "El documento de requisitos y Diagrama MER aprobados.",
            "El Pitch de Venta y la retrospectiva.",
            "Únicamente una lista de opciones de proyecto."
          ],
          indiceCorrecta: 0,
          explicacion: "El cronograma asigna al martes 10 el desarrollo de software y la entrega de la base de datos funcional v0.5."
        },
        {
          pregunta: "¿Qué elementos se entregan en la carpeta digital final?",
          opciones: [
            "Un PDF con el problema, solución y MER; la base de datos Access funcional; y la ficha de retrospectiva.",
            "Solo el backlog y las diapositivas.",
            "Un archivo de texto sin base de datos ni retrospectiva.",
            "Únicamente capturas de las pruebas de QA."
          ],
          indiceCorrecta: 0,
          explicacion: "Los entregables finales indicados son el documento PDF, el archivo Access funcional y la ficha de retrospectiva."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Metodología de trabajo · Acción Completa",
          actividades: [
            "Fase Alpha (Informarse, Planificar y Decidir): investigar el problema seleccionado, usar IA como apoyo de consulta, crear el backlog de tareas y diseñar el Diagrama Entidad-Relación (MER).",
            "Fase Beta (Ejecutar): desarrollar en Microsoft Access las tablas, relaciones y formularios; importar datos de prueba falsos.",
            "Fase Gold (Controlar y Valorar): probar errores (QA), corregir fallos, realizar la presentación final (Demo Day) y completar la retrospectiva del equipo."
          ]
        },
        {
          titulo: "Cronograma e hitos · Sección 3° DS A",
          actividades: [
            "Viernes 06 (6 horas): setup y diseño. Entregable: documento de requisitos y Diagrama MER aprobado.",
            "Martes 10 (4 horas): desarrollo de software. Entregable: base de datos funcional v0.5 con datos de prueba cargados.",
            "Miércoles 11 (3 horas): control de calidad y lanzamiento. Entregables: Pitch de Venta y retrospectiva."
          ]
        },
        {
          titulo: "Opciones de proyecto · asignación por sorteo",
          actividades: [
            "Cada grupo participa en un sorteo para desarrollar uno de los sistemas: Cafetería Fast-Break (ventas e inventario perecedero); Control de Disciplina (reportes y deméritos); Préstamos de Laboratorio (inventario de equipos e historial de morosos); Horas Sociales (validación de 150 horas); Enfermería Medi-Data (historial médico y alergias); Uber Escolar (rutas, cupos y pagos); Objetos Perdidos (catálogo visual); o E-Sports League (torneos, equipos y puntajes).",
            "La asignación del proyecto depende del sorteo del grupo."
          ]
        },
        {
          titulo: "Herramientas recomendadas",
          actividades: [
            "Gestión del proyecto: Trello o Notion.",
            "Diseño de base de datos: DBDiagram.io o papel.",
            "Desarrollo: Microsoft Access.",
            "Datos de prueba: Mockaroo, con recomendación de 50 o más registros falsos.",
            "Consultoría y apoyo: Gemini o ChatGPT para SQL y dudas; Gamma.app para apoyar la creación de diapositivas."
          ]
        },
        {
          titulo: "Entregables finales y niveles de desempeño",
          actividades: [
            "Entregar en una carpeta digital: documento PDF con portada, problema, solución y Diagrama MER; archivo Access (.accdb) 100% funcional; ficha de retrospectiva tipo semáforo (lo bueno, lo malo y áreas de mejora).",
            "Junior Dev: proyecto básico con errores o interfaz confusa.",
            "Mid-Level Dev: base de datos funcional, relaciones correctas y buen trabajo en equipo.",
            "Senior Architect: solución innovadora, interfaz destacada, uso efectivo de IA y presentación profesional."
          ]
        }
      ]
    }
  },
  {
    id: "componentes-dispositivos-moviles",
    nombre: "Módulo 2: Desarrollo de componentes para dispositivos móviles",
    docente: ["Arcides Canales"],
    resumen: "El módulo reúne prácticas de .NET MAUI, ejercicios individuales y grupales de programación, CRUD con SQLite, MatchGame y una tienda de prueba en PrestaShop.",
    aprendido: [
      "Desarrollar aplicaciones .NET MAUI con controles de interfaz como Label, Button y Entry.",
      "Crear programas con entradas de datos, operaciones y resultados, además de juegos como MatchGame.",
      "Diseñar y probar aplicaciones móviles con CRUD, SQLite y proyectos colaborativos de lectoescritura."
    ],
    instrumentos: [
      "Preguntas verbales del docente.",
      "Rúbrica de evaluación en las actividades que la mencionan."
    ],
    programas: [
      "Visual Studio Community 2019",
      "Visual Studio Code",
      "PrestaShop",
      "Excel o AppSheet"
    ],
    herramientas: [
      ".NET MAUI",
      "Xamarin.Forms",
      "SQLite",
      "GitHub"
    ],
    recursos: [
      {
        nombre: "Video: servidor MPC con Excalidraw",
        enlace: "https://www.youtube.com/watch?v=w_bl-ON3R8Y&list=PLEpVR7CQcI9_LG-jBLRgUTDXNVPE4HEaT&index=7"
      },
      {
        nombre: "Video: Spec-driven development con OpenSpec",
        enlace: "https://www.youtube.com/watch?v=7wXyjt5MZw0&list=PLEpVR7CQcI9_LG-jBLRgUTDXNVPE4HEaT&index=13"
      },
      { nombre: "Documentación oficial de .NET MAUI", enlace: "https://learn.microsoft.com/dotnet/maui" }
    ],
    evidencias: [
      { nombre: "POR COMPLETAR", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Qué conceptos de POO aparecen en la Práctica 02?",
          opciones: [
            "Constructores, herencia y polimorfismo.",
            "Diseño responsivo, colores y tipografía.",
            "Cookies, sesiones y arreglos únicamente.",
            "Categorías, productos y descuentos."
          ],
          indiceCorrecta: 0,
          explicacion: "La práctica incluye casos sobre método constructor, herencia y polimorfismo."
        },
        {
          pregunta: "¿Qué se solicita en la actividad ASPX Validación?",
          opciones: [
            "Hacer al menos 3 códigos de la guía y subirlos a GitHub individualmente.",
            "Crear cinco tiendas en PrestaShop.",
            "Entregar solo un video sin código.",
            "Hacer todos los ejemplos de .NET MAUI en equipo."
          ],
          indiceCorrecta: 0,
          explicacion: "La indicación pide al menos tres códigos de la guía, subidos individualmente a GitHub."
        },
        {
          pregunta: "Según el análisis de Codedex, ¿qué trabajo se pide para cada ejercicio ASP?",
          opciones: [
            "Subirlo por consola a GitHub con al menos 2 commit y 2 push por ejercicio.",
            "Entregarlo únicamente impreso.",
            "Crear una base de datos en Access sin repositorio.",
            "Grabar un video de 2 a 5 minutos."
          ],
          indiceCorrecta: 0,
          explicacion: "Las indicaciones mencionan subir los ejercicios ASP a GitHub por consola y realizar mínimo 2 commit y 2 push por ejercicio."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Práctica 9: Net MAUI · Instrucciones individuales",
          actividades: [
            "Realice el ejemplo del video 04 - Xamarin.Forms Label Visual Studio Community 2019.",
            "Realizar el ejemplo del video 05 - Xamarin.Forms Button Visual Studio Community 2019.",
            "Realizar el ejemplo del video 06 - Xamarin.Forms Entry Visual Studio Community 2019."
          ]
        },
        {
          titulo: "Práctica 9: Net MAUI · Investigación complementaria",
          actividades: [
            "Realice un programa en .NET MAUI que solicite 4 números y luego invierta el orden de los números.",
            "Construya un programa que dados los números A y B, escriba el resultado de la expresión: (A+B)^2/2.",
            "Construya un programa que dada las 5 calificaciones de un alumno a lo largo del semestre, muestre el promedio de sus calificaciones.",
            "Construya un programa que permita obtener el cuadrado y el cubo de un número entero positivo.",
            "Construya un programa que dados la altura y la base de un rectángulo, calcule el perímetro y la superficie del mismo.",
            "Crear MatchGame."
          ]
        },
        {
          titulo: "Práctica 9: Net MAUI · Formato de la aplicación",
          actividades: [
            "Cada programa deberá contener una imagen que haga referencia al software (pertinencia).",
            "Cada programa deberá subirse a GitHub."
          ]
        },
        {
          titulo: "Práctica 9: Net MAUI · Instrucciones para equipo de trabajo",
          actividades: [
            "Diseñar y desarrollar en equipo una aplicación móvil funcional y atractiva usando .NET MAUI enfocada a lectoescritura (ejemplos: app de consejos de lectoescritura, app con contenido tipo resumen de un tema o app de lectoescritura para niños/as).",
            "Integrantes anteriores.",
            "Crear una app funcional desarrollada en .NET MAUI que utilice los componentes básicos.",
            "Incluir formación de palabras, reconocimiento de sílabas, asociación de imágenes con palabras, etc.",
            "Tener un diseño limpio y bien estructurado.",
            "Ser útil, creativa o divertida.",
            "Ejemplos: app con contenido tipo resumen de un tema, una obra o un libro; app de lectoescritura para niños/as; juego matemático simple (por ejemplo, \"Adivina el número\")."
          ]
        },
        {
          titulo: "Práctica 9: Net MAUI · Requisitos obligatorios",
          actividades: [
            "Debe incluirse una imagen visual relacionada al propósito de la app.",
            "El código debe estar correctamente subido a GitHub con README y licencias.",
            "Codificación en equipo, pruebas y correcciones.",
            "Cada equipo presenta su app y responde preguntas del grupo/profesor (docente selecciona quiénes presentan al público y estudiantes seleccionan quiénes presentan en festival de lectoescritura)."
          ]
        },
        {
          titulo: "Práctica 9: Net MAUI · Criterios de evaluación",
          actividades: [
            "App funcional (sin errores).",
            "Creatividad del problema resuelto.",
            "Diseño visual (color, orden, claridad).",
            "Interactividad con el usuario.",
            "Subir a GitHub.",
            "Explicación clara durante presentación."
          ]
        },
        {
          titulo: "MatchGame · Investigación complementaria usando IA",
          actividades: [
            "Agregar a la aplicación la funcionalidad de que las figuras sean aleatorias.",
            "Agregar a la aplicación la capacidad de tener un timer para que cuente el tiempo que tarda en resolver el juego.",
            "Agregar a la aplicación la capacidad de reiniciar una vez haya finalizado la partida.",
            "Comentar el programa con lo que hace cada línea de código y subir la aplicación a GitHub."
          ]
        },
        {
          titulo: "WordPress",
          actividades: [
            "Realiza de manera creativa el Capítulo 6, Capítulo final y Guía paso a paso."
          ]
        },
        {
          titulo: "Análisis de resultados · equipo y colaboradores GitHub",
          actividades: [
            "Cada participante deberá programar una aplicación, subirla a GitHub y luego enlazar las 6 aplicaciones por medio de un menú y colaboración en GitHub.",
            "Crear una aplicación en .NET MAUI que muestre los números pares del 0 al 100.",
            "Crear una aplicación en .NET MAUI que muestre una cuenta regresiva de 10 a 1.",
            "Crear una aplicación en .NET MAUI que muestre las tablas de multiplicar del 1 al 10.",
            "Crear una aplicación en .NET MAUI que determine el sueldo semanal de un trabajador con base a las horas que trabaja y el pago por hora que recibe.",
            "\"La langosta ahumada\" ofrece banquetes: el costo del platillo por persona es de $95.00; para más de 200 y hasta 300 personas, $85.00; para más de 300 personas, $75.00. Crear una aplicación en MAUI que determine el presupuesto para el evento.",
            "Crear una aplicación en .NET MAUI para determinar cuántos dólares puede adquirir una empresa importadora con equis cantidad de dinero mexicano."
          ]
        },
        {
          titulo: "SCRUM (Integrantes 5)",
          actividades: [
            "Llenar la plantilla SCRUM acorde a sus aplicaciones y roles.",
            "Nombre del proyecto: UNA ESTRELLA."
          ]
        },
        {
          titulo: "Práctica 11: Base de datos CRUD",
          actividades: [
            "Realizar el programa DataBinding del video adjunto (individual).",
            "Realizar el programa DemoIntroAsync del video adjunto (individual).",
            "Realizar la aplicación TodoSuCarnet con un CRUD en SQLite (individual) y ejercicio complementario.",
            "Práctica guiada (trabajo individual de explicación detallada)."
          ]
        },
        {
          titulo: "Puesta en marcha del negocio con PrestaShop",
          actividades: [
            "Paso previo: instalar y configurar PrestaShop en español, país El Salvador y moneda dólar.",
            "Elegir un tema para tu negocio (docente elige: Simons Simons, venta de equipo informático).",
            "Cambiar la plantilla predeterminada por otra nueva de prueba, adaptada al rubro.",
            "Agregar 5 categorías y 2 subcategorías por cada categoría.",
            "Agregar 5 productos a cada una de las categorías o subcategorías creadas.",
            "Crear al menos 4 pack de productos en dos categorías.",
            "Crear dos combinaciones de productos, según sea el caso.",
            "Crear un cupón de descuento para clientes frecuentes (enviando correo electrónico al cliente).",
            "Crear un descuento a los productos bajo una categoría o subcategoría.",
            "Crear un producto virtual descargable (un catálogo de productos gratis, en un documento PDF).",
            "Crear al menos 2 marcas.",
            "Configurar el carrusel para que muestre 5 de sus productos.",
            "Configurar el banner de su tienda de acuerdo a su rubro.",
            "Configurar el logo de su tienda.",
            "Realizar 10 compras de productos con un usuario registrado con su carnet.",
            "Realizar 10 compras de productos con un usuario registrado con un carnet de un compañero.",
            "Investigar cómo instalar un módulo de contabilidad en PrestaShop e instalar el módulo.",
            "Investigar e instalar PrestaShop en un hosting gratuito.",
            "Realizar en un documento de Excel o AppSheet la contabilidad de la empresa.",
            "Crear un documento en Word, con carátula formal y capturas de pantalla explicadas sobre lo solicitado en los ítems anteriores."
          ]
        },
        {
          titulo: "Práctica 12: CRUD Individual",
          actividades: [
            "Crear el CRUD de la guía adjunta Crud net maui.docx (Visual Studio y cuaderno).",
            "Crear el CRUD de la guía adjunta SumaCrud.docx y reparar o agregar lo que haga falta para que funcione (Visual Studio y cuaderno).",
            "Análisis de resultados: elegir un algoritmo de la lista Ejercicios.docx.",
            "Basándose en los CRUD e investigación propia (incluido Gemini), hacer un CRUD del algoritmo seleccionado de la lista (Visual Studio y cuaderno).",
            "Uso de IA: servidor MPC con Excalidraw: https://www.youtube.com/watch?v=w_bl-ON3R8Y&list=PLEpVR7CQcI9_LG-jBLRgUTDXNVPE4HEaT&index=7",
            "Uso de IA: Spec-driven development con OpenSpec: https://www.youtube.com/watch?v=7wXyjt5MZw0&list=PLEpVR7CQcI9_LG-jBLRgUTDXNVPE4HEaT&index=13",
            "Entregable: mostrar al docente los tres CRUD creados y funcionando en Visual Studio más su cuaderno.",
            "Enviar enlace de los tres repositorios en GitHub.",
            "Mostrar al docente los videos implementados."
          ]
        }
      ]
    }
  },
  {
    id: "aplicaciones-software",
    nombre: "Módulo 1: Desarrollo de aplicaciones de software para la solución de problemas",
    docente: ["Arcides Canales"],
    resumen: "El módulo reúne prácticas de programación orientada a objetos, desarrollo web con ASPX y ASP Razor, bases de datos y CRUD, uso de GitHub y ejercicios de aplicaciones con .NET MAUI.",
    aprendido: [
      "Aplicar conceptos de programación orientada a objetos, como constructores, herencia y polimorfismo.",
      "Construir aplicaciones web y formularios, y trabajar con bases de datos y operaciones CRUD.",
      "Usar Git y GitHub para gestionar y entregar proyectos, además de desarrollar ejercicios con .NET MAUI."
    ],
    instrumentos: [
      "Guías y prácticas de POO, Bootstrap, ASPX, bases de datos y .NET MAUI.",
      "Preguntas y evaluación verbal del docente.",
      "Rúbricas de evaluación en las actividades que las mencionan.",
      "Autoevaluación y preguntas para resolver en el cuaderno."
    ],
    programas: [
      "Visual Studio",
      "Visual Studio Code",
      "Microsoft Access",
      "PrestaShop",
      "Word, Excel o AppSheet"
    ],
    herramientas: [
      "Programación orientada a objetos (POO)",
      "Bootstrap",
      "ASPX / ASP WebForms y ASP Razor",
      "Windows Forms y SQL",
      ".NET MAUI y SQLite",
      "Git y GitHub"
    ],
    recursos: [
      {
        nombre: "Git y GitHub · Codedex",
        enlace: "https://www.codedex.io/git-github"
      },
      {
        nombre: "Tutorial oficial: crear la primera aplicación .NET MAUI",
        enlace: "https://dotnet.microsoft.com/es-es/learn/maui/first-app-tutorial/create"
      },
      {
        nombre: "Documentación de Microsoft: ContentPage en .NET MAUI",
        enlace: "https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/contentpage?view=net-maui-8.0"
      }
    ],
    evidencias: [
      { nombre: "POR COMPLETAR", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Qué debe hacer el programa complementario con los cuatro números ingresados?",
          opciones: [
            "Invertir el orden de los números.",
            "Sumarlos y mostrar solo el mayor.",
            "Convertirlos en texto sin cambiarlos.",
            "Multiplicarlos todos por cuatro."
          ],
          indiceCorrecta: 0,
          explicacion: "La consigna pide solicitar cuatro números y luego invertir su orden."
        },
        {
          pregunta: "¿Qué mejoras se solicitan para MatchGame?",
          opciones: [
            "Figuras aleatorias, un temporizador y opción de reiniciar al finalizar.",
            "Inicio de sesión, base de datos y exportación a PDF.",
            "Categorías, cupones y carrito de compras.",
            "Un menú de seis aplicaciones sin medir el tiempo."
          ],
          indiceCorrecta: 0,
          explicacion: "La investigación de MatchGame enumera figuras aleatorias, timer y reinicio al terminar la partida."
        },
        {
          pregunta: "¿Qué tecnología se solicita para el CRUD individual de TodoSuCarnet?",
          opciones: ["SQLite", "Microsoft Access exclusivamente", "PrestaShop", "Bootstrap"],
          indiceCorrecta: 0,
          explicacion: "La Práctica 11 pide realizar TodoSuCarnet con un CRUD en SQLite."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Práctica 1: POO Introducción a la POO (30%)",
          actividades: [
            "Indicaciones:",
            "Realizar la guía (Caso desarrollado 1).",
            "Subir el proyecto comprimido en .zip.",
            "Subir un documento con capturas de pantalla explicadas del proceso de creación del caso desarrollado 1.",
            "Resolver las preguntas en el cuaderno y subir fotografías de la solución."
          ]
        },
        {
          titulo: "Guía 1: Bootstrap (30%)",
          actividades: [
            "Hacer todos los ejercicios de la guía y entregarlos vía GitHub (enviar enlace del repositorio).",
            "Hacer la discusión de resultados de la página 29 y entregar vía GitHub (enviar enlace del repositorio)."
          ]
        },
        {
          titulo: "ASPX",
          actividades: [
            "Realizar todos (5 proyectos) los ASPX CODE de la guía (Label, TextBox, Button submit, Button Command, TableRow y TableCell).",
            "Entrega vía repositorio GitHub."
          ]
        },
        {
          titulo: "Práctica 02: POO Herencia y Polimorfismo (35%)",
          actividades: [
            "Producto a entregar en Classroom (Practica POO_2026):",
            "Caso desarrollado 4: Método constructor - Control de facturas de vendedores (subir a GitHub).",
            "Caso desarrollado 5: Herencia - Venta de productos al contado y crédito (subir a GitHub).",
            "Caso desarrollado 6: Polimorfismo (subir a GitHub).",
            "En el cuaderno contestar las preguntas de la página 26.",
            "Cada caso debe llevar su documentación en un documento de Word con capturas de pantalla de los pasos realizados en la práctica, comentando con interpretación propia cada paso."
          ]
        },
        {
          titulo: "ASPX Validación (30%)",
          actividades: [
            "Hacer al menos 3 de los códigos que aparecen en la guía (subir a GitHub individualmente)."
          ]
        },
        {
          titulo: "Guía Base de Datos (35%)",
          actividades: [
            "Hacer un texto paralelo de cada uno de los ejemplos de la guía Práctica POO.",
            "Hacer un texto paralelo de cada uno de los ejercicios de la guía de base de datos."
          ]
        },
        {
          titulo: "Práctica 3 \"A\": Acceso a datos Windows Form",
          actividades: [
            "Crear el ejemplo Películas en Windows Form y Access (11%).",
            "Crear el ejemplo Viajes vacacionales en Windows Form y Access (solo para los que se porten mal) (11%).",
            "Seleccionar un ejercicio individual del 1 al 31 y realizar un CRUD con Windows Form y Access (11%). Todo se entrega por medio de repositorio GitHub (No upload) y se calificará el proceso durante la clase."
          ]
        },
        {
          titulo: "GitHub: Aprendiendo la consola (11%)",
          actividades: [
            "Registrarse en el sitio https://www.codedex.io/git-github.",
            "Hacer los ejercicios del 1 al 6 de la página.",
            "Subir captura de pantalla de los ejercicios terminados."
          ]
        },
        {
          titulo: "Análisis de resultado Codedex",
          actividades: [
            "Aplicando lo aprendido en Codedex, realizar los ejercicios ASP (Cookies, Query string, Session variable, one-dimensional array) y subirlos a GitHub por medio de consola.",
            "Hacer mínimo 2 commit y 2 push por ejercicio.",
            "Subir capturas de pantalla del proceso en Word."
          ]
        },
        {
          titulo: "Práctica 04: Creación de base de datos y conexión",
          actividades: [
            "Instrucciones: leer y entender la guía guía-4.0.pdf y la guía Guia 04 aspx.docx; hacer cada uno de los ejercicios solicitados.",
            "Entregar en Classroom y de forma presencial al docente:",
            "Los 2 CRUD creados (subidos a GitHub por comandos o por botones \"No upload\").",
            "Los 4 ejercicios de las Figura 20-17, Figura 20-18, Figura 20-19 y Figura 20-20 (subidos a GitHub \"NO Upload\").",
            "El enlace de la página de Google Sites en la que explica los ejercicios con sus propias palabras (solo los ejercicios de la guía-4.0.pdf o Guia 04 aspx.docx).",
            "Los enlaces GitHub de los ejercicios de los videos.",
            "Evaluación: Primer CRUD (10%); Segundo CRUD (10%); Figura 20-17 (10%); Figura 20-18 (10%); Figura 20-19 (10%); Figura 20-20 (10%); página web de Google Sites (10%); comportamiento en clases (10%); desempeño \"Trabaja solo y ayuda a los demás\" (10%); crear ejercicios de video y subirlos a GitHub (10%)."
          ]
        },
        {
          titulo: "Práctica 05: Code First - ASP Razor",
          actividades: [
            "Realizar ejercicios CRUD ASPX (subidos a GitHub No upload).",
            "Realizar ejercicios guía-5.pdf (subidos a GitHub No upload).",
            "Realizar ejercicios net aplicaciones web 1.pdf (páginas 15, 40, 66, 90 y 107).",
            "Hacer el test de autoevaluación en el cuaderno.",
            "Realizar ejercicios prácticos en Visual Studio y subirlos a GitHub No upload.",
            "Uso de Inteligencia Artificial (prompt de ayuda): con el auge de la IA, se recomienda aplicar el prompt adjunto en cualquier IA de preferencia cuando haya dudas de la tarea.",
            "También se evalúa: comportamiento en clases y desempeño \"Trabaja solo y ayuda a los demás\".",
            "Importante: el trabajo se entrega al docente durante la clase para aplicar rúbrica. Después de vencida ya no se revisa la tarea.",
            "Si los ejercicios no tienen SUNIE o su nombre no se calificará.",
            "Cada ejercicio se entrega en Classroom mediante GITHUB NO UPLOAD.",
            "No se recibe código generado por IA (apoyarse de la IA para aprender, no para hacer cosas que no se entienden).",
            "El docente hará preguntas durante la entrega de los ejercicios; si no se contestan, el ejercicio quedará anulado.",
            "Asegurarse de entregar completo el ejercicio porque no se recibirá nuevamente rectificado (única entrega)."
          ]
        },
        {
          titulo: "Práctica 06: ASP WebForm y SQL",
          actividades: [
            "Realizar ejercicios del documento guia-6.0.pdf: guía 6 completa.",
            "Se recibirán entregas después de la fecha de entrega, máximo hasta el viernes 23 de mayo, pero con 3 puntos menos (Base 7).",
            "No se recibe código generado por IA (se anula trabajo si presenta código IA; la IA sirve solo para apoyarse).",
            "Todos los CRUD son manuales excepto el CRUD 1 que se permite gráfico.",
            "Instalar componente .NET MAUI para próxima guía.",
            "Todos los CRUD se suben a GitHub."
          ]
        },
        {
          titulo: "Práctica 7: Net MAUI · Instrucciones",
          actividades: [
            "Crear MyFirstMauiApp: https://dotnet.microsoft.com/es-es/learn/maui/first-app-tutorial/create",
            "Crear Ejercicio01SuCarnet: https://ior.ad/9VvJ",
            "Crear Ejercicio02SuCarnetContentPage: https://ior.ad/9VBG ; documentación ContentPage: https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/contentpage?view=net-maui-8.0",
            "Crear Ejercicio03SuCarnetNavegationPage: https://ior.ad/9VDy ; documentación ContentPage: https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/contentpage?view=net-maui-8.0",
            "Crear Ejercicio04SuCarnetBoxView: https://ior.ad/9VI3 ; documentación ContentPage: https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/contentpage?view=net-maui-8.0",
            "Crear Ejercicio05SuCarnetFlyout: https://ior.ad/9VId ; documentación ContentPage: https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/contentpage?view=net-maui-8.0",
            "Crear Ejercicio06VSSuCarnetNetMaui: https://ior.ad/9VIl ; extensión .NET MAUI para Visual Studio: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui",
            "Investigar en la documentación de Microsoft cómo crear una TabbedPage y hacer un ejercicio en .NET MAUI."
          ]
        },
        {
          titulo: "Práctica 7: Net MAUI · Análisis de resultados",
          actividades: [
            "Crear en .NET MAUI una aplicación que muestre información personal como nombre, dirección, teléfono y correo electrónico de una persona.",
            "Crear en .NET MAUI una aplicación con varias páginas que se puedan navegar usando una barra de navegación y botones.",
            "Crear una aplicación .NET MAUI que utilice un ContentPage personalizado para mostrar información de un producto.",
            "Crear una aplicación .NET MAUI que utilice BoxView para mostrar diferentes colores y la bandera de El Salvador.",
            "Crear una aplicación .NET MAUI que utilice Flyout para mostrar en el Flyout un poema y en el Detail el nombre del poema y autor.",
            "En Visual Studio Code, implementar un programa con una imagen de perfil, un label con el nombre completo y dos Entry (investigar sobre Entry en la documentación de Microsoft).",
            "Entregar cada ejemplo y ejercicio al docente en orden de solicitud y el enlace GitHub del repositorio en Classroom.",
            "Escribir en el cuaderno los pasos lógicos para crear cada ejemplo y ejercicio (subir fotos). Opcionalmente, enviar un audio o video en lugar de los pasos escritos.",
            "Subir el script SuCarnet.sql y el texto paralelo en formato Word.",
            "Evaluación: el docente preguntará verbalmente sobre cada ejercicio. Cada ejercicio tiene una ponderación de 0.5 (0.5 * 13 ejercicios = 6.5), representa el 70% de la nota; pasos lógicos escritos (10%); resolver autoevaluación del tema (20%).",
            "En caso de entrega tarde justificada se restarán 3 puntos a la nota global.",
            "Cada ejercicio debe contener su nombre o NIE (no se reciben ejercicios sin nombre)."
          ]
        },
        {
          titulo: "Práctica 8: Net MAUI · Programas a realizar",
          actividades: [
            "AbsoluteLayout: https://drive.google.com/file/d/1rDNHI25uhgVnnxXc4YYCzhpDmyPqHjOm/view?usp=drive_link",
            "FlexLayout: https://drive.google.com/file/d/1EmlEI9gWf7Oy3U7Xjh5N9VefIWdqnVNQ/view?usp=drive_link",
            "StackLayout (a, b, c, d): https://drive.google.com/file/d/1jwzT2dGzLqbKz0k59VtGxf_NP7p5JUDz/view?usp=drive_link",
            "Grid: https://ior.ad/9XOv",
            "Controles: https://drive.google.com/file/d/1HSGuSZ-hV_KYQv5Tf77DfTK2OKh6rtiW/view?usp=drive_link"
          ]
        },
        {
          titulo: "Práctica 8: Net MAUI · Análisis de resultados y entregables",
          actividades: [
            "Modificar el AbsoluteLayout para alinear verticalmente 3 botones, un label y una imagen.",
            "Modificar el Grid para que muestre 4 imágenes y un label.",
            "Crear el diseño de una calculadora con un Grid: https://dev.to/vhugogarcia/net-maui-grid-layout-a-powerful-way-to-arrange-your-ui-elements-3pd3",
            "Entregar cada ejemplo y ejercicio con su enlace de GitHub.",
            "Opcional 1: escribir en el cuaderno los pasos lógicos para crear cada ejemplo y ejercicio (subir fotos).",
            "Opcional 2: cuadro comparativo (AbsoluteLayout, StackLayout, Grid).",
            "Evaluación: el docente calificará y preguntará verbalmente sobre cada ejercicio. Cada ejercicio tiene una ponderación según rúbrica; si hace el ejercicio gana su nota, si no lo hace pierde su nota."
          ]
        },
        {
          titulo: "Parte humana (guía 1.pdf)",
          actividades: [
            "Formar equipos de 5 personas aleatorio (durante la clase).",
            "En equipos seguir las instrucciones del docente para ganar su nota.",
            "Mi Libreta del Tiempo Digital: https://docs.google.com/document/d/1pSHDOxMUHQo1o-Q-slRvNOfamGKq6JU95CBC5zRKMgo/edit?tab=t.0#heading=h.2ectdlhsn45n"
          ]
        },
      ]
    }
  },
  {
    id: "administracion-bases-datos",
    nombre: "Módulo 3.3: Administración de Bases de Datos",
    docente: ["Javier Mineros"],
    resumen: "El módulo presenta el diseño relacional de una base de datos escolar en SQL Server, respaldos y restauración, automatización, almacenamiento en la nube, diccionario de datos, monitoreo y seguridad. También incluye ejercicios de consultas SQL con filtros, ordenamiento, agregaciones y operaciones sobre datos.",
    aprendido: [
      "Describir un modelo escolar relacional con tablas de Estudiantes, Especialidades, Profesores, Materias y Calificaciones conectadas mediante llaves primarias y foráneas.",
      "Explicar estrategias de respaldo, verificación y recuperación, junto con la automatización y el resguardo externo de copias.",
      "Consultar y documentar metadatos de SQL Server, monitorear rendimiento y configurar permisos y alertas."
    ],
    instrumentos: [
      "Presentación SQLServer_Admin_BD_Escuela.pptx (archivo o enlace por completar).",
      "Guía práctica de SQL: consultas y selección (el material indica valor de 5% del Módulo 3.2; confirmar si corresponde a este Módulo 3.3).",
      "Script de consultas SQL comentado e identificado con el nombre completo del estudiante.",
      "Documento Word con capturas de cada consulta y sus resultados."
    ],
    programas: [
      "Microsoft SQL Server."
    ],
    herramientas: [
      "Modelo relacional, llaves primarias (PK) y foráneas (FK).",
      "Respaldos Full, Differential y Transaction Log; estrategia 3-2-1 mencionada en el material.",
      "SQL Server Agent y tareas programadas (Jobs).",
      "RESTORE VERIFYONLY, RTO y RPO para validación y recuperación.",
      "sp_addextendedproperty, sys.tables y sys.columns para el diccionario de datos.",
      "sys.dm_exec_requests y sys.dm_db_index_physical_stats para monitoreo.",
      "REBUILD, REORGANIZE, LOGINS, USERS, GRANT/REVOKE y Database Mail."
    ],
    recursos: [
      {
        nombre: "Backup and restore of SQL Server databases",
        enlace: "https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore"
      },
      {
        nombre: "Restore and recovery overview (SQL Server)",
        enlace: "https://learn.microsoft.com/sql/relational-databases/backup-restore/restore-and-recovery-overview-sql-server"
      },
      {
        nombre: "SQL Server Agent",
        enlace: "https://learn.microsoft.com/sql/ssms/agent"
      }
    ],
    evidencias: [
      { nombre: "Script SQL comentado con nombre completo (archivo o enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Documento Word con capturas de consultas y resultados (archivo o enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Cuáles son las cinco tablas principales del modelo escolar descrito?",
          opciones: [
            "Estudiantes, Especialidades, Profesores, Materias y Calificaciones.",
            "Clientes, Productos, Ventas, Facturas y Proveedores.",
            "Usuarios, Roles, Sesiones, Archivos y Mensajes.",
            "Cursos, Aulas, Edificios, Horarios y Pagos."
          ],
          indiceCorrecta: 0,
          explicacion: "El modelo descrito enumera Estudiantes, Especialidades, Profesores, Materias/Asignaturas y Calificaciones."
        },
        {
          pregunta: "¿Qué tipo de respaldo permite restaurar a un punto exacto en el tiempo según el material?",
          opciones: [
            "Transaction Log (log de transacciones).",
            "Solo el respaldo diferencial.",
            "Una exportación del diccionario de datos.",
            "Una reorganización de índices."
          ],
          indiceCorrecta: 0,
          explicacion: "El material indica que el respaldo Transaction Log permite recuperación Point-in-Time."
        },
        {
          pregunta: "¿Qué comando se menciona para comprobar la validez de un respaldo?",
          opciones: [
            "RESTORE VERIFYONLY",
            "GRANT VERIFY",
            "SELECT BACKUP",
            "REBUILD DATABASE"
          ],
          indiceCorrecta: 0,
          explicacion: "La indicación menciona RESTORE VERIFYONLY y pruebas en entornos de prueba para validar respaldos."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Estructura y modelo general · BD Escuela",
          actividades: [
            "El modelo relacional escolar descrito tiene cinco tablas principales vinculadas mediante llaves primarias (PK) y foráneas (FK).",
            "Estudiantes: datos personales como ID, nombre, edad y fecha de nacimiento.",
            "Especialidades: áreas técnicas o académicas.",
            "Profesores: relación del docente con su respectiva especialidad.",
            "Materias o Asignaturas: registros de asignaturas.",
            "Calificaciones: desempeño de los alumnos en actividades e integradoras.",
            "Material de referencia indicado: SQLServer_Admin_BD_Escuela.pptx (archivo por compartir)."
          ]
        },
        {
          titulo: "Estrategia y tipos de respaldos",
          actividades: [
            "El material propone una estrategia 3-2-1 y describe respaldos Full, Differential y Transaction Log.",
            "Full (completo): copia toda la base de datos y el registro de transacciones; el material lo señala como base obligatoria para una restauración.",
            "Differential (diferencial): copia los cambios realizados desde el último respaldo completo.",
            "Transaction Log (log de transacciones): permite respaldar transacciones para restaurar el sistema a un punto exacto en el tiempo (Point-in-Time)."
          ]
        },
        {
          titulo: "Automatización y almacenamiento en la nube",
          actividades: [
            "SQL Server Agent permite programar tareas (Jobs) para respaldos recurrentes; el material da como ejemplo Full semanal y Diferencial diario.",
            "El material menciona sincronización con Google Drive mediante carpetas locales o rclone, OneDrive y Azure Blob Storage mediante URLs y credenciales seguras (SAS Tokens)."
          ]
        },
        {
          titulo: "Verificación, restauración y diccionario de datos",
          actividades: [
            "Comprobar periódicamente los respaldos con RESTORE VERIFYONLY y pruebas en entornos de prueba.",
            "Considerar RTO (Tiempo Objetivo de Recuperación) y RPO (Punto Objetivo de Recuperación) en la planificación ante desastres.",
            "El diccionario de datos documenta tablas, tipos, restricciones y llaves; el material menciona sp_addextendedproperty y las vistas sys.tables y sys.columns, con posible exportación a Excel o HTML."
          ]
        },
        {
          titulo: "Monitoreo, mantenimiento y seguridad",
          actividades: [
            "Usar sys.dm_exec_requests y sys.dm_db_index_physical_stats para revisar solicitudes, consultas lentas y fragmentación de índices.",
            "El material menciona REBUILD o REORGANIZE para mantenimiento de índices.",
            "Configurar accesos mediante LOGINS, USERS y permisos GRANT/REVOKE.",
            "Database Mail puede notificar al DBA sobre errores críticos o fallas en tareas programadas."
          ]
        },
        {
          titulo: "Guía práctica de SQL · consultas y selección",
          actividades: [
            "Valor indicado: 5% del Módulo 3.2 (confirmar con el docente si ese número corresponde a este Módulo 3.3).",
            "Comentar qué hace cada línea de código SQL; incluir el nombre completo en el script y los archivos.",
            "Documentar en Word con capturas de pantalla de cada código y su resultado.",
            "Subir el archivo de Query (.sql) y el documento Word a la plataforma correspondiente.",
            "Ejercicio 1, Selección total: mostrar toda la tabla Clientes.",
            "Ejercicio 2, Top 2: mostrar los primeros dos registros.",
            "Ejercicio 3, Filtro por salario: mostrar registros con salarios menores o iguales a 350.",
            "Ejercicio 4, Ordenamiento: mostrar nombre, apellidos y salario de empleados, ordenados alfabéticamente por nombre.",
            "Ejercicio 5, Búsqueda por letra: mostrar nombres de Clientes que terminan con una letra específica, por ejemplo con LIKE '%a'.",
            "Ejercicio 6, Suma de salarios: usar una función de agregación para mostrar la suma de salarios.",
            "Ejercicio 7, Conteo: contar cuántos empleados aparecen en la tabla Clientes.",
            "Ejercicio 8, Alias y operaciones: calcular Salario - Descuento y mostrar el resultado con el alias Salario Neto.",
            "Ejercicio 9, Valor máximo: mostrar el monto de préstamo más alto.",
            "Ejercicio 10, Valor mínimo: mostrar el monto de préstamo más bajo.",
            "Entregable: capturas de las consultas ejecutadas, script comentado con nombre y documento Word con evidencias."
          ]
        }
      ]
    }
  },
  {
    id: "documentacion-sistemas",
    nombre: "Módulo 3.4: Elaboración de documentación de Sistemas informáticos",
    docente: ["Javier Mineros"],
    resumen: "El módulo cubre las fases de análisis y diseño de sistemas, prácticas de desarrollo frontend y backend, implementación con control de versiones y documentación técnica, y las etapas de ejecución, control y evaluación de un proyecto ERP.",
    aprendido: [
      "Analizar requerimientos y modelar sistemas con actores, casos de uso UML, diagramas de clases y secuencia, modelos ER y relacionales, wireframes y diccionario de datos.",
      "Aplicar fundamentos web de frontend con HTML, CSS y JavaScript, y backend con PHP y MySQL usando validación, PDO, sentencias preparadas y sesiones.",
      "Organizar la implementación y documentación del sistema con Git/GitHub, manuales, bitácoras, sprints, controles de calidad y defensa del proyecto."
    ],
    instrumentos: [
      "Diagramas de casos de uso, clases, secuencia y modelos de datos.",
      "Prototipos visuales (wireframes) y diccionario de datos.",
      "Diez ejercicios prácticos de desarrollo web: cinco de frontend y cinco de backend.",
      "Manual Técnico, Manual de Sistema, borrador del Manual de Usuario y BITACORA.md.",
      "Control de calidad, gestión de riesgos, autoevaluación y defensa oral individual."
    ],
    programas: [
      "Visual Studio Code (VS Code).",
      "Live Server.",
      "Figma.",
      "MySQL.",
      "Inno Setup."
    ],
    herramientas: [
      "UML, Modelo Entidad-Relación y modelo relacional.",
      "HTML5 semántico, CSS Flexbox y Grid, JavaScript puro y Fetch API.",
      "PHP, PDO, MySQL y sentencias preparadas.",
      "Sesiones, password_hash, MVC y arquitectura por capas.",
      "Git y GitHub; sprints, transacciones atómicas y control de inventario."
    ],
    recursos: [
      {
        nombre: "Fetch API (MDN)",
        enlace: "https://developer.mozilla.org/es-ES/docs/Web/API/Fetch_API"
      },
      {
        nombre: "PDO: Prepared statements and stored procedures (PHP)",
        enlace: "https://www.php.net/manual/uk/pdo.prepared-statements.php"
      },
      {
        nombre: "Pro Git (en español)",
        enlace: "https://git-scm.com/book/es/v2"
      }
    ],
    evidencias: [
      {
        nombre: "App RAYO (actividad remedial del profesor Javier)",
        enlace: "",
        imagen: "img/rayo-app.png",
        alt: "Captura de la app RAYO en un celular Android: pantalla de inicio con la pregunta «¿Cuántos toques en 10 segundos?» y el botón Empezar"
      },
      { nombre: "Diagramas, wireframes y diccionario de datos (archivo o captura por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Código fuente, manuales y bitácoras del proyecto (enlace o captura por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Instalador y evidencia de defensa del ERP (enlace o captura por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Qué elementos se incluyen en las fases unificadas de análisis y diseño?",
          opciones: [
            "Requerimientos, actores, diagramas UML, modelos de datos, wireframes y diccionario de datos.",
            "Solo el instalador ejecutable y la defensa oral.",
            "Únicamente consultas SQL y respaldos.",
            "Categorías y productos de una tienda."
          ],
          indiceCorrecta: 0,
          explicacion: "La descripción de las fases 02 y 03 incluye análisis de requerimientos, modelado UML y de datos, prototipos y diccionario inicial."
        },
        {
          pregunta: "¿Cómo se distribuyen los diez ejercicios prácticos de desarrollo web?",
          opciones: [
            "Cinco de frontend y cinco de backend.",
            "Diez ejercicios de frontend solamente.",
            "Cinco de bases de datos y cinco de diseño gráfico.",
            "Ocho de backend y dos de documentación."
          ],
          indiceCorrecta: 0,
          explicacion: "El plan indica diez ejercicios: cinco de frontend y cinco de backend."
        },
        {
          pregunta: "¿Cómo se organiza la etapa Ejecutar del proyecto ERP?",
          opciones: [
            "En ocho sprints semanales, desde autenticación y catálogos hasta transacciones, inventarios y reportes.",
            "En una única entrega de documentación sin construir módulos.",
            "En cinco ejercicios de frontend sin backend.",
            "Solo mediante una defensa oral antes de programar."
          ],
          indiceCorrecta: 0,
          explicacion: "La etapa Ejecutar plantea ocho sprints semanales para construir progresivamente los módulos del ERP."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Fases 02 + 03 · Análisis y diseño del sistema",
          actividades: [
            "Unificar el análisis de requerimientos con el diseño técnico de la solución.",
            "Identificar actores y elaborar diagramas de casos de uso UML con descripciones detalladas de sus flujos.",
            "Diseñar la arquitectura general con diagramas de clases y secuencia, Modelo Entidad-Relación (ER) y modelo relacional.",
            "Crear wireframes con herramientas de diseño como Figma y preparar el diccionario de datos inicial."
          ]
        },
        {
          titulo: "Semanas 9–10 · Desarrollo web y prácticas técnicas",
          actividades: [
            "Realizar diez ejercicios prácticos: cinco de frontend y cinco de backend, utilizando VS Code y sin frameworks que oculten los fundamentos.",
            "Frontend, Semana 1: configurar entorno local con Live Server; estructurar con HTML5 semántico; diseñar con CSS Flexbox y Grid; manipular el DOM con JavaScript puro e integrar APIs externas mediante Fetch API.",
            "Backend, Semana 2: procesar formularios en PHP con validación y sanitización; crear CRUD con MySQL mediante PDO y sentencias preparadas; implementar autenticación con sesiones y contraseñas hasheadas con password_hash; organizar el código por capas (MVC) y completar un proyecto integrador."
          ]
        },
        {
          titulo: "Fase 04 · Desarrollo e implementación",
          actividades: [
            "Programar el sistema siguiendo los diseños previos y mantener el control de versiones en un repositorio GitHub.",
            "Entregar el código fuente funcional organizado dentro de src/.",
            "Mantener un historial constante, detallado y descriptivo de commits en Git.",
            "Redactar el Manual Técnico, Manual de Sistema y borrador inicial del Manual de Usuario.",
            "Actualizar, validar y sincronizar el diccionario de datos con la estructura implementada."
          ]
        },
        {
          titulo: "Etapas finales · Ejecutar, controlar y valorar el proyecto ERP",
          actividades: [
            "Ejecutar: construir progresivamente el ERP en ocho sprints semanales, desde autenticación/login y catálogos hasta transacciones atómicas, inventarios y reportes; empaquetar el software en un instalador .exe con herramientas como Inno Setup.",
            "Controlar: registrar el avance en bitácoras semanales BITACORA.md y aplicar controles de calidad de funcionalidad, seguridad y validaciones, junto con gestión de riesgos.",
            "Valorar: realizar defensa oral individual ante un tribunal, demostrar el sistema en vivo, presentar la exposición técnica, entregar la autoevaluación y participar en preguntas y respuestas (Q&A)."
          ]
        }
      ]
    }
  },
  {
    id: "conversacion-ingles-mantenimiento",
    nombre: "Módulo 3.6: Conversación en inglés sobre mantenimiento de sistemas informáticos",
    docente: ["Javier Mineros"],
    resumen: "El bloque de las semanas 6 y 7 prepara al equipo para presentar en inglés una solución de mantenimiento como si fuera una empresa de software que atiende a un negocio cliente. La calificación corresponde al 20 % del módulo y se distribuye entre una dramatización con demostración en vivo (10 %), el expediente técnico bilingüe (5 %) y la adaptación del sistema al inglés (5 %).",
    aprendido: [
      "Presentar y dramatizar en inglés una situación de atención y mantenimiento técnico, incluyendo una demostración y respuestas a preguntas del panel dentro del tiempo establecido.",
      "Integrar un expediente técnico de mantenimiento con métricas, riesgos, respaldos, pruebas, bitácoras y documentos de entrega en inglés, acompañado por una copia fiel en español.",
      "Adaptar la interfaz, mensajes, validaciones y documentación del sistema al inglés, y comprobar su estabilidad usando exclusivamente datos de prueba ficticios."
    ],
    instrumentos: [
      "Rúbrica A (100 puntos): dramatización en inglés (10 % del módulo); evalúa fluidez (30), contenido técnico y métricas antes/después (25), interpretación (20), demostración (10), participación equitativa (10) y tiempo y profesionalismo (5).",
      "Rúbrica B (100 puntos): documentos de mantenimiento en inglés (5 %); evalúa completitud (25), calidad idiomática (25), rigor de métricas (20), copia fiel en español (10), diseño e índice (10) y ética y protección de datos (10).",
      "Rúbrica C (100 puntos): sistema informático en inglés (5 %); evalúa interfaz (30), mensajes y validaciones (20), código y comentarios (20), README y changelogs (15), estabilidad (10) y datos de prueba ficticios (5).",
      "Ensayo técnico cronometrado, auditoría cruzada del expediente, auditoría de la interfaz y reflexión individual final."
    ],
    programas: [
      "Sistema desarrollado o mantenido por el equipo (nombre y tecnología por completar).",
      "Herramientas para preparar y presentar la exposición (por completar).",
      "Herramientas para redactar y organizar el expediente técnico (por completar)."
    ],
    herramientas: [
      "Inglés técnico para atención, explicación de soluciones y respuestas ante un panel.",
      "Expediente de mantenimiento: tickets, alcance, propuestas, órdenes de trabajo, matrices de riesgo, rollback, respaldos, bitácoras, reportes de pruebas, comparativos, actas, manuales y planes preventivos.",
      "Métricas reales antes y después del servicio; copia profesional en español del expediente.",
      "Interfaz, mensajes, validaciones, código, comentarios, README y changelogs en inglés.",
      "Datos de prueba realistas pero ficticios y respaldo disponible en USB y en la nube."
    ],
    recursos: [
      { nombre: "Kit de evaluación docente y rúbricas A, B y C (archivo o enlace por completar)", enlace: "" },
      { nombre: "Material de las semanas 3, 5, 6 y 7 (archivo o enlace por completar)", enlace: "" },
      { nombre: "Guías o listas de cotejo para ensayos y auditorías (archivo o enlace por completar)", enlace: "" }
    ],
    evidencias: [
      { nombre: "Expediente técnico de mantenimiento en inglés y copia en español (enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Sistema en inglés y evidencia de demostración en vivo (enlace o captura por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Presentación dramatizada y reflexión individual (enlace o archivo por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Cómo se distribuye el 20 % de la calificación final de este bloque?",
          opciones: [
            "10 % para la dramatización, 5 % para los documentos y 5 % para el sistema en inglés.",
            "5 % para la dramatización, 10 % para los documentos y 5 % para el sistema.",
            "20 % únicamente para la exposición oral.",
            "10 % para el sistema y 10 % para la documentación."
          ],
          indiceCorrecta: 0,
          explicacion: "El bloque se divide en dramatización (10 %), documentos de mantenimiento (5 %) y sistema informático en inglés (5 %)."
        },
        {
          pregunta: "¿Qué debe incluir el expediente técnico de mantenimiento?",
          opciones: [
            "Tickets, órdenes de trabajo, matrices de riesgo, respaldos, bitácoras, pruebas y documentos de entrega, entre otros.",
            "Solo una portada y una lista de integrantes.",
            "Únicamente el código fuente, sin reportes ni documentación.",
            "Datos personales y credenciales reales para demostrar el sistema."
          ],
          indiceCorrecta: 0,
          explicacion: "El expediente integra los documentos del proceso de mantenimiento, incluyendo riesgos, respaldos, fallas, pruebas y entrega."
        },
        {
          pregunta: "¿Qué se verifica durante la auditoría del sistema antes del Presentation Day?",
          opciones: [
            "Que las pantallas, mensajes, errores y validaciones estén en inglés, incluso al probar entradas en blanco.",
            "Que la aplicación muestre mensajes en español si ocurre un error.",
            "Que el sistema use información real de clientes.",
            "Que solo se revise la pantalla de inicio y no se prueben errores."
          ],
          indiceCorrecta: 0,
          explicacion: "La auditoría recorre las pantallas y provoca errores y validaciones en blanco para comprobar que no queden mensajes en español."
        }
      ]
    },
    indicaciones: {
      evaluacion: "Este bloque representa el 20 % del módulo: dramatización en inglés (10 %), documentos de mantenimiento en inglés (5 %) y sistema informático en inglés (5 %).",
      entregas: [
        {
          titulo: "Actividad 07 · Presentation Day y dramatización (10 %)",
          actividades: [
            "Presentar en vivo, el viernes 18 de septiembre, una simulación en la que el equipo actúa como una empresa de software que explica la solución de mantenimiento brindada a un negocio cliente.",
            "Limitar la presentación a 10 minutos: 30 segundos para presentar la empresa, 7.5 minutos para dramatizar las seis escenas clave, 1 minuto para demostrar el software y 1 minuto para responder preguntas del panel.",
            "La Rúbrica A suma 100 puntos: fluidez y naturalidad en inglés (30), contenido técnico con métricas reales antes y después (25), dramatización (20), demostración en vivo (10), participación equitativa (10) y tiempo y profesionalismo (5)."
          ]
        },
        {
          titulo: "Expediente de mantenimiento en inglés (5 %)",
          actividades: [
            "Presentar el expediente a auditoría preliminar el miércoles 16 de septiembre y consolidar la entrega final el viernes 18.",
            "Integrar los materiales generados durante las semanas 3 y 5: tickets de servicio, alcance, propuesta técnica y económica, órdenes de trabajo, matrices de riesgo, planes de reversión (rollback), registros de respaldo, bitácoras de fallas, reportes de pruebas, comparativos, actas de entrega, manuales de usuario y planes de mantenimiento preventivo.",
            "Incluir métricas técnicamente justificadas y una copia fiel en español que conserve los términos profesionales.",
            "La Rúbrica B suma 100 puntos: completitud (25), calidad idiomática sin términos en español ni traducciones literales automáticas (25), rigor de métricas (20), copia en español (10), diseño, índice y navegabilidad (10), y ética y protección de datos personales o credenciales reales (10)."
          ]
        },
        {
          titulo: "Sistema informático completamente en inglés (5 %)",
          actividades: [
            "Tener el sistema desarrollado o mantenido completamente adaptado al inglés y listo para auditoría el miércoles 16 de septiembre y demostración en vivo el viernes 18.",
            "Revisar menús, botones, etiquetas, títulos, mensajes, validaciones y alertas; comprobar también el código fuente, los comentarios, el README y los changelogs.",
            "Usar exclusivamente datos de prueba realistas pero ficticios y comprobar la estabilidad operativa durante la demostración.",
            "La Rúbrica C suma 100 puntos: interfaz (30), mensajes y validaciones (20), código y comentarios (20), README y changelogs (15), estabilidad (10) y datos ficticios (5)."
          ]
        },
        {
          titulo: "Miércoles 16 de septiembre · Dress Rehearsal & Audits",
          actividades: [
            "Bloque 1, ensayo general técnico (45 minutos): practicar en el aula real y cronometrar; verificar proyector, computadora, diapositivas y respaldos en USB y nube; no exceder 10 minutos.",
            "Bloque 2, auditoría de documentos (45 minutos): intercambiar expedientes entre equipos y aplicar listas de cotejo para encontrar errores, apartados faltantes o traducciones inadecuadas.",
            "Bloque 3, auditoría del sistema (45 minutos): recorrer las pantallas y probar errores y validaciones en blanco para detectar mensajes que sigan en español.",
            "La indicación señala que el martes 15 de septiembre es feriado nacional por el Día de la Independencia, por lo que la sesión del miércoles concentra la preparación previa."
          ]
        },
        {
          titulo: "Viernes 18 de septiembre · Presentation Day",
          actividades: [
            "Bloque 1 (45 minutos): montar la sala, sortear el orden de exposición, probar el sonido y recibir los certificados de preparación.",
            "Bloques 2, 3 y 4: realizar las exposiciones dramatizadas y demostraciones en vivo ante el panel y los compañeros.",
            "Bloque 5: compartir retroalimentación por equipo (un acierto, un punto de mejora y una duda abierta) y anunciar reconocimientos por fluidez, manejo técnico, recuperación de errores, sistema, documentación y dramatización.",
            "Bloque 6: cerrar el módulo, consolidar notas y redactar individualmente una reflexión sobre la utilidad del inglés técnico en el entorno laboral."
          ]
        }
      ]
    }
  },
  {
    id: "proyecto-innovador-software",
    nombre: "Módulo 3.8: Proyecto innovador de Desarrollo de Software",
    docente: ["Javier Mineros"],
    resumen: "El proyecto propone desarrollar HUB Educativo 3DS·A, un portal web estático, adaptable e interactivo para reunir y repasar los contenidos del año lectivo 2026 del 3.º Bachillerato Técnico Vocacional en Desarrollo de Software. La propuesta utiliza HTML5 semántico, CSS3 y JavaScript puro, organiza los módulos desde data/modulos.js e incluye búsqueda, filtros, progreso persistente, quizzes y modo claro/oscuro. También plantea control de versiones con Git y GitHub Pages, documentación del uso de IA y validación de calidad, accesibilidad y experiencia móvil.",
    aprendido: [
      "Diseñar una aplicación web educativa orientada a datos, separando la información de los módulos de la lógica que genera las fichas y otros componentes de la interfaz.",
      "Construir interacciones nativas con JavaScript, como búsqueda normalizada, filtros, quizzes y guardado de preferencias o progreso en localStorage.",
      "Aplicar prácticas de calidad y trabajo colaborativo: diseño responsive y accesible, pruebas y auditorías, control de versiones, documentación de prompts y defensa individual del código."
    ],
    instrumentos: [
      "Fichas técnicas de los módulos con resúmenes, docentes, aprendizajes, instrumentos, software, herramientas, recursos y evidencias.",
      "Pruebas funcionales del buscador, filtros, progreso, quizzes y modo claro/oscuro.",
      "Revisión cruzada del repositorio mediante GitHub Issues y control de cambios por versiones.",
      "Auditorías de accesibilidad y rendimiento, incluida la revisión propuesta con Lighthouse.",
      "Registro de prompts en README.md o PROMPTS.md y defensa individual en vivo del código y sus conceptos."
    ],
    programas: [
      "Visual Studio Code u otro editor de texto compatible (el editor específico queda por confirmar).",
      "Navegador web para ejecutar y probar el portal.",
      "Git y GitHub para control de versiones, revisiones y publicación.",
      "GitHub Pages como plataforma de publicación estática.",
      "Lighthouse para auditorías de calidad, según la propuesta."
    ],
    herramientas: [
      "HTML5 semántico, CSS3 adaptable y JavaScript ES6+ sin frameworks ni librerías externas.",
      "Archivo de datos data/modulos.js para organizar la información modular.",
      "Búsqueda en tiempo real con normalización de mayúsculas y acentos; filtros por docente y tecnología, según la propuesta.",
      "localStorage para conservar el progreso y las preferencias del usuario en el navegador.",
      "Diseño responsive móvil primero, accesibilidad por teclado, foco visible y contraste.",
      "Git, ramas o etiquetas de versión, GitHub Issues y GitHub Pages.",
      "Documentación de prompts y revisión individual de la comprensión del código."
    ],
    recursos: [
      {
        nombre: "Descripción general de Lighthouse",
        enlace: "https://developer.chrome.com/docs/lighthouse/overview?hl=es"
      },
      {
        nombre: "Window: localStorage (MDN)",
        enlace: "https://developer.mozilla.org/es/docs/Web/API/Window/localStorage"
      },
      {
        nombre: "Documentación de GitHub Pages",
        enlace: "https://docs.github.com/es/pages"
      }
    ],
    evidencias: [
      { nombre: "Repositorio del portal publicado en GitHub Pages (enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "README.md o PROMPTS.md con registro de prompts y explicación del proyecto (archivo o enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Resultados de pruebas funcionales, revisión de accesibilidad y auditoría Lighthouse (capturas o enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" },
      { nombre: "Evidencia de defensa individual del código (archivo o enlace por completar)", enlace: "", imagen: "", alt: "POR COMPLETAR" }
    ],
    quiz: {
      preguntas: [
        {
          pregunta: "¿Cuál es el propósito principal del HUB Educativo 3DS·A?",
          opciones: [
            "Recopilar, organizar, consultar y repasar los contenidos y aprendizajes del año lectivo 2026.",
            "Sustituir todas las clases por un sistema de calificación automática.",
            "Almacenar datos personales reales de toda la comunidad educativa.",
            "Ofrecer servicios comerciales de mantenimiento de bases de datos."
          ],
          indiceCorrecta: 0,
          explicacion: "El resumen ejecutivo presenta el portal como un espacio para reunir y repasar los contenidos, módulos y aprendizajes del año escolar."
        },
        {
          pregunta: "¿Qué ventaja propone la arquitectura orientada a datos del portal?",
          opciones: [
            "Permite modificar o ampliar los módulos actualizando los datos fuente, sin escribir cada tarjeta manualmente en el HTML.",
            "Obliga a duplicar el contenido de cada módulo en todas las páginas.",
            "Requiere utilizar un framework pesado para renderizar cualquier cambio.",
            "Impide agregar preguntas de autoevaluación."
          ],
          indiceCorrecta: 0,
          explicacion: "La propuesta explica que las fichas se generan dinámicamente desde estructuras de datos y pueden crecer al modificar los datos de origen."
        },
        {
          pregunta: "¿Cómo plantea el proyecto el uso responsable de la Inteligencia Artificial?",
          opciones: [
            "Como apoyo asistencial, registrando los prompts y demostrando comprensión individual del código.",
            "Como sustituto de la defensa y del aprendizaje individual.",
            "Sin registrar las instrucciones ni revisar el código generado.",
            "Para incluir credenciales y datos reales en el repositorio."
          ],
          indiceCorrecta: 0,
          explicacion: "La propuesta enfatiza registrar los prompts en README.md o PROMPTS.md y defender individualmente el código y sus conceptos."
        }
      ]
    },
    indicaciones: {
      entregas: [
        {
          titulo: "Resumen ejecutivo y objetivo general",
          actividades: [
            "Desarrollar HUB Educativo 3DS·A como un portal estático, dinámico e interactivo que reúna contenidos, módulos técnicos, herramientas y aprendizajes del año lectivo 2026 del 3.º Bachillerato Técnico Vocacional en Desarrollo de Software.",
            "Construirlo con HTML5 semántico, CSS3 adaptable y JavaScript ES6+ puro, sin frameworks ni librerías externas.",
            "Gestionar el código con Git y publicarlo en GitHub Pages para que pueda consultarse como plataforma educativa."
          ]
        },
        {
          titulo: "Justificación del carácter innovador",
          actividades: [
            "Convertir el repaso en un producto de software funcional y publicado, útil para la comunidad educativa, en lugar de limitarlo a un examen pasivo o una memoria escrita.",
            "Aplicar una arquitectura orientada a datos: las fichas se generan desde data/modulos.js y la aplicación puede ampliarse al actualizar esos datos.",
            "Usar la IA generativa como apoyo asistencial; registrar los prompts utilizados en README.md o PROMPTS.md y prepararse para explicar individualmente el código y los conceptos.",
            "Priorizar calidad de software y UX con diseño adaptable a móviles, navegación por teclado, lectores de pantalla, contraste adecuado, auditorías Lighthouse y revisión cruzada en GitHub."
          ]
        },
        {
          titulo: "Objetivos específicos",
          actividades: [
            "Sintetizar y documentar el mapa de módulos impartidos por los profesores Javier Mineros y Arcides Canales, incorporando a cada ficha la información técnica y las evidencias disponibles.",
            "Implementar búsqueda y filtrado en tiempo real, seguimiento del progreso guardado en localStorage y quizzes con retroalimentación inmediata y registro de puntuación.",
            "Aplicar flujos de trabajo con Git: versionar las etapas propuestas (v0.2, v0.5 y v1.0), atender observaciones técnicas mediante Issues y respetar los acuerdos de integración del equipo.",
            "Documentar la ingeniería de prompts y comprobar que cada integrante comprenda el código que presenta.",
            "Optimizar la experiencia móvil, accesibilidad por teclado, contraste y rendimiento mediante pruebas y auditorías."
          ]
        },
        {
          titulo: "Arquitectura, funcionalidades y publicación",
          actividades: [
            "Mantener los datos de módulos en data/modulos.js y generar las fichas mediante JavaScript, evitando escribir manualmente cada módulo en el HTML.",
            "La propuesta contempla búsqueda normalizada, filtros por docente y tecnología, persistencia mediante localStorage, quizzes interactivos y modo claro/oscuro.",
            "Organizar el trabajo con Git y GitHub, gestionar las observaciones con Issues y publicar la versión estática en GitHub Pages.",
            "Conservar en el repositorio documentación del proyecto y los prompts, y preparar una defensa individual que explique las decisiones y el funcionamiento del código."
          ]
        }
      ]
    }
  }
];
