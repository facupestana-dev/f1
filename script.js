
// Función para cargar resultados desde resultados.json
async function cargarResultados() {
    try {
        const response = await fetch('resultados.json');
        if (!response.ok) throw new Error('No se pudo cargar resultados.json');
        const resultadosPorGP = await response.json();
        inicializarCarrusel(resultadosPorGP);
    } catch (error) {
        console.error('Error al cargar los resultados:', error);
    }
}

// Función para mostrar los resultados en la página
// Carrusel de GPs
let gps = [];
let resultadosGlobal = {};
let gpActual = 0;

function mostrarCarruselGP() {
    const carrusel = document.getElementById('gp-carrusel');
    if (!carrusel || gps.length === 0) return;
    const gp = gps[gpActual];
    const resultados = resultadosGlobal[gp];
    let html = `<h3>${gp}</h3><table><tr><th>Posición</th><th>Piloto</th><th>Tiempo/Dif.</th><th>Equipo</th></tr>`;
    let tiempoBase = '';
    resultados.forEach((piloto, idx) => {
        let tiempo = '';
        if (idx === 0) {
            tiempo = '1:32:15.000'; // Simulado, puedes poner el real en el JSON
            tiempoBase = '1:32:15.000';
        } else {
            // Simula diferencia (ejemplo: +1.234s)
            tiempo = `+${(1.234 * idx).toFixed(3)}s`;
        }
        const destacado = piloto.nombre === 'Franco Colapinto' ? ' style="background:#b00;color:#fff;font-weight:bold"' : '';
        html += `<tr${destacado}><td>${piloto.pos}</td><td>${piloto.nombre}</td><td>${tiempo}</td><td>${piloto.equipo}</td></tr>`;
    });
    html += '</table>';
    carrusel.innerHTML = html;
}

function cambiarGP(delta) {
    gpActual = (gpActual + delta + gps.length) % gps.length;
    mostrarCarruselGP();
}

