// src/services/NotificationService.ts
import { toast } from "react-toastify";

// Ruta del sonido de notificación
const notificationSound = new Audio(
  "/sounds/mixkit-confirmation-tone-2870.wav"
);

// Configurar volumen inicial (0.5 es el 50%)
notificationSound.volume = 0.7;

// Bandera para verificar si el usuario ha interactuado
let userInteracted = false;

// Registrar un evento para detectar interacción del usuario
document.addEventListener("click", () => {
  userInteracted = true;
});

document.addEventListener("keydown", () => {
  userInteracted = true;
});

// Función para reproducir el sonido de notificación
const playNotificationSound = async () => {
  if (userInteracted) {
    try {
      await notificationSound.play();
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  } else {
    console.warn(
      "El usuario no ha interactuado aún. El sonido no se reproducirá."
    );
  }
};

// Mostrar notificación informativa (con sonido)
export const showNotification = async (message: string) => {
  await playNotificationSound();

  toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

// Mostrar notificación de error (con sonido)
export const showErrorNotification = async (message: string) => {
  await playNotificationSound();

  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

// Mostrar notificación sin sonido
export const showSilentNotification = (message: string) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
