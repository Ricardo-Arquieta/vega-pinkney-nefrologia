// Base de datos de artículos del blog
const articulos = [
    {
        id: 'etapas-enfermedad-renal',
        categoria: 'Prevención',
        titulo: 'Etapas de la enfermedad renal: ¿Qué significan G1, G2, G3a, G3b, G4 y G5?',
        fecha: '22 Junio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        contenido: `
            <p>Recibir un diagnóstico como "enfermedad renal en estadio 3" puede asustar. Pero aquí va la buena noticia:<br>
            El estadio NO es una sentencia. No es una cuenta regresiva automática hacia la diálisis.<br>
            Es simplemente una forma de describir cómo están funcionando tus riñones y decidir qué cuidados necesitas.</p>

            <h2>Lo primero: ¿qué es la enfermedad renal crónica?</h2>
            <p>La enfermedad renal crónica (ERC) se diagnostica cuando hay un daño en los riñones que dura más de tres meses y afecta tu salud.</p>
            <p><strong>¿Cómo se detecta?</strong> Puede ser por:</p>
            <ul>
                <li>✅ Una tasa de filtración glomerular (TFGe) persistentemente menor de 60</li>
                <li>✅ Albúmina en la orina</li>
                <li>✅ Cambios persistentes en el examen de orina</li>
                <li>✅ Alteraciones en un ultrasonido</li>
                <li>✅ Hallazgos en una biopsia</li>
                <li>✅ Antecedente de trasplante renal</li>
            </ul>
            <p><strong>Importante:</strong> Un resultado aislado NO siempre significa ERC. La creatinina y la TFGe pueden cambiar temporalmente por:</p>
            <ul>
                <li>Deshidratación</li>
                <li>Infecciones</li>
                <li>Ejercicio intenso</li>
                <li>Algunos medicamentos</li>
                <li>Descontrol de presión o glucosa</li>
            </ul>
            <p>Por eso el médico revisa estudios previos y a veces pide repetir las pruebas. Las primeras etapas pueden no dar síntomas, así que los análisis son clave para detectar el daño a tiempo.</p>

            <h2>Dos estudios que debes conocer (y que se complementan)</h2>
            <p>Para entender tu estadio renal, los médicos revisan dos mediciones principales:</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Estudio</th>
                        <th>¿Qué mide?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TFGe (tasa de filtración glomerular estimada)</td>
                        <td>Qué tanto filtran tus riñones</td>
                    </tr>
                    <tr>
                        <td>RAC (relación albúmina/creatinina en orina)</td>
                        <td>Cuánta albúmina estás perdiendo en la orina</td>
                    </tr>
                </tbody>
            </table>
            <p>La TFGe (a veces aparece como eGFR) se calcula con tu creatinina, edad y sexo. Es una estimación útil, pero no es un porcentaje exacto de cómo funcionan tus riñones.</p>
            <p>La RAC (también llamada uACR) detecta si los riñones están dejando escapar albúmina, una proteína que debería quedarse en la sangre. Puede encontrar daño renal incluso cuando la TFGe aún está bien.</p>
            <p><strong>Moraleja:</strong> Revisar solo la creatinina o la TFGe deja la historia incompleta. Ambos estudios deben interpretarse juntos.</p>

            <h2>Los estadios de la enfermedad renal (explicados simple)</h2>
            <p>Aunque se habla de "5 etapas", la etapa 3 se divide en dos. Por eso hay 6 categorías:</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>TFGe</th>
                        <th>¿Qué significa?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>G1</td>
                        <td>90 o más</td>
                        <td>Filtración normal, pero hay otro marcador de daño renal</td>
                    </tr>
                    <tr>
                        <td>G2</td>
                        <td>60-89</td>
                        <td>Disminución ligera; necesita otro marcador para llamarlo ERC</td>
                    </tr>
                    <tr>
                        <td>G3a</td>
                        <td>45-59</td>
                        <td>Disminución leve a moderada</td>
                    </tr>
                    <tr>
                        <td>G3b</td>
                        <td>30-44</td>
                        <td>Disminución moderada a importante</td>
                    </tr>
                    <tr>
                        <td>G4</td>
                        <td>15-29</td>
                        <td>Disminución grave</td>
                    </tr>
                    <tr>
                        <td>G5</td>
                        <td>Menor de 15</td>
                        <td>Falla renal; requiere planificación individualizada</td>
                    </tr>
                </tbody>
            </table>

            <h3>¿Qué significa cada uno en la vida real?</h3>
            <h4>G1 y G2 🟢</h4>
            <ul>
                <li>La filtración está conservada o solo ligeramente disminuida</li>
                <li>Para diagnosticar ERC debe haber albuminuria u otro marcador de daño</li>
                <li>Una TFGe de 70, por ejemplo, NO significa por sí sola que tengas enfermedad renal</li>
            </ul>
            <h4>G3a 🟡</h4>
            <ul>
                <li>Disminución leve a moderada</li>
                <li>Necesitas vigilar más la TFGe, revisar albuminuria y ajustar dosis de algunos medicamentos</li>
                <li>Estar en G3a NO significa que necesitarás diálisis</li>
            </ul>
            <h4>G3b 🟠</h4>
            <ul>
                <li>La disminución es más importante</li>
                <li>Aumenta la posibilidad de complicaciones (anemia, alteraciones de potasio)</li>
                <li>La valoración con nefrólogo suele ser conveniente</li>
            </ul>
            <h4>G4 🔴</h4>
            <ul>
                <li>Enfermedad renal avanzada</li>
                <li>Además de tratar la causa, conviene anticiparse y revisar opciones futuras</li>
            </ul>
            <h4>G5 🔴🔴</h4>
            <ul>
                <li>La función renal está gravemente reducida</li>
                <li>Algunas personas necesitarán diálisis o trasplante</li>
                <li>Pero la diálisis NO se inicia solo porque la TFGe sea menor de 15. También se consideran síntomas, análisis, nutrición, calidad de vida y preferencias personales</li>
            </ul>
            <p>Los síntomas no siguen una lista rígida. Una persona puede tener enfermedad avanzada y pocas molestias, mientras que otra puede presentar cansancio, hinchazón, falta de apetito, náuseas o dificultad para respirar.</p>

            <h2>La albuminuria también importa (y mucho)</h2>
            <p>La albuminuria se clasifica en tres categorías:</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>RAC</th>
                        <th>¿Qué significa?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A1</td>
                        <td>Menor de 30 mg/g</td>
                        <td>Normal o ligeramente aumentada</td>
                    </tr>
                    <tr>
                        <td>A2</td>
                        <td>30-300 mg/g</td>
                        <td>Moderadamente aumentada</td>
                    </tr>
                    <tr>
                        <td>A3</td>
                        <td>Mayor de 300 mg/g</td>
                        <td>Severamente aumentada; mayor riesgo renal y cardiovascular</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Ejemplo para entenderlo:</strong><br>
            Dos personas pueden tener TFGe de 50 (ambas en G3a):</p>
            <ul>
                <li>Persona 1: RAC de 12 mg/g → G3a-A1</li>
                <li>Persona 2: RAC de 650 mg/g → G3a-A3</li>
            </ul>
            <p>Aunque ambas están en el mismo estadio de filtración, su riesgo NO es igual. La segunda persona tiene mayor probabilidad de progresión renal y complicaciones.</p>
            <p><strong>Ojo:</strong> Una RAC elevada puede ser transitoria (por infección urinaria, fiebre, ejercicio intenso). Se confirma su persistencia antes de sacar conclusiones.</p>

            <h2>¿La enfermedad renal siempre avanza hasta la diálisis?</h2>
            <p>NO. Esta es una de las creencias más comunes y más falsas.</p>
            <ul>
                <li>Algunas personas permanecen estables durante muchos años</li>
                <li>Otras avanzan lentamente</li>
                <li>Un grupo puede deteriorarse con mayor rapidez</li>
                <li>Muchas personas en etapa 3 NO progresan a las etapas 4 o 5</li>
            </ul>
            <p>La evolución depende de:</p>
            <ul>
                <li>La causa de la enfermedad</li>
                <li>La cantidad de albuminuria</li>
                <li>Qué tan rápido cambia la TFGe</li>
                <li>El control de presión arterial y diabetes</li>
                <li>Otras enfermedades</li>
                <li>La respuesta al tratamiento</li>
            </ul>
            <p><strong>Buenas noticias:</strong> En ocasiones, la función mejora al corregir factores reversibles como deshidratación, infección o efectos de medicamentos.</p>

            <h2>¿Qué puedes hacer para proteger tus riñones?</h2>
            <p>Entre las medidas que suelen ayudar:</p>
            <ul>
                <li>✅ Controlar la presión arterial y la glucosa</li>
                <li>✅ Tomar los medicamentos indicados (y ajustar dosis cuando sea necesario)</li>
                <li>✅ Evitar la automedicación con antiinflamatorios (ibuprofeno, naproxeno, etc.)</li>
                <li>✅ Informar al médico sobre productos herbolarios o suplementos</li>
                <li>✅ No fumar</li>
                <li>✅ Mantener actividad física y alimentación saludable</li>
                <li>✅ Realizar el seguimiento recomendado</li>
            </ul>
            <p><strong>Importante:</strong> NO todas las personas con ERC necesitan restringir agua, potasio, fósforo o proteínas. Las dietas excesivamente restrictivas pueden ser perjudiciales. Cualquier ajuste debe individualizarse.</p>

            <h2>¿Cuándo conviene acudir con un nefrólogo?</h2>
            <p>La valoración especializada es útil cuando:</p>
            <ul>
                <li>🚩 TFGe persistente en G3b, G4 o G5</li>
                <li>🚩 Albuminuria A3, aunque la TFGe sea mayor de 60</li>
                <li>🚩 Causa no clara de la enfermedad renal</li>
                <li>🚩 Sospecha de enfermedad hereditaria, autoinmune o glomerular</li>
                <li>🚩 Descenso rápido o sostenido de la función renal</li>
                <li>🚩 Sangre y proteína en la orina</li>
                <li>🚩 Cálculos renales repetidos, riñón único o alteraciones estructurales</li>
                <li>🚩 Presión arterial difícil de controlar</li>
                <li>🚩 Alteraciones persistentes de potasio, bicarbonato, hemoglobina, calcio o fósforo</li>
            </ul>
            <p>El nefrólogo no solo "prepara para diálisis". También investiga la causa, ajusta el tratamiento, previene complicaciones y ayuda a conservar la función renal.</p>
            <p><strong>🚨 Señales de alarma (busca atención médica sin demora):</strong></p>
            <ul>
                <li>Disminución súbita de la cantidad de orina</li>
                <li>Falta de aire importante</li>
                <li>Confusión</li>
                <li>Dolor en el pecho</li>
                <li>Hinchazón rápidamente progresiva</li>
                <li>Vómitos persistentes</li>
                <li>Cambio brusco de la creatinina</li>
            </ul>

            <h2>Preguntas frecuentes</h2>
            <h4>❓ Tengo una TFGe de 55. ¿Significa que necesitaré diálisis?</h4>
            <p>No. Una TFGe de 55 corresponde a G3a si persiste durante al menos tres meses, pero no permite predecir por sí sola la necesidad futura de diálisis. También deben revisarse la RAC, la causa y la evolución.</p>
            <h4>❓ ¿Puedo tener enfermedad renal con una creatinina "normal"?</h4>
            <p>Sí. La creatinina depende de la edad, el sexo y la masa muscular. Además, puede existir albuminuria o una alteración estructural aun cuando la TFGe esté conservada.</p>
            <h4>❓ ¿Puedo cambiar de estadio?</h4>
            <p>Sí. La TFGe puede fluctuar y la categoría puede cambiar. Lo importante es determinar si el cambio es persistente y cuál es su causa. Algunas alteraciones reversibles pueden corregirse; en otros casos, la meta es mantener la función estable.</p>
            <h4>❓ Una TFGe menor de 15 significa diálisis inmediata?</h4>
            <p>No necesariamente. G5 requiere valoración especializada y planificación oportuna, pero la diálisis se inicia de acuerdo con síntomas, complicaciones, análisis, estado nutricional, control de líquidos y preferencias personales, no solamente por un valor numérico.</p>

            <h2>Mensaje final 💙</h2>
            <p>Conocer el estadio de tu enfermedad renal te permite hacer mejores preguntas y tomar decisiones a tiempo. La TFGe es importante, pero debe leerse junto con la albuminuria, la causa, los resultados previos y tu situación particular.<br>
            El estadio es un punto de partida para cuidar los riñones, NO una sentencia sobre el futuro.</p>
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