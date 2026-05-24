# Tracker Semanal 🔥

App de hábitos semanal con Firebase, calendario mensual, gráfica de peso y exportación.

## Funciones
- **Hábitos semanales** con ponderación (gym, almuerzo, ventana, proteína). El lunes cuenta en todo; en gym es bonus opcional.
- **Calendario mensual** estilo GitHub: cada día coloreado por % de cumplimiento (verde élite / azul sólido / amarillo regular / rojo malo / gris sin datos). Toca un día para ver el detalle y la nota.
- **Notas por día** que se guardan con cada semana.
- **Gráfica de peso** con línea de meta.
- **Meta de peso** con progreso, ritmo (kg/semana) y estimado.
- **Racha de semanas** con ≥75%.
- **Modo claro/oscuro** (sigue al sistema o manual).
- **Exportar** historial a PDF, Excel y CSV.

## Deploy en GitHub Pages
1. Sube estos archivos a tu repo `tracker-semanal` en GitHub.
2. Settings → Pages → Source: Deploy from branch → main → / (root).
3. Tu app estará en: https://TU_USUARIO.github.io/tracker-semanal/

## Reglas de seguridad de Firestore (IMPORTANTE)
Para que cada usuario solo acceda a sus datos, en Firebase → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
