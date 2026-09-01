OBJETIVO DEL PROYECTO:
Proporcionar una plataforma digital centralizada y accesible para la capacitación técnica de instaladores de dispositivos GPS. El manual busca estandarizar los procesos de instalación, garantizar la seguridad del personal y del vehículo, y mejorar la calidad del servicio técnico.

CARACTERÍSTICAS PRINCIPALES:
- Interfaz de usuario intuitiva mediante un diseño de acordeón para facilitar la navegación por temas.
- Contenido técnico exhaustivo que abarca desde fundamentos de GPS hasta técnicas avanzadas de corte de ignición.
- Formato de texto justificado para una lectura profesional y descansada.
- Integración visual de diagramas y fotografías técnicas en las secciones correspondientes.
- Protocolos de seguridad críticos destacados para la prevención de accidentes.

ESTRUCTURA DEL PROYECTO:
- /index.html: El archivo principal que contiene todo el manual técnico, estructura HTML, estilos CSS y lógica JavaScript para la interactividad.
- /images/: Directorio que almacena todos los recursos visuales, diagramas y capturas técnicas referenciadas en el manual.
- Manual Borrador I & II .pdf: Documentos fuente utilizados para la extracción inicial del contenido.

FUNCIONAMIENTO GENERAL:
El manual opera como una aplicación web estática (SPA). Al abrir index.html en cualquier navegador moderno, el usuario visualiza una tabla de contenido y una serie de botones expandibles (acordeones). Cada botón representa un módulo o sección temática. Al hacer clic, se despliega el contenido detallado que incluye texto técnico, listas de pasos, notas de seguridad e imágenes ilustrativas.

DETALLES TÉCNICOS RELEVANTES:
- El diseño es responsivo, adaptándose a diferentes tamaños de pantalla (móviles, tablets y PC).
- Se ha realizado un proceso de limpieza de artefactos de conversión (números de página, encabezados repetitivos) para asegurar la continuidad del texto.
- La lógica de los acordeones se maneja mediante JavaScript nativo, eliminando dependencias externas y asegurando una carga rápida.
- Se ha prestado especial atención a la coherencia en la redacción, uniendo oraciones fragmentadas por la extracción de PDF original.

NORMAS DE DESARROLLO:
El proyecto se rige por un proceso de desarrollo estándar obligatorio detallado en NORMAS_DESARROLLO.md. Este proceso incluye fases de auditoría, registro de hallazgos, respaldos previos y revisiones de código para garantizar la máxima calidad y trazabilidad.

---
CHECKLIST DE OBJETIVOS Y TAREAS PENDIENTES

SECCIÓN 1 — PORTADA Y CONTROL DOCUMENTAL
Identidad visual
[x] Rediseñar portada profesional.
[x] Agregar logo corporativo.
[x] Agregar nombre oficial del documento.
[x] Agregar versión del manual.
[x] Agregar fecha de emisión.
[x] Agregar departamento responsable.
[x] Agregar fotografía profesional relacionada.
[x] Agregar código interno del documento.
Control documental
[x] Crear tabla de control de versiones.
[x] Agregar historial de cambios.
[x] Agregar autor/revisor/aprobador
[x] Agregar política de actualizaciones.

SECCIÓN 2 — INTRODUCCIÓN AL GPS
Explicación técnica real del GPS
[x] Explicar diferencia entre GPS y rastreador GPS.
[x] Explicar GNSS.
[x] Explicar GPS, GLONASS, Galileo y BeiDou.
[x] Explicar triangulación celular.
[x] Explicar AGPS.
[x] Explicar comunicación GSM/LTE.
[x] Explicar cómo el GPS transmite datos.
[x] Explicar función de la SIM.
[x] Explicar APN.
[x] Explicar IMEI e ICCID.
[x] Explicar plataformas de monitoreo.
[x] Explicar TCP/IP básico.
[x] Explicar latencia y frecuencia de reporte.
[x] Explicar LBS (Location Based Service).
Imágenes a agregar
[x] Diagrama de funcionamiento GPS.
[x] Imagen de satélites + red móvil.
[x] Imagen interna de un GPS.
[x] Imagen de módulo GSM.
[x] Imagen de antena GNSS.

