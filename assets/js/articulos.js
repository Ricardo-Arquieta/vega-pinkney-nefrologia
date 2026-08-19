// Base de datos de artículos del blog
const articulos = [
    {
        id: 'habitos-renales',
        categoria: 'Prevención',
        titulo: 'Cinco hábitos diarios para mantener sus riñones sanos',
        fecha: '22 Junio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        contenido: `
            <p>Los riñones son órganos vitales que filtran la sangre y eliminan toxinas del cuerpo. Adoptar hábitos saludables puede reducir significativamente el riesgo de enfermedad renal crónica.</p>
            <p>A continuación, le compartimos cinco recomendaciones clave para cuidar su función renal:</p>
            <ul class="service-list">
                <li>Mantener una hidratación adecuada, bebiendo agua suficiente durante el día.</li>
                <li>Controlar la presión arterial y los niveles de glucosa en sangre.</li>
                <li>Reducir el consumo de sal y alimentos ultraprocesados.</li>
                <li>Evitar el uso prolongado de antiinflamatorios no esteroideos sin supervisión médica.</li>
                <li>Realizar actividad física moderada de forma regular.</li>
            </ul>
            <p>Recuerde que la detección temprana es clave. Si tiene diabetes, hipertensión o antecedentes familiares, consulte a un nefrólogo.</p>
        `
    },
    {
        id: 'primera-hemodialisis',
        categoria: 'Diálisis',
        titulo: '¿Qué esperar durante su primera sesión de hemodiálisis?',
        fecha: '15 Junio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        contenido: `
            <p>La hemodiálisis es un tratamiento que sustituye la función de los riñones cuando estos ya no pueden filtrar la sangre adecuadamente.</p>
            <p>En la primera sesión, el paciente es recibido por un equipo multidisciplinario que le explicará cada paso y le ayudará a sentirse cómodo.</p>
            <ul class="service-list">
                <li>Se realiza una revisión de signos vitales y acceso vascular.</li>
                <li>La sesión suele durar entre 3 y 4 horas.</li>
                <li>Puede leer, descansar o ver televisión durante el tratamiento.</li>
            </ul>
            <p>Es normal sentir cierta ansiedad al principio, pero la mayoría de los pacientes se adaptan rápidamente con el acompañamiento adecuado.</p>
        `
    },
    {
        id: 'avances-trasplante-renal',
        categoria: 'Trasplante',
        titulo: 'Avances en trasplante renal: compatibilidad y calidad de vida',
        fecha: '01 Junio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        contenido: `
            <p>El trasplante renal es hoy en día una de las mejores opciones de tratamiento para pacientes con enfermedad renal avanzada.</p>
            <p>Gracias a los avances en inmunología y técnicas quirúrgicas, la compatibilidad entre donante y receptor ha mejorado notablemente.</p>
            <p>Un seguimiento adecuado después del trasplante permite reducir el riesgo de rechazo y mejorar la calidad de vida del paciente.</p>
        `
    }
];

// Función para cargar un artículo según el parámetro 'articulo'
function cargarArticulo() {
    const params = new URLSearchParams(window.location.search);
    const idArticulo = params.get('articulo') || 'habitos-renales';
    const articulo = articulos.find(a => a.id === idArticulo) || articulos[0];

    // Rellenar breadcrumb
    document.getElementById('breadcrumb-titulo').innerHTML = `${articulo.titulo}<span class="dotted"></span>`;
    document.getElementById('breadcrumb-categoria').textContent = articulo.categoria;

    // Rellenar artículo
    document.getElementById('articulo-categoria').textContent = articulo.categoria;
    document.getElementById('articulo-titulo').textContent = articulo.titulo;
    document.getElementById('articulo-fecha').textContent = articulo.fecha;
    document.getElementById('articulo-contenido').innerHTML = articulo.contenido;
}

// Función para llenar artículos recientes en el sidebar
function cargarRecientes() {
    const contenedor = document.getElementById('articulos-recientes');
    if (!contenedor) return;
    contenedor.innerHTML = articulos.map(a => `
        <li>
            <div class="inner">
                <div class="img-box">
                    <img src="assets/images/blog/author.jpg" alt="${a.titulo}">
                </div>
                <div class="title-box">
                    <h4><a href="articulo.html?articulo=${a.id}">${a.titulo}</a></h4>
                    <h6><span class="icon-calendar-1"></span>${a.fecha}</h6>
                </div>
            </div>
        </li>
    `).join('');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarArticulo();
    cargarRecientes();
});