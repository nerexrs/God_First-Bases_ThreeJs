const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// en los tres parametros determino lo largo que serán las lineas de los triangulos
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
// es un color plano, parece que se traspasara el objeto. Puedes buscar otros materiales
// escribiendo material. El que usa usualmente es MeshPhongMaterial, pero usaremos
// MeshNormalMaterial, pinta colores según la normal que se basa en la luz del obejto, no entendí bien xd

//PhongMaterial sí se afecta por la luz

//por el basicMaterial siempre se va a ver el color por más que haya luz o no siempre se verá
const cube = new THREE.Mesh( geometry, material );



export default cube

/*
La geometría se puede entender como varios puntos en un plano. Donde si yo junto 2 de esos puntos tengo una línea y donde si junto 3 puntos tengo un triángulo.
O un plano, 2 de esos triángulos serían un cuadrado y 6 de esos cuadrados sería un cubo. Entonces, cuando está la box geometry 
Se refiere a que realiza ese cubo de 6 cuadrados.O 12 triángulos

El material hace referencia al material que tendrá dicha figura geométrica.
 En donde el mesh basic material. Es un material que Haya o no haya luz, se va a ver. 
De la misma forma. Lo cual sirve mucho para las luces de neón. Y le podemos pasar parámetros entre llaves, como el color.

Mesh. Hace referencia a la malla Es decir, a la combinación entre 
los puntos de la geometría o los triangulos con el material que tendrá
 o el color /textura de dichos triángulos. Y eso lo guardamos
 en mi const cube que es lo que exportamos
*/