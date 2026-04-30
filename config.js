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

// Nombre del centro / evento (aparece en cabeceras y PDF)
window.NOMBRE_EVENTO = "Graduación 2026 · IES Aldebarán";

// Email del usuario administrador. Solo este usuario podrá entrar
// al panel de admin. Tiene que coincidir con el email puesto en las
// reglas de Firestore (función esAdmin).
window.ADMIN_EMAIL = "admin@graduacion.es";

// =============================================================
//  Datos del evento (aparecen en el PDF de las entradas)
// =============================================================
//  Cuando el centro te confirme fecha y hora, edita estos valores.
//  Mientras estén en "Por confirmar" se imprimen en la entrada con
//  un estilo "pendiente" para que se vea claro que aún falta.
window.FECHA_EVENTO = "Por confirmar";   // ej: "Sábado 27 de junio de 2026"
window.HORA_EVENTO  = "Por confirmar";   // ej: "19:30 h"
window.LUGAR_EVENTO = "Salón de actos del centro";

// Ruta del logo del centro (relativa al HTML).
// Si dejas el placeholder o el archivo no existe, se dibuja un
// recuadro con las siglas del centro en su lugar.
window.LOGO_URL    = "logo.png";
window.SIGLAS_IES  = "IES";   // siglas que se ven si no hay logo