SECCIÓN 3 — FUNDAMENTOS DE ELECTRÓNICA VEHICULAR
Conceptos básicos
[x] Explicar voltaje.
[x] Explicar corriente.
[x] Explicar resistencia.
[x] Explicar potencia.
[x] Explicar continuidad.
[x] Explicar cortocircuito.
[x] Explicar circuito abierto.
[x] Explicar polaridad.
[x] Explicar tierra/chasis.
Ley de Ohm
[x] Agregar explicación práctica.
[x] Agregar ejemplos reales automotrices.
[x] Explicar caídas de voltaje.
[x] Explicar resistencia en conexiones.
Fusibles
[x] Explicar función de fusibles.
[x] Explicar tipos de fusibles.
[x] Explicar mini fuse.
[x] Explicar low profile.
[x] Explicar JCASE.
[x] Explicar MAXI fuse.
[x] Explicar Micro2.
[x] Explicar amperajes.
[x] Explicar cómo probar continuidad.
[x] Explicar add-a-fuse.
[x] Explicar riesgos de puentes.
Señales eléctricas
[x] Explicar ACC.
[x] Explicar IGN.
[x] Explicar BAT+.
[x] Explicar señales PWM.
[x] Explicar señales analógicas.
[x] Explicar señales digitales.
Imágenes a agregar
[x] Diagrama Ley de Ohm.
[x] Tabla de fusibles.
[x] Fotografías reales de fusibles.
[x] Diagramas de señales ACC/IGN/BAT.
[x] Gráficas de señales PWM.

SECCIÓN 4 — ELECTRÓNICA AUTOMOTRIZ MODERNA
CAN BUS
[x] Explicar qué es CAN BUS.
[x] Explicar CAN High y CAN Low.
[x] Explicar comunicación entre módulos.
[x] Explicar BCM.
[x] Explicar ECM.
[x] Explicar ABS.
[x] Explicar SRS.
[x] Explicar multiplexado.
Riesgos
[x] Explicar riesgos de cortar CAN.
[x] Explicar riesgos de inyectar voltaje.
[x] Explicar daños por probador de línea.
Identificación
[x] Explicar pares trenzados.
[x] Explicar colores comunes.
[x] Explicar mediciones básicas.
LIN BUS
[x] Explicar concepto básico.
[x] Explicar diferencias con CAN.
Imágenes a agregar
[x] Imagen de CAN BUS real.
[x] Imagen de arnés multiplexado.
[x] Diagrama CAN.
[x] Foto de módulo BCM.

SECCIÓN 5 — SEGURIDAD AUTOMOTRIZ
Airbags y SRS
[x] Explicar sistema SRS.
[x] Explicar airbags.
[x] Explicar pretensores.
[x] Explicar sensores de impacto.
[x] Explicar módulos SRS.
Procedimientos seguros
[x] Explicar desconexión segura.
[x] Explicar descarga de capacitores.
[x] Explicar tiempos de espera.
Riesgos
[x] Explicar detonación accidental.
[x] Explicar daños al módulo SRS.
[x] Explicar generación de DTC.
Prohibiciones
[x] NO usar lámpara de prueba.
[x] NO medir resistencia.
[x] NO cortar cables SRS.
Vehículos híbridos
[x] Explicar cables naranja HV.
[x] Explicar riesgos eléctricos.
[x] Explicar sistemas de alto voltaje.
[x] Explicar qué NO intervenir.
ESD y protección
[x] Explicar electricidad estática.
[x] Explicar protección de módulos.
[x] Explicar protección ocular.
[x] Explicar uso de guantes.
Imágenes a agregar
[x] Foto de conectores SRS.
[x] Foto de cables HV naranja.
[x] Foto de advertencias híbridas.
[x] Foto de módulos SRS.

SECCIÓN 6 — HERRAMIENTAS
Herramientas básicas
[x] Explicar multímetro.
[x] Explicar probador de línea.
[x] Explicar remachadora.
[x] Explicar trim tools.
[x] Explicar cautín.
[x] Explicar pistola de calor.
[x] Explicar pinza amperimétrica.
Herramientas avanzadas
[x] Explicar osciloscopio.
[x] Explicar scanner OBD.
[x] Explicar Power Probe.
Buenas prácticas
[x] Explicar mantenimiento.
[x] Explicar almacenamiento.
[x] Explicar calibración.
Imágenes a agregar
[x] Fotografías reales herramientas.
[x] Comparativa herramienta buena/mala.
[x] Ejemplo uso correcto.

