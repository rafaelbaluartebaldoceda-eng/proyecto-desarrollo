const resources = [
  { key: "summary", label: "Ver resumen" },
  { key: "practice", label: "Practicar" },
  { key: "review", label: "Repasar conceptos" }
];

const topicFocusLibrary = {
  "Lectura critica avanzada": "Este repaso trabaja la competencia de leer textos con sentido critico: reconocer informacion explicita, inferir ideas, evaluar la validez de argumentos y formar una opinion sustentada.",
  "Texto academico": "El objetivo es producir textos formales con estructura clara, ideas conectadas y sustento. Sirve para redactar ensayos, informes, monografias breves o respuestas argumentadas.",
  "Debate": "Este tema desarrolla comunicacion oral: presentar una postura, escuchar ideas contrarias, responder con argumentos y respetar turnos de participacion.",
  "Funciones cuadraticas": "Se enfoca en resolver problemas de regularidad, equivalencia y cambio. La meta es interpretar una expresion algebraica, una tabla o una grafica y relacionarlas entre si.",
  "Trigonometria basica": "Este tema permite resolver problemas de forma, movimiento y localizacion usando triangulos rectangulos, angulos y razones trigonometricas.",
  "Estadistica aplicada": "El proposito es gestionar datos: recoger informacion, organizarla, representarla, interpretar resultados y tomar decisiones con base en evidencias.",
  "Siglo XX peruano": "Este repaso busca interpretar procesos historicos del Peru contemporaneo, relacionando causas, cambios sociales, actores y consecuencias.",
  "Globalizacion": "Se analiza como las sociedades se conectan mediante economia, tecnologia, cultura e informacion, reconociendo oportunidades y problemas.",
  "Memoria historica": "El objetivo es reflexionar sobre hechos recientes, valorar testimonios y construir una ciudadania que aprende de su historia.",
  "Salud y prevencion": "Se relaciona con explicar el mundo natural y tomar decisiones informadas para cuidar la salud personal, familiar y comunitaria.",
  "Energia y movimiento": "El estudiante interpreta fenomenos fisicos cotidianos mediante energia, fuerza, movimiento y transformaciones.",
  "Proyecto cientifico": "Este tema desarrolla indagacion cientifica: plantear problemas, formular hipotesis, probar soluciones, registrar datos y comunicar resultados.",
  "Participacion politica": "Se orienta a convivir y participar democraticamente, comprendiendo instituciones, derechos, deberes y vigilancia ciudadana.",
  "Ciudadania digital": "El repaso promueve el uso responsable de entornos digitales: seguridad, respeto, verificacion de informacion y cuidado de la huella digital.",
  "Plan personal": "Este tema ayuda a construir un proyecto de vida con metas, plazos, acciones y evaluacion de avances.",
  "Present perfect": "The goal is to communicate past experiences connected to the present using have or has plus a past participle.",
  "Job and study vocabulary": "This topic builds useful vocabulary for talking about goals, applications, interviews, schedules and future study or work plans.",
  "Short presentations": "This review helps organize a short oral presentation with opening, main ideas, connectors and closing."
};

