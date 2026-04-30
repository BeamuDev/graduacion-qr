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
