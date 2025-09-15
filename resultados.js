// script.js

// Resultados de los GPs que ya se corrieron
const posiciones = {
  "Australia": [
    { pos: 1, nombre: "Lando Norris", equipo: "McLaren", puntos: 25 },
    { pos: 2, nombre: "Max Verstappen", equipo: "Red Bull Racing", puntos: 18 },
    { pos: 3, nombre: "George Russell", equipo: "Mercedes", puntos: 15 },
    { pos: 4, nombre: "Kimi Antonelli", equipo: "Mercedes", puntos: 12 },
    { pos: 5, nombre: "Alexander Albon", equipo: "Williams", puntos: 10 },
    { pos: 6, nombre: "Lance Stroll", equipo: "Aston Martin", puntos: 8 },
    { pos: 7, nombre: "Nico Hülkenberg", equipo: "Sauber", puntos: 6 },
    { pos: 8, nombre: "Charles Leclerc", equipo: "Ferrari", puntos: 4 },
    { pos: 9, nombre: "Oscar Piastri", equipo: "McLaren", puntos: 2 },
    { pos: 10, nombre: "Lewis Hamilton", equipo: "Ferrari", puntos: 1 }
  ],
  "Bahrein": null,
  "Japón": null,
  "Baréin": null,
  "Arabia Saudita": null,
  "Estados Unidos - Miami": null,
  // Agrega más GPs según quieras
};

let gpSeleccionado = null;

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const gpCells = document.querySelectorAll(".gp-cell");

  gpCells.forEach(cell => {
    cell.addEventListener("click", () => {
      // Resetear selección anterior
      if (gpSeleccionado) gpSeleccionado.classList.remove("selected");

      // Marcar el GP clickeado
      gpSeleccionado = cell;
      cell.classList.add("selected");

      // Obtener nombre del GP
      const texto = cell.textContent.trim();
      // Tomamos hasta el guion o el primer "-" para identificar
      const gpName = texto.split("-")[0].replace(/\d+\./, "").trim();

      // Mostrar resultados en consola
      if (posiciones[gpName]) {
        console.log(`Resultados del GP de ${gpName}:`);
        posiciones[gpName].forEach(piloto => {
          console.log(`#${piloto.pos} - ${piloto.nombre} (${piloto.equipo}) - ${piloto.puntos} pts`);
        });
      } else {
        console.log("GP aún no corrido.");
      }
    });
  });
});
