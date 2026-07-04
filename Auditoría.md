# REGISTRO DE AUDITORÍA

Este archivo contiene el registro de hallazgos derivados de las auditorías obligatorias.

| Fecha | Archivo Afectado | Líneas | Descripción del Hallazgo | Dependencias | Impacto Potencial |
|-------|------------------|--------|--------------------------|--------------|-------------------|
| 2025-05-22 | index.html | 76 | La Tabla de Contenido solo lista 14 secciones, ignorando temas críticos de electrónica moderna y diagnóstico. | README.txt | Desorientación del usuario sobre el alcance total del manual. |
| 2025-05-22 | index.html | 1140 | La sección 14 menciona "Identificación Avanzada" pero omite detalles técnicos sobre CAN BUS (High/Low), LIN BUS y los riesgos de inyectar voltaje en estas líneas. | README.txt (Sección 4 y 8) | Riesgo de daño permanente a módulos electrónicos (BCM/ECM) del vehículo. |
| 2025-05-22 | index.html | 915 | La sección 7 (Seguridad) no incluye información sobre vehículos híbridos/eléctricos ni el manejo de cables de alto voltaje (naranja). | README.txt (Sección 5) | Riesgo de electrocución o daños graves en vehículos de nueva tecnología. |
| 2025-05-22 | index.html | 1139 | Falta una sección dedicada al diagnóstico de fallas comunes (GPS no reporta, fallas de señal GSM/GNSS). | README.txt (Sección 13) | Ineficiencia en el soporte técnico y resolución de problemas en campo. |
| 2025-05-22 | index.html | N/A | Falta un protocolo formal de entrega y estándares de calidad visual para las instalaciones. | README.txt (Sección 14 y 15) | Falta de uniformidad y profesionalismo en el servicio final entregado al cliente. |
| 2025-05-22 | index.html | 1000+ | Algunos bloques de texto nuevos no están utilizando la clase `.warning-box` para advertencias críticas, usando texto plano en su lugar. | NORMAS_DESARROLLO.md | Incumplimiento de estándares visuales y reducción de la visibilidad de riesgos. |
