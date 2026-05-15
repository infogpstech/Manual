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

---
CHECKLIST DE OBJETIVOS Y TAREAS PENDIENTES

SECCIÓN 1 — PORTADA Y CONTROL DOCUMENTAL
Identidad visual
[ ] Rediseñar portada profesional.
[ ] Agregar logo corporativo.
[ ] Agregar nombre oficial del documento.
[ ] Agregar versión del manual.
[ ] Agregar fecha de emisión.
[ ] Agregar departamento responsable.
[ ] Agregar fotografía profesional relacionada.
[ ] Agregar código interno del documento.
Control documental
[ ] Crear tabla de control de versiones.
[ ] Agregar historial de cambios.
[ ] Agregar autor/revisor/aprobador
[ ] Agregar política de actualizaciones.

SECCIÓN 2 — INTRODUCCIÓN AL GPS
Explicación técnica real del GPS
[ ] Explicar diferencia entre GPS y rastreador GPS.
[ ] Explicar GNSS.
[ ] Explicar GPS, GLONASS, Galileo y BeiDou.
[ ] Explicar triangulación celular.
[ ] Explicar AGPS.
[ ] Explicar comunicación GSM/LTE.
[ ] Explicar cómo el GPS transmite datos.
[ ] Explicar función de la SIM.
[ ] Explicar APN.
[ ] Explicar IMEI e ICCID.
[ ] Explicar plataformas de monitoreo.
[ ] Explicar TCP/IP básico.
[ ] Explicar latencia y frecuencia de reporte.
[ ] Explicar LBS (Location Based Service).
Imágenes a agregar
[ ] Diagrama de funcionamiento GPS.
[ ] Imagen de satélites + red móvil.
[ ] Imagen interna de un GPS.
[ ] Imagen de módulo GSM.
[ ] Imagen de antena GNSS.

SECCIÓN 3 — FUNDAMENTOS DE ELECTRÓNICA VEHICULAR
Conceptos básicos
[ ] Explicar voltaje.
[ ] Explicar corriente.
[ ] Explicar resistencia.
[ ] Explicar potencia.
[ ] Explicar continuidad.
[ ] Explicar cortocircuito.
[ ] Explicar circuito abierto.
[ ] Explicar polaridad.
[ ] Explicar tierra/chasis.
Ley de Ohm
[ ] Agregar explicación práctica.
[ ] Agregar ejemplos reales automotrices.
[ ] Explicar caídas de voltaje.
[ ] Explicar resistencia en conexiones.
Fusibles
[ ] Explicar función de fusibles.
[ ] Explicar tipos de fusibles.
[ ] Explicar mini fuse.
[ ] Explicar low profile.
[ ] Explicar JCASE.
[ ] Explicar MAXI fuse.
[ ] Explicar Micro2.
[ ] Explicar amperajes.
[ ] Explicar cómo probar continuidad.
[ ] Explicar add-a-fuse.
[ ] Explicar riesgos de puentes.
Señales eléctricas
[ ] Explicar ACC.
[ ] Explicar IGN.
[ ] Explicar BAT+.
[ ] Explicar señales PWM.
[ ] Explicar señales analógicas.
[ ] Explicar señales digitales.
Imágenes a agregar
[ ] Diagrama Ley de Ohm.
[ ] Tabla de fusibles.
[ ] Fotografías reales de fusibles.
[ ] Diagramas de señales ACC/IGN/BAT.
[ ] Gráficas de señales PWM.

SECCIÓN 4 — ELECTRÓNICA AUTOMOTRIZ MODERNA
CAN BUS
[ ] Explicar qué es CAN BUS.
[ ] Explicar CAN High y CAN Low.
[ ] Explicar comunicación entre módulos.
[ ] Explicar BCM.
[ ] Explicar ECM.
[ ] Explicar ABS.
[ ] Explicar SRS.
[ ] Explicar multiplexado.
Riesgos
[ ] Explicar riesgos de cortar CAN.
[ ] Explicar riesgos de inyectar voltaje.
[ ] Explicar daños por probador de línea.
Identificación
[ ] Explicar pares trenzados.
[ ] Explicar colores comunes.
[ ] Explicar mediciones básicas.
LIN BUS
[ ] Explicar concepto básico.
[ ] Explicar diferencias con CAN.
Imágenes a agregar
[ ] Imagen de CAN BUS real.
[ ] Imagen de arnés multiplexado.
[ ] Diagrama CAN.
[ ] Foto de módulo BCM.

