const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


export default renderer 

/*
Un método constructor es una función que ayuda a desarrollar un objeto nuevo. Y por eso es que construye. 
Porque con base a unos parámetros que tiene una clase. Se termina desarrollando un objeto. Nuevo. 
En este caso el método constructor web gl renderer ¿Iba a coger el web gl, que es? 
El encargado de los navegadores de procesar 3 D. y. Por defecto no tiene ningún parámetro, 
pero le vamos a poner el {antialias:true} es necesario poner.¿Entre los paréntesis? Del método.
¿Estas llaves? Con lo dos puntos: que me permite blurrear o hacer más borrosos ¿Los pixeles? Que se vean mal de un objeto 3 D..

Por otro lado tenemos el 
renderer.setSize( window.innerWidth, window.innerHeight );

Esto me permite Especificar le a mi programa.¿Cuál va a ser el tamaño en el que se va a realizar? 
O básicamente cuál va a ser el tamaño del canvas, porque el 3 D se pone en un canvas.

Después tenemos.
document.body.appendChild( renderer.domElement );
.¿Entonces? Al hacer un document se refiere al documento de mi Html. Después, con el .body Hace referencia a que 
está apuntando al body del documento. Y después se aplica un método. El cual es appendChild. 
que me permite agregar un objeto a mi body En este caso, que lo estoy señalando OA cualquier objeto del DOM.
 Entendiendo que el DOM es la estructura html. Entonces le pasó como parámetro. La constante render con el webgl. 
 Y le digo que va a ser. Un elemento del DOM.

Finalmente lo exporto.


*/