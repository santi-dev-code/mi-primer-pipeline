// app.js - Nuestra aplicación minimalista

// Función principal: suma dos números
function sumar(a, b) {
  return a + b; // ✅ restaurado
}

// Mensaje de bienvenida
function saludo() {
  return "Hola Mundo";
}

// Exportamos las funciones para que el test pueda usarlas
module.exports = { sumar, saludo };