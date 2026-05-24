# Tracker Semanal 🔥

App de hábitos semanal personalizable con Firebase, calendario mensual, gráfica de peso, rachas y exportación.

## Funciones
- **Hábitos semanales** ponderados (gym, almuerzo, ventana, proteína).
  - Lunes cuenta en almuerzo, ventana y proteína. En gym es bonus opcional.
  - Almuerzo cuenta los 7 días (incluido domingo).
- **Calendario mensual** estilo GitHub: cada día coloreado por % de cumplimiento.
  - Toca cualquier día (de esta semana o de semanas cerradas con detalle) para VER y EDITAR los hábitos y la nota de ese día.
- **Notas por día** guardadas con cada semana.
- **Gráfica de peso** con línea de meta.
- **Editar/borrar peso:** toca un registro de peso para corregirlo o eliminarlo.
- **Meta de peso** con progreso, ritmo (kg/semana) y estimado.
- **Racha de semanas** (≥75%) + **rachas por hábito** (mejor racha de gym, ventana, etc.).
- **Comparar mes vs mes:** promedio de este mes contra el anterior.
- **Historial editable:** borra semanas individuales o todo.
- **Editar semanas cerradas:** toca una semana del historial → ✏️ Editar % para corregir el pasado (sirve incluso para semanas viejas).
- **Hábitos configurables (⚙️):** edita nombre, emoji, peso, meta y días de cada hábito; agrega o quita hábitos sin tocar código.
- **Modo claro/oscuro** (sigue al sistema o manual).
- **Recordatorio diario:** notificación a la hora que elijas (mejor con la app instalada).
- **Exportar** historial a PDF, Excel y CSV.
- **Respaldo completo:** descarga TODO en un archivo .json y restáuralo en otro dispositivo.
- **Rutina** con nombres técnicos, músculo objetivo y cardio seleccionable.
- **PWA instalable** en el celular.

## Instalar en el celular
- **iPhone (Safari):** abre la app → Compartir → "Agregar a inicio".
- **Android (Chrome):** menú ⋮ → "Instalar app".

## Sobre el recordatorio (importante)
Las notificaciones del navegador funcionan mientras la app esté instalada/abierta. En el celular, instala la app (arriba) y dale permiso de notificaciones cuando lo pida. No es una alarma del sistema; es un aviso del navegador.

## Deploy en GitHub Pages
1. Sube TODOS estos archivos (incluidos icon-192.png e icon-512.png) a la raíz de tu repo.
2. Settings → Pages → Source: Deploy from branch → main → / (root).
3. Tu app estará en: https://TU_USUARIO.github.io/TU_REPO/

## Reglas de seguridad de Firestore (IMPORTANTE)
En Firebase → Firestore Database → pestaña Rules, pega y publica:

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