function inicializarCarrusel(resultadosPorGP) {
    resultadosGlobal = resultadosPorGP;
    gps = Object.keys(resultadosPorGP);
    gpActual = 0;
    mostrarCarruselGP();
    // Asignar eventos a flechas
    const prev = document.getElementById('gp-prev');
    const next = document.getElementById('gp-next');
    if (prev && next) {
        prev.onclick = () => cambiarGP(-1);
        next.onclick = () => cambiarGP(1);
    }
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', cargarResultados);

document.querySelectorAll('.gp-row').forEach(function(row) {
    row.addEventListener('click', function() {
        const gp = this.getAttribute('data-gp');
        const resultados = resultadosPorGP[gp];
        const contenedor = document.getElementById('resultados-gp');
        if (resultados) {
                    let html = `<h3>Posiciones - ${gp}</h3><table><thead><tr><th>Posición</th><th>Piloto</th><th>Equipo</th></tr></thead><tbody>`;
                    resultados.forEach(r => {
                const destacado = r.nombre === "Franco Colapinto" ? ' style="background:#b71c1c;color:#fff;font-weight:bold;border-color:#111"' : '';
                        // Fotos de pilotos
                                const fotosPilotos = {
                                    "Lando Norris": "https://media.formula1.com/content/dam/fom-website/drivers/LANDO_NORRIS.png.transform/2col/image.png",
                                    "Oscar Piastri": "https://media.formula1.com/content/dam/fom-website/drivers/OSCAR_PIASTRI.png.transform/2col/image.png",
                                    "Max Verstappen": "https://media.formula1.com/content/dam/fom-website/drivers/MAX_VERSTAPPEN.png.transform/2col/image.png",
                                    "Charles Leclerc": "https://media.formula1.com/content/dam/fom-website/drivers/CHARLES_LECLERC.png.transform/2col/image.png",
                                    "Lewis Hamilton": "https://media.formula1.com/content/dam/fom-website/drivers/LEWIS_HAMILTON.png.transform/2col/image.png",
                                    "George Russell": "https://media.formula1.com/content/dam/fom-website/drivers/GEORGE_RUSSELL.png.transform/2col/image.png",
                                    "Carlos Sainz": "https://media.formula1.com/content/dam/fom-website/drivers/CARLOS_SAINZ.png.transform/2col/image.png",
                                    "Sergio Pérez": "https://media.formula1.com/content/dam/fom-website/drivers/SERGIO_PEREZ.png.transform/2col/image.png",
                                    "Fernando Alonso": "https://media.formula1.com/content/dam/fom-website/drivers/FERNANDO_ALONSO.png.transform/2col/image.png",
                                    "Franco Colapinto": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Franco_Colapinto_2022.jpg",
                                    "Esteban Ocon": "https://media.formula1.com/content/dam/fom-website/drivers/ESTEBAN_OCON.png.transform/2col/image.png",
                                    "Pierre Gasly": "https://media.formula1.com/content/dam/fom-website/drivers/PIERRE_GASLY.png.transform/2col/image.png",
                                    "Yuki Tsunoda": "https://media.formula1.com/content/dam/fom-website/drivers/YUKI_TSUNODA.png.transform/2col/image.png",
                                    "Daniel Ricciardo": "https://media.formula1.com/content/dam/fom-website/drivers/DANIEL_RICCIARDO.png.transform/2col/image.png",
                                    "Valtteri Bottas": "https://media.formula1.com/content/dam/fom-website/drivers/VALTTERI_BOTTAS.png.transform/2col/image.png",
                                    "Zhou Guanyu": "https://media.formula1.com/content/dam/fom-website/drivers/GUANYU_ZHOU.png.transform/2col/image.png",
                                    "Kevin Magnussen": "https://media.formula1.com/content/dam/fom-website/drivers/KEVIN_MAGNUSSEN.png.transform/2col/image.png",
                                    "Nico Hülkenberg": "https://media.formula1.com/content/dam/fom-website/drivers/NICO_HULKENBERG.png.transform/2col/image.png",
                                    "Alex Albon": "https://media.formula1.com/content/dam/fom-website/drivers/ALEX_ALBON.png.transform/2col/image.png",
                                    "Lance Stroll": "https://media.formula1.com/content/dam/fom-website/drivers/LANCE_STROLL.png.transform/2col/image.png"
                                };
                        // Fotos de equipos
                                const fotosEquipos = {
                                    "McLaren": "https://media.formula1.com/content/dam/fom-website/teams/McLaren/logo-mclaren-2023.png.transform/2col/image.png",
                                    "Red Bull Racing": "https://media.formula1.com/content/dam/fom-website/teams/Red%20Bull/logo-redbull-2023.png.transform/2col/image.png",
                                    "Ferrari": "https://media.formula1.com/content/dam/fom-website/teams/Ferrari/logo-ferrari-2023.png.transform/2col/image.png",
                                    "Mercedes": "https://media.formula1.com/content/dam/fom-website/teams/Mercedes/logo-mercedes-2023.png.transform/2col/image.png",
                                    "Williams": "https://media.formula1.com/content/dam/fom-website/teams/Williams/logo-williams-2023.png.transform/2col/image.png",
                                    "Aston Martin": "https://media.formula1.com/content/dam/fom-website/teams/Aston%20Martin/logo-astonmartin-2023.png.transform/2col/image.png",
                                    "Alpine": "https://media.formula1.com/content/dam/fom-website/teams/Alpine/logo-alpine-2023.png.transform/2col/image.png",
                                    "RB": "https://media.formula1.com/content/dam/fom-website/teams/AlphaTauri/logo-alphatauri-2023.png.transform/2col/image.png",
                                    "Kick Sauber": "https://media.formula1.com/content/dam/fom-website/teams/Alfa%20Romeo/logo-alfaromeo-2023.png.transform/2col/image.png",
                                    "Haas": "https://media.formula1.com/content/dam/fom-website/teams/Haas/logo-haas-2023.png.transform/2col/image.png"
                                };
                        html += `<tr${destacado}>
                            <td>${r.pos}</td>
                            <td>
                                <span class='hover-piloto' data-img='${fotosPilotos[r.nombre] || ""}'>${r.nombre}</span>
                            </td>
                            <td>
                                <span class='hover-equipo' data-img='${fotosEquipos[r.equipo] || ""}'>${r.equipo}</span>
                            </td>
                        </tr>`;
                    });
                    html += '</tbody></table>';
                    contenedor.innerHTML = html;
                    // Evento para mostrar foto piloto
                    document.querySelectorAll('.hover-piloto').forEach(function(el) {
                        el.addEventListener('mouseenter', function(e) {
                            const img = el.getAttribute('data-img');
                            if (img) {
                                let preview = document.createElement('img');
                                preview.src = img;
                                preview.className = 'preview-img';
                                preview.style.position = 'absolute';
                                preview.style.left = (e.clientX + 20) + 'px';
                                preview.style.top = (e.clientY - 40) + 'px';
                                preview.style.width = '100px';
                                preview.style.borderRadius = '8px';
                                preview.style.boxShadow = '0 2px 8px #880e1d';
                                preview.style.zIndex = 1000;
                                document.body.appendChild(preview);
                                el._preview = preview;
                            }
                        });
                        el.addEventListener('mouseleave', function() {
                            if (el._preview) {
                                document.body.removeChild(el._preview);
                                el._preview = null;
                            }
                        });
                    });
                    // Evento para mostrar foto equipo
                    document.querySelectorAll('.hover-equipo').forEach(function(el) {
                        el.addEventListener('mouseenter', function(e) {
                            const img = el.getAttribute('data-img');
                            if (img) {
                                let preview = document.createElement('img');
                                preview.src = img;
                                preview.className = 'preview-img';
                                preview.style.position = 'absolute';
                                preview.style.left = (e.clientX + 20) + 'px';
                                preview.style.top = (e.clientY - 40) + 'px';
                                preview.style.width = '100px';
                                preview.style.borderRadius = '8px';
                                preview.style.boxShadow = '0 2px 8px #880e1d';
                                preview.style.zIndex = 1000;
                                document.body.appendChild(preview);
                                el._preview = preview;
                            }
                        });
                        el.addEventListener('mouseleave', function() {
                            if (el._preview) {
                                document.body.removeChild(el._preview);
                                el._preview = null;
                            }
                        });
                    });
        } else {
            contenedor.innerHTML = `<p>No hay datos disponibles para este GP. Pronto se actualizará con información oficial.</p>`;
        }
    });
});
document.getElementById('btn').addEventListener('click', function() {
    alert('¡Has hecho clic en el botón!');
});

// Transición suave entre páginas
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.style.opacity = 0;
        setTimeout(function() {
            window.location.href = href;
        }, 600);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("nav ul li span.menu-animado");
  const currentPage = window.location.pathname.split("/").pop();

  navItems.forEach(item => {
    const link = item.querySelector("a");
    if (link.getAttribute("href") === currentPage) {
      item.classList.add("activo");
    } else {
      item.classList.remove("activo");
    }
  });


    // Mostrar imagen de equipo en equipos.html
    if (currentPage === "equipos.html") {
        const fotosEquipos = {
            "Mercedes AMG Petronas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png",
            "Red Bull Racing": "https://e00-especiales-marca.uecdn.es/motor/images/formula1/escuderias/2025/redbull/logo-redbull.png",
            "Kick Sauber": "https://i.namu.wiki/i/M2DRCcTYlEVr82u-N5ggwF2VtxLxzEwqiouKWpQfWgUr2qTV_9BSNBwDZEInzcM6Y945X3YCpHoQZ8f0pC5TXQ.svg",
            "McLaren": "https://upload.wikimedia.org/wikipedia/commons/2/20/McLaren_Racing_logo.png",
            "Alpine": "https://media.formula1.com/content/dam/fom-website/teams/Alpine/logo-alpine-2023.png.transform/2col/image.png",
            "Aston Martin": "https://media.formula1.com/content/dam/fom-website/teams/Aston%20Martin/logo-astonmartin-2023.png.transform/2col/image.png",
            "Williams Racing": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_Williams_F1.png/1280px-Logo_Williams_F1.png",
            "Ferrari": "https://upload.wikimedia.org/wikipedia/commons/0/00/Ferrari_S.p.A._logo.svg",
            "Hass": "https://upload.wikimedia.org/wikipedia/commons/5/54/Haas_F1_Team_Logo.svg",
            "Cadillac (2026)": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Cadillac_logo.png"
        };
        document.querySelectorAll('.equipo-hover').forEach(function(el) {
            el.addEventListener('mouseenter', function(e) {
                // Buscar el nombre del equipo
                let nombre = el.childNodes[0].nodeValue.trim();
                let img = fotosEquipos[nombre];
                if (img) {
                    let preview = document.createElement('img');
                    preview.src = img;
                    preview.className = 'preview-img';
                    preview.style.position = 'absolute';
                    preview.style.left = (e.clientX + 20) + 'px';
                    preview.style.top = (e.clientY - 40) + 'px';
                    preview.style.width = '100px';
                    preview.style.borderRadius = '8px';
                    preview.style.boxShadow = '0 2px 8px #880e1d';
                    preview.style.zIndex = 1000;
                    document.body.appendChild(preview);
                    el._preview = preview;
                }
            });
            el.addEventListener('mouseleave', function() {
                if (el._preview) {
                    document.body.removeChild(el._preview);
                    el._preview = null;
                }
            });
        });
    }
});

/* 

| 

*/