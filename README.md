# proyecto2_front_end
Proyecto de Gestión de Pedidos y Clientes con Autenticación y Chatbot Inteligente

Descripción General

Este proyecto es una aplicación web desarrollada con React, TypeScript, TailwindCSS y Vite en el frontend. Permite gestionar pedidos, clientes, direcciones, incidencias, fotografías y realizar análisis visuales a través de gráficos.

También incluye un sistema de autenticación con OAuth (Google, GitHub y Microsoft), un chatbot inteligente basado en la API de Gemini de Google para responder preguntas frecuentes, y un sistema de notificaciones visuales y sonoras para nuevos pedidos asignados.

Funcionalidades Principales

1. Gestión CRUD de:

Clientes

Órdenes

Direcciones

Fotografías

Incidencias

Cada módulo cuenta con:

Listado

Creación

Edición

Eliminación

Detalle (en algunos casos)

2. Autenticación con OAuth

Inicio de sesión mediante:

Google (funcional)

GitHub y Microsoft (flujo OAuth simulado, sin backend)

Al iniciar sesión se recupera el perfil y se almacena el token en localStorage

Rutas protegidas usando ProtectedRoute

3. Panel de Analítica

3 gráficos circulares

3 gráficos de barras

3 gráficos de líneas temporales

Implementado con Recharts y datos simulados

4. Notificaciones de Nuevos Pedidos

Se revisan periódicamente los pedidos asignados

Se muestra notificación visual con react-toastify

Incluye sonido de alerta

5. Chatbot Inteligente (Gemini)

Permite hacer preguntas como:

¿Dónde se registran conductores?

¿Dónde se realiza un pedido?

¿Para qué sirve el sistema?

Usa fetch con la API REST de Gemini (modo prueba)

Tecnologías Utilizadas

Frontend:

React

TypeScript

TailwindCSS

Vite

React Router DOM

Axios

Framer Motion

React Icons

React Toastify

Recharts

Servicios:

Google OAuth

Gemini API

Estructura del Proyecto

├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── models
│   ├── routes
│   └── App.tsx
├── public
│   └── sounds
│       └── mixkit-confirmation-tone-2870.wav
├── vite.config.ts
└── README.md

Instrucciones de Instalación

Clona el repositorio:

git clone https://github.com/tu_usuario/tu_repositorio.git

Instala las dependencias:

npm install

Corre el proyecto:

npm run dev

Abre el navegador en:

http://localhost:3000

Configuraciones Importantes

.env (si decides usar uno más adelante):

VITE_GEMINI_API_KEY=tu_clave_api

Google Cloud Console:

Debes registrar el Client ID para OAuth y habilitar:

People API

Gemini API (Generative Language)

Notificación Sonora:

El archivo de sonido debe estar en public/sounds

Observaciones Finales

Este proyecto fue creado con fines académicos y de demostración. No debe usarse en producción sin adaptar correctamente el manejo de claves y autenticación en el backend. Todas las funcionalidades fueron desarrolladas paso a paso, desde la configuración del entorno, implementación del CRUD, protección de rutas, hasta integración con IA.

Créditos y Autoría

Desarrollado por: Jaider León
Luis Felipe Cruz
Juan Esteban Ramirez

Universidad/Curso: Universidad de Caldas
Desarrollo de Fronted

Año: 2025

