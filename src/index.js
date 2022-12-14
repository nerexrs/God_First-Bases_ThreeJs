import camera from "./Camera.js";
import cube from "./Cube.js";
import keyListener from "./KeyListener.js";
import light from "./Light.js";
import loopMachine from "./LoopMachine.js";
import renderer from "./Renderer.js";
import resize from "./Resize.js";
import scene from "./Scene.js";
import { snowman } from "./Snowman.js";
import "./OrbitImplementation.js"
import "./StatsImplementation.js"
import guiImplementation from "./GuiImplementation.js";
import plane from "./Plane.js";

// recuerda escribir lo que quieres importar y que 
// se autocomplete para que se autoimporte. Ejemplo
// abajo con el cube escribe cube, autocompleta y se
// auto importa






//agrego el cubo a la escena

// camera.position.x = 1
// // muevo un metro en el eje horizontal a la derecha, positivo derecha, negativo izquierda
// camera.position.y = 1
// // muevo un metro en el eje vertical arriba, positivo arriba, negativo abajo
// camera.position.z = 5

// numeros positivos camara más cerca,
// numeros negativos más lejos. 
// z es profundidad


// esto se determina en metros

camera.position.set(1, 1, 3) 
/*
como estoy viendo al cubo especificamente entonces todo movimiento
termina viendose como si girara el cubo o mi objeto gracias al look at
y al set
*/
//Aquí establezco la posición de un objeto en x,y,z


camera.lookAt(cube.position)
scene.add( light );
scene.add( plane );

//enfoco mi camara en la posición de mi cubo


// si pongo algo después del render que quiero renderizar
// es como tomar una foto pero prendiendo la luz después de la foto



// acá una vez que se establezca la escena, el objeto, la camara y la luz
// entonces voy a aplicar un resize o que re establezca el tamaño del renderizado
// en función del tamaño actual de la ventana
resize.start(renderer)

//si pones setInterval, te va a importar automatico el modulo
// pero entonces si pasa eso no funciona. Borra el modulo que se importa de timers
    //acá estaba setInterval 

//agrego mi loopmachine agregando un ballback    
loopMachine.addCallback(() => {

    // cube.rotation.z += 0.01
    // //el eje z me rota horizontalmente de lado
    // cube.rotation.x += 0.02
    // //el eje x me rota verticalmente así sea ironico xd

    // cube.rotation.y += 0.01
    //el eje y me rota horizontalmente

    // lle digo que rote mi cubo en el eje y y que
    // por cada fotograma gire 1 centecima
    renderer.render(scene, camera)
    //acá voy a renderizar todo después de la rotación
}, 1000/30);



loopMachine.start() //inicio mi animación

//agrego mi keyListener para escuchar las teclas por su número de key
keyListener.start()

//establezo un intervalo que hará la animación

/*Para poner un objeto en three js necesito realizar un 
 bucle, en el tiempo le digo 1000 milisegundos o sea un segundo
 dividio 30 que sería 30 fotogramas por segundo y ahí modificamos la
 rotación para que giren los objetos 3d y después le digo ue renderice

 todos los objetos 3d tienen rotación y le digo que
*/ 

guiImplementation.start() //implemento mi apartado de GUI para manipular
//mi objeto


setTimeout(() => {
    console.log(keyListener.isPressed(13)); 
}, 3000);

scene.add(cube)


// después podría realizar un botón o algo por el estilo que me sirva para mostrar o apagar esto

// setTimeout(() => {
//     guiImplementation.stop()
// }, 3000);


// setTimeout(() => {
//     guiImplementation.start()
// }, 5000);
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