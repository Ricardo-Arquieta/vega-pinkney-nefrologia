// Base de datos de artículos del blog

const articulos = [
    /* ============================================
    ARTÍCULO 1 - Etapas de la enfermedad renal
    ============================================ */
    
    {
        id: 'etapas-enfermedad-renal',
        categoria: 'Prevención',
        titulo: 'Etapas de la enfermedad renal: ¿Qué significan G1, G2, G3a, G3b, G4 y G5?',
        fecha: '22 Junio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        imagen: 'assets/images/blog/etapas_salud-renal.jpg',
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
    /* ============================================
    ARTÍCULO 2 -  Ejercicio y enfermedad renal
    ============================================ */
    {
        id: 'ejercicio-y-enfermedad-renal',
        categoria: 'Actividad física',
        titulo: 'Ejercicio y enfermedad renal: Sí se puede (y tal vez deberías empezar ya) 💪',
        fecha: '15 Junio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        imagen: 'assets/images/blog/Ejercicio_Salud-Renal.jpg',
        contenido: `
            <p>"Doctor, ¿puedo hacer ejercicio?"<br>
            Esta es una de las preguntas que más escucho en consulta. Y la respuesta, en la mayoría de los casos, es un SÍ rotundo.</p>
            <p>De hecho, mantenerse activo no solo es seguro: puede mejorar tu condición física, bajar la presión arterial, aumentar tu fuerza muscular, darte más energía y elevar tu calidad de vida.</p>
            <p>Lo importante no es hacer el ejercicio "perfecto". Lo importante es hacer un plan seguro, progresivo y adaptado a tu tipo de enfermedad renal o tratamiento.</p>

            <h2>¿Qué puedes hacer si tienes enfermedad renal (estadios 1 a 4)?</h2>
            <p>Si tu enfermedad está estable, muchas actividades son totalmente viables:</p>
            <ul>
                <li>🚶 Caminar</li>
                <li>🚴 Bicicleta</li>
                <li>🏊 Natación</li>
                <li>💪 Ejercicios con ligas o bandas elásticas</li>
                <li>🪑 Sentarte y pararte de una silla</li>
                <li>🪜 Subir escalones</li>
                <li>🧘 Trabajo de equilibrio y flexibilidad</li>
            </ul>
            <p><strong>La mejor combinación:</strong> ejercicio aeróbico + ejercicios de fuerza.</p>
            <p><strong>Meta recomendada:</strong> llegar poco a poco a 150 minutos por semana de actividad moderada, más fuerza 2 días por semana.</p>
            <p>¿Hoy haces cero? No pasa nada. Empezar con 10 a 15 minutos también cuenta. El primer paso es el más importante.</p>

            <h2>Rutina sencilla para hacer en casa</h2>
            <p>No necesitas gimnasio ni equipo costoso. Una rutina básica puede incluir:</p>
            <ul>
                <li>Caminata (dentro o fuera de casa)</li>
                <li>Marchar en el lugar</li>
                <li>Sentarse y levantarse de una silla</li>
                <li>Elevaciones de talones</li>
                <li>Sentadillas cortas</li>
                <li>Empujes en pared</li>
                <li>Trabajo con bandas elásticas</li>
            </ul>
            <p>¿Te fatigas rápido? Divide el ejercicio en bloques pequeños y suma el tiempo total durante el día.</p>
            <p>Un estudio en personas con enfermedad renal estadio 4 mostró que un programa en casa (ejercicio aeróbico 3 veces por semana + fuerza 2 veces) mejoró la capacidad para caminar y varios aspectos de la calidad de vida.</p>

            <h2>Si estás en hemodiálisis</h2>
            <p>También puedes beneficiarte del ejercicio. Algunas personas lo hacen durante la sesión de diálisis (con bici o ejercicios supervisados), otras prefieren hacerlo fuera de la unidad.</p>
            <p><strong>Cuidados especiales con el acceso vascular:</strong></p>
            <ul>
                <li>🚫 Si tienes fístula o injerto: evita golpes, compresión y cargas excesivas en ese brazo</li>
                <li>🚫 Si tienes catéter: protégelo de la humedad (nadar o meterte a tina no suele ser buena idea)</li>
            </ul>

            <h2>Si estás en diálisis peritoneal</h2>
            <p>¡Muy buenas noticias! Caminar suele ser seguro incluso poco tiempo después de colocar el catéter.</p>
            <p>Para actividades suaves (caminar, senderismo, trote suave): muchas veces no hace falta drenar el líquido antes, a menos que la sensación de llenura te incomode.</p>
            <p>Para ejercicios intensos (levantar peso, saltar, abdominales fuertes): sí conviene drenar antes y seguir las indicaciones de tu equipo.</p>
            <p>Fortalecer el abdomen y el tronco de forma progresiva puede ser útil, pero con técnica y tiempos adecuados.</p>

            <h2>Si tienes trasplante renal</h2>
            <p>El ejercicio forma parte del cuidado del injerto y de tu salud cardiovascular.</p>
            <p><strong>Recomendación inicial:</strong> caminar.</p>
            <p><strong>Más adelante:</strong> muchas personas pueden volver a bicicleta, natación, caminata vigorosa o trabajo de fuerza.</p>
            <p><strong>Con cautela:</strong> deportes de contacto y pruebas extremas de larga duración (podrían poner en riesgo el injerto).</p>

            <h2>Hidratación: no hay receta única</h2>
            <p>Este punto es clave. No todos necesitan lo mismo.</p>
            <ul>
                <li>✅ Ejercicios suaves o moderados de corta duración: agua simple suele ser suficiente</li>
                <li>❌ Bebidas con electrolitos o geles: no suelen hacer falta para la mayoría de pacientes renales que apenas empiezan</li>
                <li>⚠️ Ejercicios largos, con calor o mucho sudor: estos productos pueden tener sentido, pero en enfermedad renal avanzada, diálisis o trasplante deben usarse con cuidado (pueden aportar sodio, potasio, azúcares o cafeína)</li>
            </ul>
            <p><strong>Importante:</strong> algunas personas necesitan restricción de líquidos. La mejor referencia es la cantidad que tu nefrólogo o nutriólogo renal te haya indicado.</p>

            <h2>El mensaje más importante</h2>
            <p>El mejor ejercicio para una persona con enfermedad renal no es el más intenso, sino el que puede hacer con seguridad, constancia y buena supervisión.</p>
            <p>Si tienes dudas, pregunta en consulta qué tipo de ejercicio te conviene más según:</p>
            <ul>
                <li>Tu estadio renal</li>
                <li>Tus síntomas</li>
                <li>Tu presión arterial</li>
                <li>Tu hemoglobina</li>
                <li>Tu acceso de diálisis o trasplante</li>
            </ul>
            <p>No esperes al "momento perfecto". El momento es ahora. Tu cuerpo (y tus riñones) te lo agradecerán. 🩺💙</p>
        `
    },
    /* ============================================
   ARTÍCULO 3 - Comezón en la enfermedad renal
   ============================================ */
    {
        id: 'comezon-enfermedad-renal',
        categoria: 'Síntomas',
        titulo: 'Comezón en la enfermedad renal: Por qué aparece y cómo aliviarla 🩺',
        fecha: '08 Julio 2025',
        autor: 'Dr. Francisco Vega Pinkney',
        imagen: 'assets/images/blog/comezon_enfermedad-renal.webp',
        contenido: `
            <p>¿La comezón te despierta por la noche? ¿Te obliga a rascarte constantemente durante el día?</p>
            <p>Si vives con enfermedad renal crónica, este síntoma puede afectar tu descanso, tu estado de ánimo y tus actividades diarias.</p>
            <p><strong>La buena noticia:</strong> Aunque es frecuente, merece atención y existen opciones para aliviarla.</p>

            <h2>¿Qué tan frecuente es?</h2>
            <p>La comezón (también llamada prurito) puede aparecer tanto en personas que aún no requieren diálisis como en quienes reciben diálisis peritoneal o hemodiálisis.</p>
            <p><strong>Dato importante:</strong> En pacientes en hemodiálisis, aproximadamente 3 a 4 de cada 10 personas presentan comezón de intensidad moderada a severa.</p>
            <p><strong>Pero aquí está el problema:</strong> Muchas personas no lo comentan en consulta porque creen que es algo que "deben soportar" o que no tiene tratamiento.</p>
            <p>Eso no es cierto. La comezón merece ser escuchada y tratada.</p>

            <h2>¿Por qué da comezón cuando tienes enfermedad renal?</h2>
            <p>No existe una sola explicación. En el prurito asociado a la enfermedad renal pueden participar:</p>
            <ul>
                <li>🧠 Cambios en las señales nerviosas que transmiten la picazón</li>
                <li>🔥 Procesos inflamatorios</li>
                <li>💧 Resequedad de la piel</li>
            </ul>
            <p><strong>Ojo:</strong> Aunque también se le llama "prurito urémico", no se explica únicamente por la acumulación de sustancias de desecho.</p>

            <h2>Importante: No toda comezón se debe al riñón</h2>
            <p>También puede relacionarse con:</p>
            <ul>
                <li>Dermatitis</li>
                <li>Urticaria</li>
                <li>Infecciones de la piel</li>
                <li>Reacciones a medicamentos</li>
                <li>Otras enfermedades (como las del hígado)</li>
            </ul>
            <p>Incluso pueden coexistir varias causas. Por eso, revisar la piel y los antecedentes es fundamental antes de elegir un tratamiento.</p>

            <h2>¿Cómo se presenta?</h2>
            <p>La comezón puede:</p>
            <ul>
                <li>📍 Sentirse en una zona o en varias partes del cuerpo</li>
                <li>⏰ Aparecer por momentos o mantenerse durante todo el día</li>
                <li>🌙 Empeorar por la noche</li>
            </ul>
            <p>Tu piel puede verse normal, aunque también puede estar reseca o mostrar marcas y heridas por el rascado.</p>
            <p>No necesitas tener ronchas para que la comezón sea real y requiera valoración.</p>

            <h2>¿Qué tratamientos existen?</h2>
            <p>El tratamiento depende de la causa, la intensidad y cuánto interfiere con tu vida. A veces es necesario combinar varias medidas.</p>

            <h4>🧴 1. Cuidar la piel</h4>
            <ul>
                <li>Aplicar humectantes diariamente (especialmente después del baño)</li>
                <li>Usar productos sin perfume</li>
                <li>Baños breves con agua tibia</li>
                <li>Limpiadores suaves</li>
                <li>Ropa que no irrite la piel</li>
                <li>Mantener las uñas cortas (reduce las lesiones al rascarse)</li>
            </ul>

            <h4>💊 2. Tratar la causa identificada</h4>
            <p>Si la comezón viene de una dermatitis, infección o reacción a un medicamento, el abordaje es diferente.</p>
            <p><strong>Importante:</strong> Si sospechas que un medicamento está relacionado, no lo suspendas por tu cuenta. Consulta con tu médico para valorar la relación entre el fármaco y los síntomas.</p>
            <p>En algunos casos es útil la valoración conjunta con dermatología.</p>

            <h4>🩺 3. Revisar el tratamiento de la enfermedad renal</h4>
            <p>En quienes reciben diálisis, se revisa que el tratamiento sea adecuado y se controlan niveles de calcio, fósforo y hormona paratiroidea.</p>
            <p><strong>Pero ojo:</strong> La comezón no siempre significa que el fósforo esté alto o que la diálisis sea insuficiente. Puede persistir aun cuando estos aspectos estén bien controlados.</p>

            <h4>💉 4. Medicamentos específicos</h4>
            <p>Cuando se confirma prurito asociado a la enfermedad renal, pueden emplearse medicamentos como:</p>
            <ul>
                <li>Gabapentina</li>
                <li>Pregabalina</li>
            </ul>
            <p>Estos requieren ajuste de dosis y vigilancia médica (pueden provocar sueño, mareo y caídas). No deben iniciarse sin indicación médica.</p>
            <p>También existen otras alternativas como la fototerapia (en casos seleccionados) y la difelikefalina, un medicamento autorizado en la Unión Europea para adultos en hemodiálisis con prurito moderado a severo.</p>

            <h4>⚠️ 5. Las "pastillas para la alergia" NO son la solución universal</h4>
            <p>En el prurito propio de la enfermedad renal, los antihistamínicos no han demostrado un beneficio consistente.</p>
            <p>Sentir sueño después de tomarlos no significa que estén tratando la causa real de la comezón.</p>

            <h2>¿Cómo saber cuánto te está afectando?</h2>
            <p>Las escalas ayudan a describir tus síntomas y comparar cómo cambian con el tratamiento. Hay dos aspectos clave que vale la pena registrar:</p>

            <h4>📊 Intensidad: Escala WI-NRS</h4>
            <p>Piensa en la comezón más intensa que sentiste en las últimas 24 horas y asígnale un número del 0 al 10:</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Puntuación</th>
                        <th>Intensidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>0</td><td>Sin comezón</td></tr>
                    <tr><td>1-3</td><td>Leve</td></tr>
                    <tr><td>4-6</td><td>Moderada</td></tr>
                    <tr><td>7-10</td><td>Intensa o muy intensa</td></tr>
                </tbody>
            </table>
            <p>El 10 representa la peor comezón imaginable.</p>
            <p><strong>Consejo:</strong> Anota tu puntuación diariamente durante una semana y lleva el registro a consulta.</p>

            <h4>📝 Impacto en tu vida: Escala SADS</h4>
            <p>Esta herramienta identifica cuál de tres descripciones se parece más a tu situación, considerando:</p>
            <ul>
                <li>Marcas de rascado</li>
                <li>Dificultades para dormir</li>
                <li>Efecto en tu estado de ánimo</li>
            </ul>
            <p>Complementa la puntuación de intensidad: No todo se resume en un número.</p>
            <p>Puedes consultar las escalas WI-NRS y SADS en español <a href="#">aquí</a> (enlace al consenso español sobre prurito asociado a la enfermedad renal).</p>
            <p>Estas escalas no determinan la causa ni sustituyen una valoración médica. Su objetivo es ayudarte a explicar cómo te sientes y valorar si el tratamiento está funcionando.</p>

            <h2>No esperes a que sea insoportable para comentarlo 💙</h2>
            <p>Habla con tu nefrólogo si la comezón:</p>
            <ul>
                <li>🚩 Se repite con frecuencia</li>
                <li>🚩 Interrumpe tu descanso</li>
                <li>🚩 Te provoca lesiones</li>
            </ul>
            <p>Al consultar, explica:</p>
            <ul>
                <li>Cuándo comenzó</li>
                <li>En qué zonas aparece</li>
                <li>Qué la empeora</li>
                <li>Si coincide con cambios en tus medicamentos o sesiones de diálisis</li>
            </ul>
            <p>Esta información ayuda a orientar la evaluación.</p>
            <p>Cuidar tus riñones también significa cuidar cómo te sientes. La comezón merece ser escuchada, evaluada y tratada.</p>
        `
    },
    /* ============ FIN ARTÍCULO 3 ============ */
];

// Función para cargar un artículo según el parámetro 'articulo'
function cargarArticulo() {
    const params = new URLSearchParams(window.location.search);
    const idArticulo = params.get('articulo') || 'etapas-enfermedad-renal';
    const articulo = articulos.find(a => a.id === idArticulo) || articulos[0];

    // Actualizar breadcrumb (texto e imagen)
    document.getElementById('breadcrumb-titulo').innerHTML = `${articulo.titulo}<span class="dotted"></span>`;
    document.getElementById('breadcrumb-categoria').textContent = articulo.categoria;

    // Cambiar imagen de fondo del breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-imagen');
    if (breadcrumb && articulo.imagen) {
        breadcrumb.style.backgroundImage = `url(${articulo.imagen})`;
    }

    // Actualizar contenido del artículo
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
                    <img src="${a.imagen}" alt="${a.titulo}">
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