const conceptReviewLibrary = {
  "Postura del autor": [
    "La postura del autor es la posicion que una persona toma frente a un tema. Puede estar a favor, en contra o presentar una mirada intermedia.",
    "Para reconocerla, busca frases donde el autor valore, recomiende, critique o defienda una idea. Por ejemplo: 'Es necesario reducir el uso de plasticos' muestra una postura a favor del cuidado ambiental."
  ],
  "Evidencia": [
    "La evidencia es la informacion que sostiene una idea: datos, ejemplos, testimonios, resultados de estudios o hechos verificables.",
    "Un argumento es mas fuerte cuando no se queda en opinion. Por ejemplo, decir 'la lectura mejora el vocabulario' es mas convincente si se acompana con resultados o ejemplos concretos."
  ],
  "Sesgo": [
    "Un sesgo es una inclinacion que puede hacer que un texto muestre solo una parte de la realidad o favorezca una opinion.",
    "Para detectarlo, pregunta que informacion falta, a quien beneficia la idea y si se presentan puntos de vista contrarios."
  ],
  "Generalizacion": [
    "Una generalizacion ocurre cuando se afirma algo sobre todos o casi todos los casos usando poca evidencia.",
    "Palabras como 'todos', 'nadie', 'siempre' o 'nunca' pueden ser senales. Conviene revisar si la afirmacion realmente se cumple en todos los casos."
  ],
  "Introduccion": [
    "La introduccion presenta el tema, contextualiza al lector y anuncia la idea central que se desarrollara.",
    "Debe ser clara y breve. En un texto academico, prepara el camino para que el lector entienda de que se hablara y por que es importante."
  ],
  "Tesis o idea central": [
    "La tesis es la idea principal que el texto busca explicar o defender. Funciona como eje de todo el escrito.",
    "Si cada parrafo apoya esa idea con datos o razones, el texto mantiene unidad y coherencia."
  ],
  "Desarrollo": [
    "El desarrollo contiene los argumentos, explicaciones, ejemplos y evidencias. Es la parte donde se demuestra la idea central.",
    "Un buen desarrollo ordena las ideas de menor a mayor importancia o por subtemas."
  ],
  "Conclusion": [
    "La conclusion cierra el texto retomando la idea principal y mostrando que se logro explicar o defender.",
    "No debe introducir un tema totalmente nuevo; debe dejar una sintesis clara."
  ],
  "Postura": [
    "La postura es la posicion que defiendes en un debate. Debe ser clara para que los demas sepan que idea estas sosteniendo.",
    "Una postura fuerte se expresa con precision: 'Estoy a favor de...' o 'Considero que... porque...'."
  ],
  "Argumento": [
    "Un argumento es una razon que sostiene una postura. No basta decir 'me parece'; hay que explicar por que.",
    "Puede apoyarse en ejemplos, datos, experiencias o consecuencias logicas."
  ],
  "Contraargumento": [
    "El contraargumento responde a una idea contraria. Sirve para demostrar que conoces otras posiciones y puedes analizarlas.",
    "Una respuesta respetuosa reconoce la idea opuesta y luego explica por que tu postura sigue siendo valida."
  ],
  "Respeto al turno": [
    "Respetar turnos permite que el debate sea ordenado y que todos puedan participar.",
    "Tambien muestra escucha activa: no se interrumpe, se toma nota y se responde a las ideas, no a la persona."
  ],
  "Parabola": [
    "La parabola es la curva que representa una funcion cuadratica. Puede abrir hacia arriba o hacia abajo segun el signo del coeficiente principal.",
    "En problemas reales puede modelar trayectorias, ganancias, areas maximas o minimas."
  ],
  "Vertice": [
    "El vertice es el punto mas alto o mas bajo de una parabola. Indica el maximo o minimo de la funcion.",
    "Si una parabola representa la altura de un objeto, el vertice puede indicar la altura maxima."
  ],
  "Raices": [
    "Las raices son los valores de x donde la funcion vale cero. En la grafica, son los puntos donde la parabola corta el eje X.",
    "Resolver x^2 - 4 = 0 da x = -2 y x = 2; esas son sus raices."
  ],
  "Eje de simetria": [
    "El eje de simetria es una linea vertical que divide la parabola en dos partes iguales.",
    "Siempre pasa por el vertice y ayuda a interpretar la forma de la grafica."
  ],
  "Cateto opuesto": [
    "El cateto opuesto es el lado que esta frente al angulo que se esta analizando en un triangulo rectangulo.",
    "Identificarlo bien es clave para usar seno, coseno o tangente sin confundirse."
  ],
  "Cateto adyacente": [
    "El cateto adyacente es el lado que toca el angulo de referencia, sin contar la hipotenusa.",
    "Aparece en las razones coseno y tangente."
  ],
  "Hipotenusa": [
    "La hipotenusa es el lado mas largo de un triangulo rectangulo y siempre esta frente al angulo de 90 grados.",
    "En trigonometria se usa como referencia en seno y coseno."
  ],
  "Seno, coseno y tangente": [
    "Seno, coseno y tangente son razones entre lados de un triangulo rectangulo. Permiten calcular lados o angulos desconocidos.",
    "Seno es opuesto sobre hipotenusa, coseno es adyacente sobre hipotenusa y tangente es opuesto sobre adyacente."
  ],
  "Promedio": [
    "El promedio resume un conjunto de datos dividiendo la suma total entre la cantidad de valores.",
    "Sirve para tener una medida general, aunque puede verse afectado por valores muy altos o muy bajos."
  ],
  "Mediana": [
    "La mediana es el valor que queda al centro cuando los datos estan ordenados.",
    "Es util cuando hay datos extremos porque representa mejor el centro del grupo."
  ],
  "Moda": [
    "La moda es el dato que mas se repite en un conjunto.",
    "Por ejemplo, en 10, 12, 12 y 15, la moda es 12."
  ],
  "Grafico de barras": [
    "Un grafico de barras compara cantidades usando barras de distinta altura o longitud.",
    "Es util para ver rapidamente que categoria tiene mayor o menor frecuencia."
  ],
  "Migracion interna": [
    "La migracion interna es el desplazamiento de personas dentro del mismo pais, por ejemplo del campo a la ciudad.",
    "En el Peru del siglo XX influyo en el crecimiento urbano y en nuevos cambios culturales y economicos."
  ],
  "Urbanizacion": [
    "La urbanizacion es el crecimiento de las ciudades y de la vida urbana.",
    "Este proceso trae oportunidades, pero tambien retos como vivienda, transporte y servicios basicos."
  ],
  "Reformas sociales": [
    "Las reformas sociales son cambios impulsados para modificar condiciones de vida, trabajo, educacion o propiedad.",
    "Ayudan a entender conflictos y transformaciones del Peru contemporaneo."
  ],
  "Crisis politica": [
    "Una crisis politica ocurre cuando las instituciones pierden estabilidad, legitimidad o capacidad de respuesta.",
    "Puede generar cambios de gobierno, protestas, reformas o debilitamiento democratico."
  ],
  "Interdependencia": [
    "La interdependencia significa que los paises dependen unos de otros en economia, tecnologia, comercio o informacion.",
    "Un problema en un pais puede afectar precios, empleo o comunicacion en otros lugares."
  ],
  "Comercio internacional": [
    "El comercio internacional es el intercambio de bienes y servicios entre paises.",
    "Permite acceder a productos diversos, pero tambien exige competir y cuidar la produccion local."
  ],
  "Tecnologia": [
    "La tecnologia conecta personas, acelera la informacion y transforma estudios, trabajo y cultura.",
    "En globalizacion, internet permite aprender, vender, investigar y comunicarse a distancia."
  ],
  "Diversidad cultural": [
    "La diversidad cultural es la convivencia de distintas lenguas, costumbres, creencias y formas de vida.",
    "Reconocerla ayuda a evitar discriminacion y valorar la identidad propia y ajena."
  ],
  "Causas": [
    "Las causas son los hechos o condiciones que explican por que ocurre un proceso historico.",
    "No suele haber una sola causa; casi siempre se combinan factores politicos, sociales, economicos y culturales."
  ],
  "Consecuencias": [
    "Las consecuencias son los efectos que deja un hecho o proceso.",
    "Pueden ser inmediatas o de largo plazo, y afectar de manera distinta a varios grupos sociales."
  ],
  "Testimonios": [
    "Los testimonios son relatos de personas que vivieron o conocen un hecho.",
    "Son valiosos para la memoria historica, pero deben contrastarse con otras fuentes."
  ],
  "Ciudadania responsable": [
    "La ciudadania responsable implica conocer derechos, cumplir deberes y participar en la mejora de la comunidad.",
    "Tambien significa tomar decisiones informadas y respetar la dignidad de otras personas."
  ],
  "Prevencion": [
    "La prevencion consiste en actuar antes de que aparezca un problema de salud o seguridad.",
    "Incluye vacunacion, higiene, alimentacion, actividad fisica y busqueda de informacion confiable."
  ],
  "Habitos saludables": [
    "Los habitos saludables son acciones repetidas que protegen el cuerpo y la mente.",
    "Dormir bien, moverse, hidratarse y comer de forma equilibrada ayudan al bienestar."
  ],
  "Factores de riesgo": [
    "Los factores de riesgo aumentan la posibilidad de sufrir un problema de salud.",
    "Pueden ser conductas, ambientes o condiciones, como sedentarismo, mala alimentacion o falta de descanso."
  ],
  "Autocuidado": [
    "El autocuidado es la capacidad de tomar decisiones para proteger la propia salud.",
    "No significa aislarse, sino reconocer necesidades y pedir ayuda cuando corresponde."
  ],
  "Energia cinetica": [
    "La energia cinetica es la energia que tiene un cuerpo por estar en movimiento.",
    "Mientras mas masa o velocidad tenga un objeto, mayor sera su energia cinetica."
  ],
  "Energia potencial": [
    "La energia potencial es energia almacenada por la posicion o condicion de un objeto.",
    "Un objeto elevado tiene energia potencial gravitatoria porque puede caer."
  ],
  "Fuerza": [
    "Una fuerza es una interaccion que puede cambiar el movimiento o la forma de un objeto.",
    "Empujar, jalar, frenar o levantar son ejemplos cotidianos de fuerzas."
  ],
  "Trabajo": [
    "En fisica, el trabajo ocurre cuando una fuerza produce desplazamiento.",
    "Si empujas una caja y se mueve, la fuerza realizo trabajo sobre ella."
  ],
  "Problema": [
    "El problema es la situacion que se quiere investigar o resolver.",
    "Debe formularse con claridad para orientar la hipotesis, el metodo y la solucion."
  ],
  "Hipotesis": [
    "La hipotesis es una posible respuesta al problema. Se prueba mediante observacion o experimentacion.",
    "No es una adivinanza: debe estar relacionada con datos o conocimientos previos."
  ],
  "Experimentacion": [
    "La experimentacion permite probar una hipotesis controlando variables y registrando resultados.",
    "Un buen experimento debe poder repetirse y explicar que se hizo."
  ],
  "Resultados": [
    "Los resultados son los datos obtenidos despues de observar, medir o probar.",
    "Deben organizarse en tablas, graficos o conclusiones claras."
  ],
  "Voto": [
    "El voto es un mecanismo democratico para elegir representantes o tomar decisiones colectivas.",
    "Debe ejercerse de forma informada, libre y responsable."
  ],
  "Instituciones": [
    "Las instituciones son organizaciones que cumplen funciones publicas o sociales, como municipios, congreso, colegios o defensorias.",
    "Conocerlas permite saber donde pedir informacion, reclamar derechos o participar."
  ],
  "Fiscalizacion": [
    "Fiscalizar es vigilar que autoridades o instituciones cumplan sus funciones correctamente.",
    "La ciudadania puede fiscalizar revisando informacion publica, preguntando y denunciando irregularidades."
  ],
  "Bien comun": [
    "El bien comun es aquello que beneficia a la comunidad y no solo a una persona o grupo.",
    "Una decision ciudadana responsable considera como afecta a los demas."
  ],
  "Huella digital": [
    "La huella digital es el rastro que dejamos al usar internet: publicaciones, comentarios, busquedas o datos compartidos.",
    "Cuidarla protege la privacidad y la reputacion personal."
  ],
  "Privacidad": [
    "La privacidad es el derecho a proteger datos personales e informacion sensible.",
    "En internet se cuida usando contrasenas seguras y evitando compartir datos innecesarios."
  ],
  "Verificacion": [
    "La verificacion consiste en comprobar si una informacion es verdadera antes de creerla o difundirla.",
    "Se puede revisar la fuente, fecha, autor y compararla con otros medios confiables."
  ],
  "Respeto en linea": [
    "El respeto en linea implica comunicarse sin insultos, acoso ni discriminacion.",
    "La ciudadania digital tambien exige responsabilidad por lo que se publica."
  ],
  "Meta": [
    "Una meta es un resultado que quieres alcanzar. Debe ser clara para poder planificar acciones.",
    "Por ejemplo: 'mejorar mi promedio en matematica' es mas concreto que 'ser mejor estudiante'."
  ],
  "Plazo": [
    "El plazo es el tiempo limite para alcanzar una meta o completar una accion.",
    "Ayuda a organizar prioridades y medir avances."
  ],
  "Acciones": [
    "Las acciones son pasos concretos que acercan a una meta.",
    "Una meta sin acciones queda como deseo; con acciones se convierte en plan."
  ],
  "Evaluacion": [
    "La evaluacion permite revisar si el plan esta funcionando y que debe mejorarse.",
    "Puede hacerse semanalmente observando avances, dificultades y ajustes necesarios."
  ],
  "Have / has": [
    "Have and has are auxiliary verbs used in the present perfect. Use have with I, you, we and they; use has with he, she and it.",
    "Example: I have studied. She has finished."
  ],
  "Past participle": [
    "The past participle is the verb form used after have or has in the present perfect.",
    "Regular verbs often end in -ed, like studied. Irregular verbs change form, like go - gone."
  ],
  "Experiences": [
    "Experiences are things a person has done at some point before now.",
    "Present perfect is useful when the exact time is not the focus: I have visited Cusco."
  ],
  "Achievements": [
    "Achievements are goals or important things someone has completed.",
    "You can say: She has won a contest, or We have finished the project."
  ],
  "Career": [
    "Career means the professional path or area of work a person chooses.",
    "Students can use this word to talk about future plans: I want a career in engineering."
  ],
  "Application": [
    "An application is a formal request for a job, program or opportunity.",
    "It can include personal information, experience and reasons for applying."
  ],
  "Interview": [
    "An interview is a conversation where someone answers questions for a job, school or project.",
    "Useful phrases include: Nice to meet you, I am interested in..., and My strengths are..."
  ],
  "Schedule": [
    "A schedule is an organized plan of times and activities.",
    "It helps manage study, work, rest and deadlines."
  ],
  "Opening": [
    "The opening is the beginning of a presentation. It greets the audience and introduces the topic.",
    "Example: Good morning, today I will talk about healthy habits."
  ],
  "Main ideas": [
    "Main ideas are the most important points of a presentation.",
    "A short presentation should have two or three clear ideas, not too many details."
  ],
  "Connectors": [
    "Connectors organize speech and make ideas easier to follow.",
    "Useful connectors are first, then, also, however and finally."
  ],
  "Closing": [
    "The closing is the final part of a presentation. It summarizes the topic and thanks the audience.",
    "Example: In conclusion, this topic is important because... Thank you."
  ]
};