SECCIÓN 7 — DESMONTAJE Y MANIPULACIÓN
Técnicas
[x] Mejorar técnicas desmontaje.
[x] Explicar clips ocultos.
[x] Explicar paneles delicados.
[x] Explicar manejo de conectores.
Prevención daños
[x] Explicar protección de superficies.
[x] Explicar almacenamiento piezas.
[x] Explicar manejo tornillos.
Imágenes a agregar
[x] Fotografías clips comunes.
[x] Foto panel desmontado.
[x] Errores comunes desmontaje.

SECCIÓN 8 — IDENTIFICACIÓN DE CABLES
Expansión técnica
[x] Explicar identificación segura.
[x] Explicar cableado coaxial.
[x] Explicar fibra óptica.
[x] Explicar pares trenzados.
[x] Explicar señales delicadas.
Diagnóstico
[x] Explicar uso seguro del multímetro.
[x] Explicar cómo verificar ignición.
[x] Explicar señales negativas.
Advertencias
[x] Riesgos en vehículos modernos.
[x] Riesgos con BCM.
[x] Riesgos CAN.
Imágenes a agregar
[x] Fotos reales de arneses.
[x] Comparación coaxial/fibra/cable común.
[x] Foto cableado SRS.
[x] Foto pares trenzados.

SECCIÓN 9 — RELAYS Y BLOQUEOS
Relays
[x] Explicar relay 4 pines.
[x] Explicar relay 5 pines.
[x] Explicar relays invertidos.
[x] Explicar relays negativos.
[x] Explicar relays positivos.
Bloqueos
[x] Explicar bloqueo ignición.
[x] Explicar bloqueo starter.
[x] Explicar bloqueo bomba combustible.
[x] Explicar bloqueos seguros.
Push Start
[x] Explicar riesgos Push Start.
[x] Explicar BCM.
[x] Explicar Smart Key.
Casos especiales
[x] Explicar motos.
[x] Explicar vehículos 24V.
[x] Explicar híbridos.
Diagramas a agregar
[x] Relay estándar.
[x] Relay negativo.
[x] Relay invertido.
[x] Push Start.
[x] Bloqueo bomba.
[x] Bloqueo starter.

SECCIÓN 10 — EMPALMES Y ENCAPSULADO
Empalmes
[x] Explicar Western Union completo.
[x] Explicar Western Short.
[x] Explicar derivaciones.
[x] Explicar empalmes tipo T.
Soldadura
[x] Explicar estañado.
[x] Explicar flux.
[x] Explicar temperatura correcta.
[x] Explicar termoretráctil.
Encintado
[x] Explicar técnicas OEM.
[x] Explicar tensión correcta.
[x] Explicar rutas de arnés.
Imágenes a agregar
[x] Empalme correcto.
[x] Empalme incorrecto.
[x] Encintado OEM.
[x] Encintado defectuoso.

SECCIÓN 11 — INSTALACIÓN DEL GPS
Planeación
[x] Explicar planificación previa.
[x] Explicar rutas seguras.
[x] Explicar ocultamiento.
Ubicación GPS
[x] Explicar dónde NO instalar.
[x] Explicar orientación antena.
[x] Explicar interferencia metálica.
[x] Explicar humedad y vibración.
Alimentación
[x] Explicar positivos constantes.
[x] Explicar tierras correctas.
[x] Explicar protección fusibles.
Imágenes a agregar
[x] Instalación correcta.
[x] Instalación incorrecta.
[x] Ubicaciones ideales.
[x] Errores comunes.

SECCIÓN 12 — PERIFÉRICOS
Botón de pánico
[x] Mejorar explicación.
[x] Explicar señales negativas.
[x] Explicar ocultamiento seguro.
Micrófonos
[x] Explicar instalación.
[x] Explicar ubicación.
[x] Explicar ruido/interferencia.
Apertura de seguros
[x] Explicar tipos de sistemas.
[x] Explicar pulsos positivos/negativos.
Sensores adicionales
[x] Explicar sensores puerta.
[x] Explicar sensores temperatura.
[x] Explicar sensores combustible.
Imágenes a agregar
[x] Botón oculto.
[x] Micrófono instalado.
[x] Diagramas periféricos.

