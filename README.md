# Actualización de fecha, hora y clima en tiempo real con geolocalización y API

Este proyecto es una aplicación web que muestra la fecha, hora y clima en tiempo real utilizando la geolocalización del usuario y la integración con una API de clima. La aplicación se desarrolla en JavaScript y HTML, y hace uso de tecnologías web como la geolocalización del navegador y peticiones a una API externa.

## Características

- Muestra la fecha y hora actualizada en tiempo real.
- Obtiene la ubicación del usuario utilizando la geolocalización del navegador.
- Utiliza una API de clima para obtener los datos meteorológicos de la ubicación del usuario.
- Actualiza dinámicamente la información de temperatura, descripción del clima, temperatura máxima, temperatura mínima, presión y velocidad del viento.
- Permite al usuario realizar un inicio de sesión simulado con nombres de usuario válidos.
- Cambia el estado del botón entre "Log In" y "Log Out" según el inicio de sesión del usuario.
- Cambia la imagen de perfil y el saludo de bienvenida según el nombre de usuario ingresado.
- Permite al usuario alternar entre el modo claro y oscuro.
- Proporciona un campo de texto para que el usuario pueda buscar información meteorológica de una ubicación específica.

## Requisitos previos

- Navegador web moderno con soporte para geolocalización y JavaScript habilitado.
- Clave de API de OpenWeatherMap para acceder a los datos meteorológicos. (Reemplazar "TU_API_KEY" en el archivo script.js con tu propia clave de API)

## Uso

1. Clona o descarga el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. La página mostrará automáticamente la fecha, hora y ubicación actual, así como los datos meteorológicos de esa ubicación.
4. Puedes iniciar sesión simulado ingresando uno de los dos nombres de usuario válidos: "Daniel", "Maruja", "Anyulieth", "Jenkins" o "Ancassi".
5. Dependiendo del nombre de usuario ingresado, se mostrará una imagen de perfil y un saludo de bienvenida correspondientes.
6. Puedes alternar entre el modo claro y oscuro haciendo clic en el botón "Toggle Modo".
7. Puedes buscar información meteorológica de una ubicación específica ingresando el nombre de la ubicación en el campo de texto y presionando Enter o haciendo clic en el botón de búsqueda.