const coursesByGrade = {
  1: [
    createCourse("Comunicacion", "Lectura, expresion oral y escritura inicial para secundaria.", [
      ["Comprension lectora", "Reconocer ideas principales, personajes y proposito de un texto."],
      ["Tipos de texto", "Diferenciar textos narrativos, descriptivos e informativos."],
      ["Produccion escrita", "Organizar oraciones y parrafos breves con coherencia."]
    ]),
    createCourse("Matematica", "Bases de calculo, razonamiento y resolucion de problemas.", [
      ["Numeros enteros", "Comparar, ordenar y operar con numeros positivos y negativos."],
      ["Fracciones y decimales", "Resolver operaciones basicas y problemas cotidianos."],
      ["Geometria basica", "Identificar figuras, perimetros y areas simples."]
    ]),
    createCourse("Historia", "Primer acercamiento a procesos historicos del Peru y el mundo.", [
      ["Primeras civilizaciones", "Ubicar sociedades antiguas y sus aportes principales."],
      ["Culturas andinas", "Reconocer caracteristicas de culturas preincas."],
      ["Fuentes historicas", "Diferenciar fuentes orales, escritas y materiales."]
    ]),
    createCourse("Ciencia y Tecnologia", "Observacion cientifica, vida, materia y ambiente.", [
      ["Metodo cientifico", "Plantear preguntas, hipotesis y conclusiones sencillas."],
      ["Seres vivos", "Identificar niveles de organizacion y funciones vitales."],
      ["Materia y energia", "Reconocer cambios fisicos, quimicos y formas de energia."]
    ]),
    createCourse("DPCC", "Convivencia, identidad y participacion ciudadana.", [
      ["Normas de convivencia", "Comprender acuerdos, derechos y responsabilidades."],
      ["Identidad personal", "Reconocer fortalezas, emociones y relaciones saludables."],
      ["Participacion escolar", "Proponer acciones para mejorar el aula o colegio."]
    ]),
    createCourse("Ingles", "Vocabulario y estructuras basicas para comunicarse.", [
      ["Greetings", "Usar saludos, despedidas y presentaciones personales."],
      ["Personal information", "Responder preguntas sobre nombre, edad y colegio."],
      ["Classroom vocabulary", "Reconocer objetos e instrucciones del aula."]
    ])
  ],
  2: [
    createCourse("Comunicacion", "Analisis de textos y mejora de expresion escrita.", [
      ["Ideas principales y secundarias", "Distinguir informacion central y complementaria."],
      ["Texto narrativo", "Analizar ambiente, personajes, conflicto y desenlace."],
      ["Conectores", "Usar conectores para ordenar ideas en un texto."]
    ]),
    createCourse("Matematica", "Proporcionalidad, algebra inicial y geometria.", [
      ["Razones y proporciones", "Resolver problemas de comparacion y regla de tres."],
      ["Expresiones algebraicas", "Representar situaciones con variables y operaciones."],
      ["Angulos y poligonos", "Clasificar figuras y calcular medidas basicas."]
    ]),
    createCourse("Historia", "Sociedades medievales, mundo andino y cambios culturales.", [
      ["Edad Media", "Reconocer organizacion social, economica y cultural."],
      ["Tahuantinsuyo", "Identificar su expansion, organizacion y legado."],
      ["Encuentro de culturas", "Analizar cambios producidos por la conquista."]
    ]),
    createCourse("Ciencia y Tecnologia", "Ecosistemas, cuerpo humano y sustancias.", [
      ["Ecosistemas", "Relacionar factores bioticos, abioticos y cadenas alimentarias."],
      ["Sistema digestivo", "Explicar organos y procesos de nutricion."],
      ["Mezclas y sustancias", "Diferenciar mezclas, soluciones y sustancias puras."]
    ]),
    createCourse("DPCC", "Derechos, diversidad y vida democratica.", [
      ["Derechos del adolescente", "Reconocer derechos y situaciones de proteccion."],
      ["Diversidad cultural", "Valorar costumbres, lenguas e identidades del Peru."],
      ["Dialogo y acuerdos", "Resolver conflictos mediante escucha y negociacion."]
    ]),
    createCourse("Ingles", "Rutinas, gustos y descripcion de personas.", [
      ["Daily routines", "Describir actividades usando presente simple."],
      ["Likes and dislikes", "Expresar preferencias de forma oral y escrita."],
      ["Descriptions", "Describir apariencia y personalidad con vocabulario basico."]
    ])
  ],
  3: [
    createCourse("Comunicacion", "Argumentacion, lectura critica y produccion de textos.", [
      ["Texto argumentativo", "Identificar tesis, argumentos y conclusiones."],
      ["Inferencias", "Deducir informacion no explicita en textos."],
      ["Exposicion oral", "Organizar una presentacion clara y breve."]
    ]),
    createCourse("Matematica", "Ecuaciones, funciones iniciales y estadistica.", [
      ["Ecuaciones lineales", "Resolver ecuaciones de primer grado en problemas."],
      ["Plano cartesiano", "Ubicar puntos e interpretar graficas sencillas."],
      ["Medidas estadisticas", "Calcular promedio, mediana y moda."]
    ]),
    createCourse("Historia", "Modernidad, independencia y formacion republicana.", [
      ["Revoluciones modernas", "Relacionar cambios politicos, sociales y economicos."],
      ["Independencia del Peru", "Reconocer causas, etapas y personajes principales."],
      ["Inicio republicano", "Analizar dificultades de la nueva republica."]
    ]),
    createCourse("Ciencia y Tecnologia", "Celula, movimiento y tecnologia cotidiana.", [
      ["La celula", "Identificar partes y funciones basicas."],
      ["Movimiento y fuerza", "Explicar cambios de movimiento con ejemplos."],
      ["Soluciones tecnologicas", "Disenar propuestas simples para problemas del entorno."]
    ]),
    createCourse("DPCC", "Ciudadania, democracia y proyecto de vida.", [
      ["Estado y democracia", "Comprender instituciones y participacion ciudadana."],
      ["Convivencia democratica", "Analizar normas, deberes y derechos."],
      ["Proyecto de vida", "Definir metas personales y academicas."]
    ]),
    createCourse("Ingles", "Experiencias, planes y comunicacion funcional.", [
      ["Past simple", "Hablar de actividades pasadas con verbos regulares."],
      ["Future plans", "Expresar planes usando going to."],
      ["Reading practice", "Comprender textos cortos sobre experiencias."]
    ])
  ],
  4: [
    createCourse("Comunicacion", "Lectura critica, investigacion y textos formales.", [
      ["Analisis critico", "Evaluar intencion, postura y evidencias de un texto."],
      ["Ensayo breve", "Redactar una opinion sustentada con argumentos."],
      ["Fuentes confiables", "Seleccionar informacion util para investigar."]
    ]),
    createCourse("Matematica", "Funciones, geometria analitica y probabilidad.", [
      ["Funcion lineal", "Interpretar pendiente, intercepto y grafica."],
      ["Sistemas de ecuaciones", "Resolver situaciones con dos variables."],
      ["Probabilidad", "Calcular probabilidades en eventos simples."]
    ]),
    createCourse("Historia", "Republica, economia y cambios sociales en el Peru.", [
      ["Siglo XIX peruano", "Analizar cambios politicos y economicos."],
      ["Guerra del Pacifico", "Reconocer causas, desarrollo y consecuencias."],
      ["Movimientos sociales", "Relacionar demandas sociales con ciudadania."]
    ]),
    createCourse("Ciencia y Tecnologia", "Genetica, electricidad y ambiente.", [
      ["Herencia genetica", "Reconocer rasgos, genes y transmision hereditaria."],
      ["Circuitos electricos", "Identificar componentes y funcionamiento basico."],
      ["Impacto ambiental", "Proponer acciones para reducir problemas ambientales."]
    ]),
    createCourse("DPCC", "Etica, derechos humanos y participacion social.", [
      ["Derechos humanos", "Analizar casos y mecanismos de proteccion."],
      ["Etica ciudadana", "Tomar decisiones considerando consecuencias."],
      ["Participacion comunitaria", "Planificar acciones de mejora local."]
    ]),
    createCourse("Ingles", "Comprension, opinion y narracion de experiencias.", [
      ["Past continuous", "Describir acciones en progreso en el pasado."],
      ["Giving opinions", "Expresar acuerdo, desacuerdo y razones."],
      ["Comparatives", "Comparar personas, lugares y situaciones."]
    ])
  ],
  5: [
    createCourse("Comunicacion", "Preparacion para argumentar, investigar y comunicar.", [
      createFifthTopic(
        "Lectura critica avanzada",
        "Evaluar argumentos, sesgos y confiabilidad.",
        "La lectura critica permite revisar no solo que dice un texto, sino tambien como lo sostiene. Para comprenderlo mejor, identifica la postura del autor, las evidencias que usa y los posibles sesgos.",
        "Lee esta afirmacion: 'Todos los estudiantes aprenden mejor con videos'. Que palabra hace que la afirmacion sea demasiado absoluta?",
        ["todos"],
        ["Postura del autor", "Evidencia", "Sesgo", "Generalizacion"]
      ),
      createFifthTopic(
        "Texto academico",
        "Organizar introduccion, desarrollo y cierre.",
        "Un texto academico presenta una idea central con orden. La introduccion anuncia el tema, el desarrollo explica argumentos o datos, y el cierre resume la idea principal.",
        "Que parte del texto academico presenta los argumentos y explicaciones principales?",
        ["desarrollo"],
        ["Introduccion", "Tesis o idea central", "Desarrollo", "Conclusion"]
      ),
      createFifthTopic(
        "Debate",
        "Sostener una posicion con evidencias claras.",
        "Debatir no es solo opinar: consiste en defender una postura usando razones, ejemplos y evidencias. Tambien implica escuchar al otro y responder con respeto.",
        "En un debate, que se debe usar para sostener mejor una posicion?",
        ["evidencias", "argumentos", "razones"],
        ["Postura", "Argumento", "Contraargumento", "Respeto al turno"]
      )
    ]),
    createCourse("Matematica", "Modelacion, funciones y preparacion para estudios superiores.", [
      createFifthTopic(
        "Funciones cuadraticas",
        "Interpretar graficas, vertices y raices.",
        "Una funcion cuadratica se representa como una parabola. El vertice indica el punto maximo o minimo, y las raices son los valores donde la grafica corta el eje X.",
        "En la funcion y = x^2 - 4, una raiz positiva es:",
        ["2"],
        ["Parabola", "Vertice", "Raices", "Eje de simetria"]
      ),
      createFifthTopic(
        "Trigonometria basica",
        "Aplicar razones trigonometricas en problemas.",
        "La trigonometria relaciona angulos y lados de triangulos rectangulos. Las razones seno, coseno y tangente ayudan a calcular alturas, distancias y pendientes.",
        "En un triangulo rectangulo, que razon relaciona cateto opuesto entre hipotenusa?",
        ["seno"],
        ["Cateto opuesto", "Cateto adyacente", "Hipotenusa", "Seno, coseno y tangente"]
      ),
      createFifthTopic(
        "Estadistica aplicada",
        "Interpretar datos, graficos y conclusiones.",
        "La estadistica permite organizar datos y tomar decisiones. Promedio, mediana y moda ayudan a resumir informacion; los graficos facilitan comparar resultados.",
        "En los datos 10, 12, 12, 15, cual es la moda?",
        ["12"],
        ["Promedio", "Mediana", "Moda", "Grafico de barras"]
      )
    ]),
    createCourse("Historia", "Peru contemporaneo y contexto global.", [
      createFifthTopic(
        "Siglo XX peruano",
        "Analizar cambios politicos y sociales.",
        "El Peru del siglo XX tuvo migraciones internas, crecimiento urbano, reformas, crisis politicas y cambios sociales. Estos procesos ayudan a entender la sociedad actual.",
        "Que proceso hizo crecer rapidamente varias ciudades del Peru durante el siglo XX?",
        ["migracion", "migraciones"],
        ["Migracion interna", "Urbanizacion", "Reformas sociales", "Crisis politica"]
      ),
      createFifthTopic(
        "Globalizacion",
        "Relacionar economia, cultura y tecnologia.",
        "La globalizacion conecta paises mediante comercio, tecnologia, informacion y cultura. Sus efectos pueden generar oportunidades, pero tambien desigualdades.",
        "Menciona un elemento que conecta a los paises en la globalizacion.",
        ["comercio", "tecnologia", "internet", "cultura", "informacion"],
        ["Interdependencia", "Comercio internacional", "Tecnologia", "Diversidad cultural"]
      ),
      createFifthTopic(
        "Memoria historica",
        "Reflexionar sobre hechos recientes y ciudadania.",
        "La memoria historica ayuda a recordar hechos importantes para comprender sus causas, consecuencias y evitar repetir errores como violencia o discriminacion.",
        "Para que sirve la memoria historica en una sociedad?",
        ["recordar", "comprender", "evitar", "reflexionar"],
        ["Causas", "Consecuencias", "Testimonios", "Ciudadania responsable"]
      )
    ]),
    createCourse("Ciencia y Tecnologia", "Salud, fisica aplicada y proyectos tecnologicos.", [
      createFifthTopic(
        "Salud y prevencion",
        "Relacionar habitos, riesgos y cuidado personal.",
        "La prevencion consiste en tomar decisiones antes de que aparezca un problema de salud. Incluye alimentacion, actividad fisica, descanso, higiene y control de riesgos.",
        "Menciona un habito que ayuda a prevenir problemas de salud.",
        ["alimentacion", "ejercicio", "descanso", "higiene", "actividad fisica"],
        ["Prevencion", "Habitos saludables", "Factores de riesgo", "Autocuidado"]
      ),
      createFifthTopic(
        "Energia y movimiento",
        "Aplicar principios fisicos en situaciones reales.",
        "La energia permite producir cambios y movimiento. En la vida diaria se observa cuando un objeto cae, se desplaza, se frena o transforma energia en calor.",
        "Cuando una pelota cae, que tipo de energia aumenta durante el movimiento?",
        ["cinetica"],
        ["Energia cinetica", "Energia potencial", "Fuerza", "Trabajo"]
      ),
      createFifthTopic(
        "Proyecto cientifico",
        "Disenar, probar y comunicar una solucion.",
        "Un proyecto cientifico parte de un problema, propone una hipotesis, prueba una solucion y comunica resultados. Lo importante es explicar el proceso y aprender de la evidencia.",
        "Que se plantea antes de probar una solucion en un proyecto cientifico?",
        ["hipotesis", "problema"],
        ["Problema", "Hipotesis", "Experimentacion", "Resultados"]
      )
    ]),
    createCourse("DPCC", "Ciudadania responsable y decisiones para la vida adulta.", [
      createFifthTopic(
        "Participacion politica",
        "Comprender voto, instituciones y vigilancia ciudadana.",
        "La participacion politica incluye votar, informarse, opinar, fiscalizar y colaborar en la comunidad. No se limita a elecciones: tambien implica vigilancia ciudadana.",
        "Ademas de votar, que accion muestra participacion ciudadana?",
        ["informarse", "fiscalizar", "opinar", "participar", "vigilar"],
        ["Voto", "Instituciones", "Fiscalizacion", "Bien comun"]
      ),
      createFifthTopic(
        "Ciudadania digital",
        "Usar internet con responsabilidad y pensamiento critico.",
        "La ciudadania digital implica usar internet con respeto, seguridad y pensamiento critico. Tambien exige verificar informacion antes de compartirla.",
        "Que debes hacer antes de compartir una noticia en redes?",
        ["verificar", "comprobar", "revisar"],
        ["Huella digital", "Privacidad", "Verificacion", "Respeto en linea"]
      ),
      createFifthTopic(
        "Plan personal",
        "Organizar metas academicas, laborales y sociales.",
        "Un plan personal ayuda a ordenar metas y pasos concretos. Puede incluir estudios, habilidades, tiempos, recursos y decisiones para la vida adulta.",
        "Que elemento convierte una meta en algo mas facil de cumplir?",
        ["pasos", "plan", "plazo", "acciones"],
        ["Meta", "Plazo", "Acciones", "Evaluacion"]
      )
    ]),
    createCourse("Ingles", "Comunicacion para estudios, trabajo y vida diaria.", [
      createFifthTopic(
        "Present perfect",
        "Hablar de experiencias y logros.",
        "The present perfect connects past experiences with the present. It usually uses have or has plus the past participle: I have studied, She has visited.",
        "Complete: She ___ finished her homework.",
        ["has"],
        ["Have / has", "Past participle", "Experiences", "Achievements"]
      ),
      createFifthTopic(
        "Job and study vocabulary",
        "Usar vocabulario de estudios y trabajo.",
        "This vocabulary helps describe goals, skills and routines related to work or study. Words like career, application, interview and schedule are useful.",
        "Which word means entrevista in English?",
        ["interview"],
        ["Career", "Application", "Interview", "Schedule"]
      ),
      createFifthTopic(
        "Short presentations",
        "Preparar exposiciones breves en ingles.",
        "A short presentation needs a clear opening, two or three main ideas and a closing sentence. Simple connectors help organize the message.",
        "Which phrase can you use to start a presentation?",
        ["good morning", "hello", "today i will talk"],
        ["Opening", "Main ideas", "Connectors", "Closing"]
      )
    ])
  ]
};