SECCIÓN 5 — SEGURIDAD AUTOMOTRIZ
Airbags y SRS
[ ] Explicar sistema SRS.
[ ] Explicar airbags.
[ ] Explicar pretensores.
[ ] Explicar sensores de impacto.
[ ] Explicar módulos SRS.
Procedimientos seguros
[ ] Explicar desconexión segura.
[ ] Explicar descarga de capacitores.
[ ] Explicar tiempos de espera.
Riesgos
[ ] Explicar detonación accidental.
[ ] Explicar daños al módulo SRS.
[ ] Explicar generación de DTC.
Prohibiciones
[ ] NO usar lámpara de prueba.
[ ] NO medir resistencia.
[ ] NO cortar cables SRS.
Vehículos híbridos
[ ] Explicar cables naranja HV.
[ ] Explicar riesgos eléctricos.
[ ] Explicar sistemas de alto voltaje.
[ ] Explicar qué NO intervenir.
ESD y protección
[ ] Explicar electricidad estática.
[ ] Explicar protección de módulos.
[ ] Explicar protección ocular.
[ ] Explicar uso de guantes.
Imágenes a agregar
[ ] Foto de conectores SRS.
[ ] Foto de cables HV naranja.
[ ] Foto de advertencias híbridas.
[ ] Foto de módulos SRS.

SECCIÓN 6 — HERRAMIENTAS
Herramientas básicas
[ ] Explicar multímetro.
[ ] Explicar probador de línea.
[ ] Explicar remachadora.
[ ] Explicar trim tools.
[ ] Explicar cautín.
[ ] Explicar pistola de calor.
[ ] Explicar pinza amperimétrica.
Herramientas avanzadas
[ ] Explicar osciloscopio.
[ ] Explicar scanner OBD.
[ ] Explicar Power Probe.
Buenas prácticas
[ ] Explicar mantenimiento.
[ ] Explicar almacenamiento.
[ ] Explicar calibración.
Imágenes a agregar
[ ] Fotografías reales herramientas.
[ ] Comparativa herramienta buena/mala.
[ ] Ejemplo uso correcto.

SECCIÓN 7 — DESMONTAJE Y MANIPULACIÓN
Técnicas
[ ] Mejorar técnicas desmontaje.
[ ] Explicar clips ocultos.
[ ] Explicar paneles delicados.
[ ] Explicar manejo de conectores.
Prevención daños
[ ] Explicar protección de superficies.
[ ] Explicar almacenamiento piezas.
[ ] Explicar manejo tornillos.
Imágenes a agregar
[ ] Fotografías clips comunes.
[ ] Foto panel desmontado.
[ ] Errores comunes desmontaje.

SECCIÓN 8 — IDENTIFICACIÓN DE CABLES
Expansión técnica
[ ] Explicar identificación segura.
[ ] Explicar cableado coaxial.
[ ] Explicar fibra óptica.
[ ] Explicar pares trenzados.
[ ] Explicar señales delicadas.
Diagnóstico
[ ] Explicar uso seguro del multímetro.
[ ] Explicar cómo verificar ignición.
[ ] Explicar señales negativas.
Advertencias
[ ] Riesgos en vehículos modernos.
[ ] Riesgos con BCM.
[ ] Riesgos CAN.
Imágenes a agregar
[ ] Fotos reales de arneses.
[ ] Comparación coaxial/fibra/cable común.
[ ] Foto cableado SRS.
[ ] Foto pares trenzados.

SECCIÓN 9 — RELAYS Y BLOQUEOS
Relays
[ ] Explicar relay 4 pines.
[ ] Explicar relay 5 pines.
[ ] Explicar relays invertidos.
[ ] Explicar relays negativos.
[ ] Explicar relays positivos.
Bloqueos
[ ] Explicar bloqueo ignición.
[ ] Explicar bloqueo starter.
[ ] Explicar bloqueo bomba combustible.
[ ] Explicar bloqueos seguros.
Push Start
[ ] Explicar riesgos Push Start.
[ ] Explicar BCM.
[ ] Explicar Smart Key.
Casos especiales
[ ] Explicar motos.
[ ] Explicar vehículos 24V.
[ ] Explicar híbridos.
Diagramas a agregar
[ ] Relay estándar.
[ ] Relay negativo.
[ ] Relay invertido.
[ ] Push Start.
[ ] Bloqueo bomba.
[ ] Bloqueo starter.

SECCIÓN 10 — EMPALMES Y ENCAPSULADO
Empalmes
[ ] Explicar Western Union completo.
[ ] Explicar Western Short.
[ ] Explicar derivaciones.
[ ] Explicar empalmes tipo T.
Soldadura
[ ] Explicar estañado.
[ ] Explicar flux.
[ ] Explicar temperatura correcta.
[ ] Explicar termoretráctil.
Encintado
[ ] Explicar técnicas OEM.
[ ] Explicar tensión correcta.
[ ] Explicar rutas de arnés.
Imágenes a agregar
[ ] Empalme correcto.
[ ] Empalme incorrecto.
[ ] Encintado OEM.
[ ] Encintado defectuoso.

