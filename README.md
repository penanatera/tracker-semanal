# Tracker Semanal 🔥

App de hábitos semanal con Firebase, calendario mensual, gráfica de peso y exportación.

## Funciones
- **Hábitos semanales** ponderados (gym, almuerzo, ventana, proteína).
  - Lunes cuenta en almuerzo, ventana y proteína. En gym es bonus opcional.
  - Almuerzo cuenta los 7 días (incluido domingo).
- **Calendario mensual** estilo GitHub: cada día coloreado por % de cumplimiento.
- **Notas por día** que se guardan con cada semana.
- **Gráfica de peso** con línea de meta.
- **Meta de peso** con progreso, ritmo (kg/semana) y estimado.
- **Racha de semanas** con ≥75%.
- **Historial editable:** borra semanas individuales o todo el historial.
- **Modo claro/oscuro** (sigue al sistema o manual).
- **Exportar** historial a PDF, Excel y CSV.
- **Rutina** con nombres técnicos, músculo objetivo y cardio seleccionable (cardio del día y/o 2km a casa, independientes).
- **PWA instalable** en el celular (se ve como app nativa).

## Instalar en el celular
- **iPhone (Safari):** abre la app → botón Compartir → "Agregar a inicio".
- **Android (Chrome):** abre la app → menú ⋮ → "Instalar app" o "Agregar a pantalla de inicio".

## Deploy en GitHub Pages
1. Sube TODOS estos archivos (incluidos icon-192.png e icon-512.png) a la raíz de tu repo.
2. Settings → Pages → Source: Deploy from branch → main → / (root).
3. Tu app estará en: https://TU_USUARIO.github.io/TU_REPO/

## Reglas de seguridad de Firestore (IMPORTANTE)
En Firebase → Firestore Database → pestaña Rules, pega esto y publica:

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