const loginScreen = document.getElementById("loginScreen");
const dashboard = document.getElementById("dashboard");
const loginForm = document.getElementById("loginForm");
const formMessage = document.getElementById("formMessage");
const welcomeTitle = document.getElementById("welcomeTitle");
const studentSummary = document.getElementById("studentSummary");
const courseList = document.getElementById("courseList");
const courseDetail = document.getElementById("courseDetail");
const changeStudentButton = document.getElementById("changeStudentButton");

let currentGrade = "";
let selectedCourseName = "";
let activeResource = null;

function createCourse(name, description, topics) {
  return {
    name,
    description,
    topics: topics.map((topic) => {
      if (Array.isArray(topic)) {
        const [title, topicDescription] = topic;
        return {
          title,
          description: topicDescription,
          learning: createBasicLearning(title, topicDescription),
          resources
        };
      }

      return {
        ...topic,
        learning: topic.learning || createBasicLearning(topic.title, topic.description),
        resources
      };
    })
  };
}

function createFifthTopic(title, description, summary, question, answers, concepts) {
  return {
    title,
    description,
    learning: {
      summary: `${summary} ${topicFocusLibrary[title] || ""}`,
      practice: {
        question,
        answers,
        hint: "Lee la pregunta, escribe una respuesta corta y luego compruebala."
      },
      review: concepts.map((concept) => createConceptReview(title, concept))
    }
  };
}

