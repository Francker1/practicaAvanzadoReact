# Práctica Avanzado React

## Goal
Crear y refactorizar antigua práctica de Fundamentos y adecuarla a los nuevos conocimientos adquiridos

Esta práctica ha sido un reto, ya que ha supuesto cambiar viejos vicios a la hora de programar y poder aplicar nuevos paradigmas a la hora de crear una aplicación. Lo que más me ha costado ha sido refactorizar la mayor parte de los componentes y el proyecto de tal forma que se adecúe a lo visto en clase, y como primera toma de contacto con e paradigma que ofrece Redux, pero creo que hubiera podido hacerlo mejor.


## Funcionamiento de la aplicación
El usuario aterriza en una pantalla raíz o home **"/"** y desde ella se puede elegir loguearse o registrarse. En caso de no estar logueado y querer ver los anuncios, el manejo de errores (que de momento es un alert) te redirige a login. Una vez se ha logueado o registrado y se le redirige a "/ads", se setean en localStorage los datos del usuario y se obtienen en el Board de anuncios.

Una vez está en **"/login"** si el usuario no está creado muestra otro alert, y te envía a **"/registro"** si todo es OK, en la respuest exitosa de la llamada a la API te redirige a **"/ads"**. 

El usuario debe estar registrado o logueado para ver la lista de anuncios, ya que el API funciona mediante una cookie que se setea al loguearse o registrarse.

En /ads podemos ver un listado de anuncios con sus datos como precio, imagen, etc. Si hacemos click en uno, vamos a **"/detail"**, pasando por parámentro de url el id del anuncio y haciendo la llamada a la API para obtener datos de ese anuncio. SI no estás logueado y quieres ver un anuncio escribiendo el ID en la url, te devuelve a /login.

En la pantalla de **"/ads"** también podemos filtrar y crear anuncio, para crear, es un filtro con los datos necesarios y un multiselect para los tags. 

## Retos:

He intentado realizar la mayor parte de los puntos, creo que he podido con todos, sobre todo me ha gustado refactorizar e ir dejando los componentes tipo Class, también he aprendido a desacoplar funcionalidades y llamadas a la API. EN cuanto a Redux, ha sido un reto tener en mente el modelado del store para poder aplicarlo correctamente. En un inicio, me hubiera gustado incluir más acciones como el edit, filter o crear anuncio, pero por tiempos no he llegado. Sí he creado una funcionalidad para AÑADIR A FAVORITOS, para practicar y ver cómo se puede obtener datos haciendo una llamada al store de redux, ha sido un reto muy aleccionador. Me hubiera gustado tener tiempo para manejar el estado del botón una vez se ha añadido a favoritos, o una acción para quitarlos de ahí.


Disfrutad de KeepAds y sus cosas random!!!!!