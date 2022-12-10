import * as THREE from "./modules/three.module.js"
    
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
/*
El primer parámetro va a indicar. El point of view. Que viene siendo el campo de visión de cuán estrecho.
¿O ancho? Es el ángulo de captura de la Cámara. Sii es muy grande, es como un gran ojo de pez que va a abarcar.
 Una gran parte. 
 
Sí, es muy pequeño, va a abarcar una pequeña parte de la imagen. El segundo aspecto viene siendo 
 el ratio. Que viene siendo el valor numérico. De la relación entre el ancho y el alto para decirle cuan cuadrado 
 O rectangular es la imagen que necesito. En este caso estoy dividiendo todo el ancho de mi pantalla, sobre todo el alto de
mi pantalla. Lo cual implicaría que el canvas siempre va a acoger. Toda la pantalla, pero esto no siempre se cumple, porque hay 
veces que solo necesito esto para. Un aspecto en concreto.. 

Finalmente, los aspectos que dicen cero, uno y 1000 es que si El primer número es cero. Se refiere a centímetros y 
si es un entero el primer número se refiere a metros. Entonces, en este caso la imagen lo menos que coge son 10 cm. 
Y lo máximo que coge son. 1000 Metros.

*/

export default camera