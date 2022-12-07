import camera from "./Camera.js";
import cube from "./Cube.js";
import renderer from "./Renderer.js";
import scene from "./Scene.js";

scene.add(cube)
//agrego el cubo a la escena
camera.position.z = 5
camera.position.x = 1
camera.position.y = 1
// esto se determina en metros

// numeros positivos camara más cerca,
// numeros negativos más lejos. 
// z es profundidad
camera.lookAt(cube.position)
//enfoco mi cubo en su posición
renderer.render(scene, camera)


renderer.render(scene, camera)
// renderizo la escena, el cubo u objeto y la camara





/*
Para añadir un objeto. En three js, Tenemos que primero llamar a la escena. Agregar después el objeto que queremos añadir a la escena.

Hay un factor importante acá y es que position es un vector 3., Un vector 3 hizo una especie coordinadas y tiene x y z 
Pero que simplifica la necesidad de poner. Estos parámetros. Es por eso que podemos poner camera.position.z Porque estoy llamando a 
la propiedad Z de position, donde position es un vector3. 

Después tenemos lookAt que recibe parámetros. XYZ o  de vector 3 Que según la explicación anterior, viene siendo prácticamente muy similar. 
Esto me permite determinar hacia dónde mirará la Cámara. En este caso, está recibiendo como parámetro la posición del cubo, la cual es un 
vector 3

Ahora, si finalmente renderizamos toda la escena para que así me muestren en pantalla. Utilizando el renderer Con su propiedad render.
Y pasándole como parámetro La escena y la Cámara. Que contiene todo lo que mencionamos anteriormente.
*/




// here I can check that I have my scene in the console

/*
Si yo escribo en mi console.Log El nombre de un módulo de javascript., 
En donde un módulo es como un componente de react. El cual importó y exportó y puedo llamar en otros módulos.
Entonces sí llamó estos módulos. En él clg. Me va a importar automáticamente. 
Ese módulo que estoy llamando en mi console.log.

*/

//En este archivo es donde pasa todo