function createConceptReview(topicTitle, concept) {
  const review = conceptReviewLibrary[concept];

  return {
    title: concept,
    detail: review?.[0] || buildConceptDetail(topicTitle, concept),
    example: review?.[1] || buildConceptExample(topicTitle, concept),
    checkpoint: `Antes de marcarlo como repasado, intenta explicar "${concept}" con tus palabras y relacionarlo con "${topicTitle}".`
  };
}

function buildConceptDetail(topicTitle, concept) {
  return `En el tema "${topicTitle}", el concepto "${concept}" es una idea clave que ayuda a ordenar lo que estas estudiando. Primero identifica que significa, luego observa como se usa dentro del tema y finalmente conectalo con un ejemplo concreto. Si puedes explicar esa relacion sin leer el resumen, ya tienes una comprension inicial del concepto.`;
}

function buildConceptExample(topicTitle, concept) {
  return `Ejemplo de repaso: si el tema es "${topicTitle}", pregunta como aparece "${concept}" en una situacion real, en un texto, en un problema o en una decision cotidiana. Esa conexion evita memorizar palabras sueltas.`;
}

function createBasicLearning(title, description) {
  return {
    summary: `${title}: ${description} Este contenido se ampliara en una siguiente fase.`,
    practice: {
      question: `Explica con tus palabras que significa: ${title}.`,
      answers: [],
      hint: "Respuesta libre para practicar la explicacion del tema."
    },
    review: [title, "Idea principal", "Ejemplo practico"].map((concept) => createConceptReview(title, concept))
  };
}

