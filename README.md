# alvatross
# steps
  - to install all packages `npm install`
  - to run in local `npm run dev`
# decisiones
  - Para realizar la prueba técnica he utilizado Vite como herramienta de soporte, ya que me parecía que para este tipo de app pequeña es muy útil para crear una estructura de proyecto de forma rápida y sencilla.
  - He utilizado Tailwind como framework CSS (instalación con npm).  Me resulta cómodo para aplicar las mediaQueries, ya que las clases estan predefinidas. Tambien he agregado en las configuraciones los colores y la fuente de forma personalizada (tailwind.config.js) 

# estructura
  - fichero json (assets/json/floors.js)
  - vistas → floors.vue / api.vue
  - componentes ui → header, cardRoom. He creado un componente Header para mostrar un posible layout responsive en el formato mobile.
  - Desde la vista floors, seleciono la planta y luego cargo como componente las Cards para mostrar la info de las Salas de dicha Planta.
  - Decidí que las nuevas plantas se agregaran al principio de la lista, porque en la versión móvil queda mas visible.

# dificultades
  - Pensaba en un principio agregar elementos dentro del arrays Floors, pero luego pense que al ya tener la vista con una planta cargada, me convenia directamente agregar Salas a dicho arrays (el cual viene de la selección de la Planta)
 
  
