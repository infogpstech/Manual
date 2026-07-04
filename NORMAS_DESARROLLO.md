prohibido modificar este archivo
# NORMAS DE DESARROLLO Y PROCESO ESTÁNDAR

Este documento define de manera estructurada el proceso de desarrollo estándar para el proyecto. Incluye criterios, reglas, lineamientos técnicos e instrucciones paso a paso que regulan todas las fases del ciclo de desarrollo para garantizar consistencia, trazabilidad, control de cambios y calidad del código.

---

## 🔧 PROCESO DE DESARROLLO Y NORMAS OBLIGATORIAS

### 🧭 Auditoría inicial obligatoria (fase de análisis)
Se debe realizar una auditoría completa antes de cualquier modificación del código, la cual incluye:

- Revisión exhaustiva de los archivos involucrados.
- Análisis línea por línea del código.
- Identificación del estado actual del sistema.
- Detección de riesgos, dependencias y posibles efectos colaterales.
- Identificación de funciones, módulos y componentes afectados.

**Restricción crítica:**
- Durante esta fase está estrictamente prohibido modificar cualquier archivo.

---

### 📋 Registro estructurado de hallazgos
Todos los hallazgos derivados de la auditoría deben ser documentados de forma obligatoria:

- Registro en un archivo de auditoría (`Auditoría.md` o equivalente).
- Inclusión de:
  - Archivo afectado.
  - Línea o rango de líneas.
  - Descripción del hallazgo.
  - Dependencias relacionadas.
  - Impacto potencial.

**Reglas:**
- No se permite eliminar registros previos.
- No se deben realizar correcciones en esta fase.
- Todo hallazgo debe mantenerse trazable.

---

### 🧩 Conversión de hallazgos en tareas ejecutables
Los hallazgos identificados deben transformarse en tareas técnicas claras y ejecutables:

- Cada hallazgo debe convertirse en una acción específica.
- Las tareas deben ser atómicas, delimitadas y verificables.
- Debe definirse el alcance exacto de cada cambio.

---

### 💾 Respaldo obligatorio previo a modificaciones
Antes de realizar cualquier cambio en el código:

- Se debe crear una copia exacta del archivo a modificar.
- El respaldo debe conservar:
  - Nombre original del archivo.
  - Contenido íntegro sin alteraciones.
- El respaldo se utilizará únicamente para comparación posterior.

---

### 🛠️ Ejecución controlada de cambios
Durante la implementación:

- Solo se deben aplicar cambios directamente relacionados con la tarea definida.
- Está prohibido:
  - Modificar estilos o lógica no relacionada.
  - Introducir optimizaciones no solicitadas.
  - Alterar flujos funcionales existentes.

**Principio de alcance mínimo:**
> Todo cambio debe afectar únicamente la línea, bloque o función estrictamente necesaria.

---

### 🧪 Verificación funcional local
Después de aplicar cambios:

- Se debe validar el funcionamiento del sistema de forma local.
- Se pueden utilizar entornos de prueba o simulación (mocking) cuando aplique.
- Se debe confirmar:
  - Funcionamiento esperado de la nueva lógica.
  - Integridad de funcionalidades existentes.

---

### 🔍 Comparación post-modificación (obligatoria)
Se debe realizar una comparación entre el archivo modificado y su respaldo:

- Identificar:
  - Líneas agregadas.
  - Líneas eliminadas.
  - Líneas modificadas.
- Validar que todos los cambios correspondan estrictamente al alcance definido.

**Si se detectan cambios no autorizados:**
- Deben revertirse inmediatamente.
- Debe repetirse la comparación hasta asegurar consistencia.

---

### 🧠 Ejecución obligatoria de Code Review
Todo cambio debe pasar por un proceso de revisión de código obligatorio:

- Se debe ejecutar un análisis tipo **Code Review**.
- Clasificación de resultados:
  - Blocking issues.
  - Non-blocking issues.
  - Nitpicks o mejoras menores.

**Regla de validación:**
- El proceso no se considera finalizado hasta obtener una calificación favorable.

---

### 🔁 Ciclo de iteración basado en Code Review
Si el Code Review detecta errores:

- El proceso completo debe reiniciarse desde la auditoría inicial.
- Esto aplica incluso si los cambios son parciales.

---

### ♻️ Manejo de sugerencias de reversión
Si el Code Review sugiere revertir cambios:

- Se debe verificar si dichos cambios:
  - Pertenecen a commits anteriores ya aprobados.
- Si pertenecen a versiones previas:
  - La instrucción de reversión debe ignorarse.
- Si pertenecen al trabajo actual:
  - Deben revertirse inmediatamente.

---

### 🧹 Limpieza del repositorio
Una vez aprobado el Code Review:

- Eliminar archivos temporales generados durante el proceso, incluyendo:
  - Respaldos.
  - Scripts de verificación.
  - Capturas o artefactos intermedios.
- Mantener el repositorio en estado limpio y productivo.

---

### 🧱 Modularización y organización del proyecto
El código debe mantenerse estructurado de forma modular:

- Separación por responsabilidades:
  - UI
  - UX
  - Lógica de negocio
  - Motores / servicios
- Organización en directorios según el dominio funcional.
- Evitar mezcla de responsabilidades en un mismo módulo.

---

### 🧾 Registro de cambios (Changelog)
Todos los cambios deben documentarse de forma obligatoria:

- Archivo de registro de cambios agregar cambios en nuevos registros sin borrar los anteriores (`CHANGESLOGS.md`).
- Debe incluir:
  - Archivo modificado.
  - Líneas afectadas.
  - Descripción técnica objetiva.
- No se deben incluir conclusiones subjetivas.

---

### 📌 Principios generales obligatorios

- Todo cambio debe ser trazable.
- Toda modificación debe ser auditada.
- Todo error debe ser registrado.
- Ningún cambio puede realizarse sin respaldo y análisis previo.

---

## ⚠️ REGLAS FINALES

> SI NO SE AUDITA, NO SE CAMBIA.
> SI NO SE REGISTRA, NO EXISTE.

- **Prohibición absoluta:** Está estrictamente prohibido modificar, borrar o agregar contenido dentro de las instrucciones establecidas en este documento.

El incumplimiento de cualquier etapa invalida automáticamente el proceso completo.