SECCIÓN 13 — DIAGNÓSTICO Y FALLAS
Diagnóstico
[x] Crear sección completa.
[x] Explicar fallas comunes.
[x] Explicar diagnóstico eléctrico.
[x] Explicar diagnóstico GSM.
[x] Explicar diagnóstico GNSS.
Consumo parasitario
[x] Explicar sleep mode.
[x] Explicar wake-up.
[x] Explicar miliamperaje normal.
Tabla de fallas
[x] GPS no reporta.
[x] Sin señal GPS.
[x] Relay pegado.
[x] Descarga batería.
[x] Ignición falsa.
Imágenes a agregar
[x] Lecturas multímetro.
[x] Ejemplos reales fallas.
[x] Capturas plataforma GPS.

SECCIÓN 14 — ESTÁNDARES DE CALIDAD
Calidad instalación
[x] Crear estándares visuales.
[x] Explicar instalación OEM style.
[x] Explicar ocultamiento profesional.
[x] Explicar organización arnés.
Auditoría
[x] Crear checklist auditoría.
[x] Crear criterios aprobación.
Comparativas
[x] Buena instalación VS mala instalación.
Imágenes a agregar
[x] Ejemplos profesionales.
[x] Ejemplos incorrectos.

SECCIÓN 15 — PROCEDIMIENTO FINAL Y ENTREGA
Checklist post-instalación
[x] GPS reporta.
[x] Señal GNSS.
[x] Señal GSM.
[x] Ignición correcta.
[x] Bloqueo correcto.
[x] Botón pánico.
[x] Apertura seguros.
[x] Revisión testigos.
[x] Escaneo DTC.
[x] Limpieza final.
Evidencia
[x] Fotografías finales.
[x] Evidencia instalación.
[x] Documentación cliente.

SECCIÓN 16 — DISEÑO Y REDACCIÓN
Redacción
[x] Corregir ortografía.
[x] Corregir tildes.
[x] Uniformar términos técnicos.
[x] Eliminar lenguaje informal.
Formato
[x] Uniformar títulos.
[x] Uniformar numeración.
[x] Mejorar márgenes.
[x] Mejorar espaciado.
Diseño visual
[x] Definir paleta corporativa.
[x] Agregar iconografía.
[x] Mejorar tablas.
[x] Agregar cuadros informativos.

SECCIÓN 17 — CASOS REALES Y EXPERIENCIA DE CAMPO
Casos reales
[x] Relay mal conectado.
[x] GPS descargando batería.
[x] Airbag activado.
[x] Falsa ignición.
[x] Problema CAN.
[x] Interferencia GNSS.
Soluciones
[x] Diagnóstico.
[x] Corrección.
[x] Prevención futura.

SECCIÓN 18 — MATERIAL VISUAL GENERAL
Fotografías reales
[x] Instalaciones reales empresa.
[x] Herramientas reales.
[x] Vehículos reales.
[x] Daños reales.
Diagramas
[x] Diagramas eléctricos.
[x] Diagramas flujo.
[x] Diagramas relays.
[x] Diagramas CAN.
Recursos gráficos
[x] Íconos técnicos.
[x] Advertencias visuales.
[x] Señalización riesgos.
[x] Flujos de proceso.

---
PRÓXIMAS IMPLEMENTACIONES (ROADMAP ACORDADO)
1. Cuestionarios modulares independientes (10+ preguntas por módulo) con sistema de calificación automático.
2. Presentaciones HTML independientes especializadas para cada uno de los 10 módulos del manual.
3. Microservicio backend en Google Apps Script (`google_apps_script.js`) conectado a Google Sheets:
   - Pestaña 'Usuarios': Registro de usuarios, autenticación y credenciales de cuenta.
   - Pestaña 'Progreso_Y_Evaluaciones': Seguimiento de notas, avance de aprendizaje e interacciones en simuladores.