function formatGrade(grade) {
  const gradeNames = {
    1: "1ro de secundaria",
    2: "2do de secundaria",
    3: "3ro de secundaria",
    4: "4to de secundaria",
    5: "5to de secundaria"
  };

  return gradeNames[grade] || `${grade} de secundaria`;
}

function showDashboard(student) {
  currentGrade = student.grade;
  selectedCourseName = "";
  activeResource = null;

  welcomeTitle.textContent = `Hola, ${student.name}`;
  studentSummary.textContent = `${formatGrade(student.grade)} - ${student.school}`;

  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");

  renderCourses();
  renderEmptyDetail();
}

function renderCourses() {
  const courses = coursesByGrade[currentGrade] || [];
  courseList.innerHTML = "";

  courses.forEach((course) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "course-card";
    button.setAttribute("aria-pressed", String(course.name === selectedCourseName));

    if (course.name === selectedCourseName) {
      button.classList.add("active");
    }

    button.innerHTML = `
      <h3>${course.name}</h3>
      <p>${course.description}</p>
    `;

    button.addEventListener("click", () => {
      selectedCourseName = course.name;
      activeResource = null;
      renderCourses();
      renderCourseDetail(course);
    });

    courseList.appendChild(button);
  });
}

function renderEmptyDetail() {
  courseDetail.innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">+</span>
      <h2>Elige un curso</h2>
      <p>Aqui apareceran los temas y recursos de practica.</p>
    </div>
  `;
}

function renderCourseDetail(course) {
  const topicsMarkup = course.topics.map((topic, topicIndex) => `
    <section class="topic-card">
      <h3>${topic.title}</h3>
      <p class="topic-description">${topic.description}</p>
      <div class="resource-list">
        ${topic.resources.map((resource) => `
          <button
            type="button"
            class="resource-button"
            data-topic-index="${topicIndex}"
            data-resource-key="${resource.key}"
            aria-label="${resource.label} de ${topic.title}"
          >
            ${resource.label}
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");

  courseDetail.innerHTML = `
    <header class="detail-header">
      <p class="section-label">${formatGrade(currentGrade)}</p>
      <h2>${course.name}</h2>
      <p class="course-description">${course.description}</p>
    </header>
    <div class="topic-list">
      ${topicsMarkup}
    </div>
    <div class="study-workspace" id="studyWorkspace">
      <p>Selecciona un recurso de cualquier tema para ver el contenido aqui.</p>
    </div>
  `;

  courseDetail.querySelectorAll(".resource-button").forEach((button) => {
    button.addEventListener("click", () => {
      const topicIndex = Number(button.dataset.topicIndex);
      const resourceKey = button.dataset.resourceKey;
      activeResource = { topicIndex, resourceKey };
      renderStudyResource(course, topicIndex, resourceKey);
    });
  });

  if (activeResource) {
    renderStudyResource(course, activeResource.topicIndex, activeResource.resourceKey);
  }
}

function renderStudyResource(course, topicIndex, resourceKey) {
  const topic = course.topics[topicIndex];
  const workspace = document.getElementById("studyWorkspace");

  if (!topic || !workspace) {
    return;
  }

  const resourceTitle = resources.find((resource) => resource.key === resourceKey)?.label || "Recurso";

  courseDetail.querySelectorAll(".resource-button").forEach((button) => {
    const isActive = Number(button.dataset.topicIndex) === topicIndex && button.dataset.resourceKey === resourceKey;
    button.classList.toggle("active", isActive);
  });

  if (resourceKey === "summary") {
    workspace.innerHTML = `
      <section class="study-card">
        <p class="section-label">${resourceTitle}</p>
        <h3>${topic.title}</h3>
        <p>${topic.learning.summary}</p>
      </section>
    `;
  }

  if (resourceKey === "practice") {
    workspace.innerHTML = `
      <section class="study-card">
        <p class="section-label">${resourceTitle}</p>
        <h3>${topic.title}</h3>
        <p class="practice-question">${topic.learning.practice.question}</p>
        <label class="practice-label" for="practiceAnswer">Tu respuesta</label>
        <input id="practiceAnswer" class="practice-input" type="text" placeholder="Escribe una respuesta corta">
        <div class="practice-actions">
          <button type="button" class="primary-button compact-button" id="checkPracticeButton">Comprobar</button>
          <button type="button" class="resource-button" id="showHintButton">Ver pista</button>
        </div>
        <p class="practice-feedback" id="practiceFeedback" aria-live="polite"></p>
      </section>
    `;

    document.getElementById("checkPracticeButton").addEventListener("click", () => {
      checkPracticeAnswer(topic);
    });

    document.getElementById("showHintButton").addEventListener("click", () => {
      document.getElementById("practiceFeedback").textContent = topic.learning.practice.hint;
    });
  }

  if (resourceKey === "review") {
    const conceptsMarkup = topic.learning.review.map((concept, index) => `
      <article class="concept-item" data-concept-index="${index}" data-reviewed="false">
        <button type="button" class="concept-toggle" aria-expanded="false">
          <span>${concept.title}</span>
          <strong>Pendiente</strong>
        </button>
        <div class="concept-detail hidden">
          <p>${concept.detail}</p>
          <p>${concept.example}</p>
          <p class="concept-checkpoint">${concept.checkpoint}</p>
          <button type="button" class="primary-button compact-button mark-reviewed-button">
            Marcar como repasado
          </button>
        </div>
      </article>
    `).join("");

    workspace.innerHTML = `
      <section class="study-card">
        <p class="section-label">${resourceTitle}</p>
        <h3>${topic.title}</h3>
        <p>Haz click en un concepto para abrir su repaso. Cuando termines de leerlo y entenderlo, marcalo como repasado.</p>
        <div class="concept-list">${conceptsMarkup}</div>
        <p class="review-progress" id="reviewProgress">0 de ${topic.learning.review.length} conceptos repasados</p>
      </section>
    `;

    workspace.querySelectorAll(".concept-toggle").forEach((button) => {
      button.addEventListener("click", () => toggleConceptReview(button));
    });

    workspace.querySelectorAll(".mark-reviewed-button").forEach((button) => {
      button.addEventListener("click", () => markConceptReviewed(button, topic.learning.review.length));
    });
  }
}

function checkPracticeAnswer(topic) {
  const input = document.getElementById("practiceAnswer");
  const feedback = document.getElementById("practiceFeedback");
  const answer = normalizeText(input.value);
  const acceptedAnswers = topic.learning.practice.answers || [];

  if (!answer) {
    feedback.textContent = "Escribe una respuesta antes de comprobar.";
    feedback.className = "practice-feedback";
    return;
  }

  if (acceptedAnswers.length === 0) {
    feedback.textContent = "Respuesta registrada. Comparala con el resumen y vuelve a intentarlo si quieres mejorarla.";
    feedback.className = "practice-feedback success";
    return;
  }

  const isCorrect = acceptedAnswers.some((acceptedAnswer) => answer.includes(normalizeText(acceptedAnswer)));
  feedback.textContent = isCorrect
    ? "Correcto. La idea principal esta bien identificada."
    : `Casi. Revisa el resumen y busca una respuesta relacionada con: ${acceptedAnswers[0]}.`;
  feedback.className = isCorrect ? "practice-feedback success" : "practice-feedback warning";
}

function updateReviewProgress(totalConcepts) {
  const progress = document.getElementById("reviewProgress");
  const checkedCount = document.querySelectorAll('.concept-item[data-reviewed="true"]').length;
  progress.textContent = `${checkedCount} de ${totalConcepts} conceptos repasados`;
}

function toggleConceptReview(button) {
  const conceptItem = button.closest(".concept-item");
  const detail = conceptItem.querySelector(".concept-detail");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isExpanded));
  detail.classList.toggle("hidden", isExpanded);
}

function markConceptReviewed(button, totalConcepts) {
  const conceptItem = button.closest(".concept-item");
  const status = conceptItem.querySelector(".concept-toggle strong");

  conceptItem.dataset.reviewed = "true";
  conceptItem.classList.add("reviewed");
  status.textContent = "Repasado";
  button.textContent = "Repaso completado";
  button.disabled = true;
  updateReviewProgress(totalConcepts);
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function resetLogin() {
  loginForm.reset();
  formMessage.textContent = "";
  currentGrade = "";
  selectedCourseName = "";
  activeResource = null;
  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  document.getElementById("studentName").focus();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const student = {
    name: String(formData.get("studentName") || "").trim(),
    grade: String(formData.get("studentGrade") || "").trim(),
    school: String(formData.get("studentSchool") || "").trim()
  };

  if (!student.name || !student.grade || !student.school) {
    formMessage.textContent = "Completa nombre, grado y colegio para ingresar.";
    return;
  }

  formMessage.textContent = "";
  showDashboard(student);
});

changeStudentButton.addEventListener("click", resetLogin);