SECCIÓN 11 — INSTALACIÓN DEL GPS
Planeación
[ ] Explicar planificación previa.
[ ] Explicar rutas seguras.
[ ] Explicar ocultamiento.
Ubicación GPS
[ ] Explicar dónde NO instalar.
[ ] Explicar orientación antena.
[ ] Explicar interferencia metálica.
[ ] Explicar humedad y vibración.
Alimentación
[ ] Explicar positivos constantes.
[ ] Explicar tierras correctas.
[ ] Explicar protección fusibles.
Imágenes a agregar
[ ] Instalación correcta.
[ ] Instalación incorrecta.
[ ] Ubicaciones ideales.
[ ] Errores comunes.

SECCIÓN 12 — PERIFÉRICOS
Botón de pánico
[ ] Mejorar explicación.
[ ] Explicar señales negativas.
[ ] Explicar ocultamiento seguro.
Micrófonos
[ ] Explicar instalación.
[ ] Explicar ubicación.
[ ] Explicar ruido/interferencia.
Apertura de seguros
[ ] Explicar tipos de sistemas.
[ ] Explicar pulsos positivos/negativos.
Sensores adicionales
[ ] Explicar sensores puerta.
[ ] Explicar sensores temperatura.
[ ] Explicar sensores combustible.
Imágenes a agregar
[ ] Botón oculto.
[ ] Micrófono instalado.
[ ] Diagramas periféricos.

SECCIÓN 13 — DIAGNÓSTICO Y FALLAS
Diagnóstico
[ ] Crear sección completa.
[ ] Explicar fallas comunes.
[ ] Explicar diagnóstico eléctrico.
[ ] Explicar diagnóstico GSM.
[ ] Explicar diagnóstico GNSS.
Consumo parasitario
[ ] Explicar sleep mode.
[ ] Explicar wake-up.
[ ] Explicar miliamperaje normal.
Tabla de fallas
[ ] GPS no reporta.
[ ] Sin señal GPS.
[ ] Relay pegado.
[ ] Descarga batería.
[ ] Ignición falsa.
Imágenes a agregar
[ ] Lecturas multímetro.
[ ] Ejemplos reales fallas.
[ ] Capturas plataforma GPS.

SECCIÓN 14 — ESTÁNDARES DE CALIDAD
Calidad instalación
[ ] Crear estándares visuales.
[ ] Explicar instalación OEM style.
[ ] Explicar ocultamiento profesional.
[ ] Explicar organización arnés.
Auditoría
[ ] Crear checklist auditoría.
[ ] Crear criterios aprobación.
Comparativas
[ ] Buena instalación VS mala instalación.
Imágenes a agregar
[ ] Ejemplos profesionales.
[ ] Ejemplos incorrectos.

SECCIÓN 15 — PROCEDIMIENTO FINAL Y ENTREGA
Checklist post-instalación
[ ] GPS reporta.
[ ] Señal GNSS.
[ ] Señal GSM.
[ ] Ignición correcta.
[ ] Bloqueo correcto.
[ ] Botón pánico.
[ ] Apertura seguros.
[ ] Revisión testigos.
[ ] Escaneo DTC.
[ ] Limpieza final.
Evidencia
[ ] Fotografías finales.
[ ] Evidencia instalación.
[ ] Documentación cliente.

SECCIÓN 16 — DISEÑO Y REDACCIÓN
Redacción
[ ] Corregir ortografía.
[ ] Corregir tildes.
[ ] Uniformar términos técnicos.
[ ] Eliminar lenguaje informal.
Formato
[ ] Uniformar títulos.
[ ] Uniformar numeración.
[ ] Mejorar márgenes.
[ ] Mejorar espaciado.
Diseño visual
[ ] Definir paleta corporativa.
[ ] Agregar iconografía.
[ ] Mejorar tablas.
[ ] Agregar cuadros informativos.

SECCIÓN 17 — CASOS REALES Y EXPERIENCIA DE CAMPO
Casos reales
[ ] Relay mal conectado.
[ ] GPS descargando batería.
[ ] Airbag activado.
[ ] Falsa ignición.
[ ] Problema CAN.
[ ] Interferencia GNSS.
Soluciones
[ ] Diagnóstico.
[ ] Corrección.
[ ] Prevención futura.

SECCIÓN 18 — MATERIAL VISUAL GENERAL
Fotografías reales
[ ] Instalaciones reales empresa.
[ ] Herramientas reales.
[ ] Vehículos reales.
[ ] Daños reales.
Diagramas
[ ] Diagramas eléctricos.
[ ] Diagramas flujo.
[ ] Diagramas relays.
[ ] Diagramas CAN.
Recursos gráficos
[ ] Íconos técnicos.
[ ] Advertencias visuales.
[ ] Señalización riesgos.
[ ] Flujos de proceso.
