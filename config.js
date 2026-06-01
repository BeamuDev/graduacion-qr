// =============================================================
//  CONFIGURACIÓN DE FIREBASE
// =============================================================
//  Sustituye estos valores por los de TU proyecto Firebase.
//  Los obtienes en: Consola Firebase → Configuración del proyecto
//                   → Tus apps → "</> Web" → Configuración del SDK.
// =============================================================

window.firebaseConfig = {
  apiKey: "AIzaSyDrUDUiPZDYjmPvDoRxxgY_UKlxuFzQNe4",
  authDomain: "graduacioniesaldebaran.firebaseapp.com",
  projectId: "graduacioniesaldebaran",
  storageBucket: "graduacioniesaldebaran.firebasestorage.app",
  messagingSenderId: "155962590647",
  appId: "1:155962590647:web:4a8691c6a5ea0bd8711432",
  measurementId: "G-XJZJ0BELCL"
};

// Título que aparece en la cabecera de la web (admin, scan, index).
window.NOMBRE_HERRAMIENTA = "Generador de Entradas QR";

// Nombre del evento (se usa para el nombre del archivo PDF descargado).
// Los textos que SALEN dentro del PDF se editan desde el panel admin.
window.NOMBRE_EVENTO = "Graduación 2026 · IES Aldebarán";

// Emails con permisos de administración. Estos usuarios pueden entrar
// al panel admin, crear/borrar entradas y editar la configuración.
// Tienen que coincidir con los emails listados en firestore.rules
// (función esAdmin). Para añadir más, simplemente amplía el array
// aquí Y en las reglas.
window.ADMIN_EMAILS = [
  "admin@graduacion.es",
  "dptoextra@gmail.com"
];
// Mantenemos ADMIN_EMAIL por compatibilidad (apunta al primero).
window.ADMIN_EMAIL = window.ADMIN_EMAILS[0];

// =============================================================
//  TEXTOS QUE APARECEN EN EL PDF DE LAS ENTRADAS
// =============================================================
//  Edita aquí lo que ponga cada entrada impresa. No hay que tocar
//  el HTML. Usa **dobles asteriscos** para marcar partes en NEGRITA
//  dentro del texto de invitación.
// =============================================================

// Logos institucionales que aparecen en el PDF.
//  - LOGO_CLM_URL: escudo de Castilla-La Mancha → arriba a la IZQUIERDA
//  - LOGO_IES_URL: logo del centro              → arriba a la DERECHA
// Si alguno falta o falla al cargar, se cae con elegancia (placeholder o solo texto).
window.LOGO_CLM_URL = "logo-clm.webp";
window.LOGO_IES_URL = "logo.png";
window.LOGO_URL     = window.LOGO_IES_URL;  // compatibilidad antigua
window.SIGLAS_IES   = "IES";                // se dibuja si el logo falla

// Cabecera arriba a la derecha (dos líneas)
window.HEADER_CONSEJERIA = "Consejería de Educación, Cultura y Deportes";
window.HEADER_CENTRO     = "I.E.S. Aldebarán";

// Título grande centrado
window.TITULO_PDF = "ACTO DE GRADUACIÓN 2026";

// Texto de la invitación (justificado, en cursiva).
// Marca con **...** las partes que quieras en negrita-cursiva.
window.TEXTO_INVITACION =
  "El **Claustro de Profesores del Centro** y los alumnos de " +
  "**2º de Bachillerato y del CFGS en Administración de Sistemas Informáticos en Red** " +
  "tienen el placer de invitarle al acto de Graduación, que tendrá lugar en la " +
  "**Casa de la Cultura del Ayuntamiento de Fuensalida** el " +
  "**viernes 15 de mayo de 2026, a las 19:00 horas**. " +
  "Agradecemos de antemano su asistencia a este acto tan especial para nuestra comunidad educativa.";

// Texto rotado en la matriz lateral izquierda
window.STUB_TEXTO =
  "Graduación de SEGUNDO DE BACHILLERATO y CFGS en ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED";

// Etiquetas del pie de la entrada
window.VALIDA_PARA = "(VÁLIDA PARA UNA PERSONA)";
window.CATEGORIA   = "AUTORIDADES";   // ej: AUTORIDADES, FAMILIAS, INVITADOS

// (Compatibilidad con versiones anteriores — no se usan en el PDF nuevo)
window.FECHA_EVENTO = "viernes 15 de mayo de 2026";
window.HORA_EVENTO  = "19:00 h";
window.LUGAR_EVENTO = "Casa de la Cultura, Fuensalida";
