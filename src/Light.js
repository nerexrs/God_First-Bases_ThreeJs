import * as THREE from "./modules/three.module.js"
const light = new THREE.AmbientLight( 0x404040 ); // soft white light

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.add( directionalLight );
//como ya puse el light en la scene agrego esto a la light directo

directionalLight.position.set(1, 2, 1)

//Aquí marcamos la direccion de la ley pasandole
// el parametro set que establece la posición x,y, z


//la luz por defecto va desde arriba y va hacia abajo con 
//directionallight. 
/*
Es por como se configura la luz, la luz direccional va 
a un objeto llamado luz y se extiende aun objeto 3d
que tiene position y por defecto está 0, 1, 0 o sea
más arriba en y

Y tiene un target que es un objeto 3d que también tiene 
una propiedad position, por lo tanto la luz va de un metro
hacia arriba y va a la posición 0, 0, 0. 

Por eso la luz es paralela
*/

export default light