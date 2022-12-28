//GOD FIRST
import * as THREE from "./modules/three.module.js"

const geometry = new THREE.PlaneGeometry( 200, 200, 20, 20 ); //POR DEFECTO TIENE 1, si le pongo 
// que el ancho y el alto es 2 sería 2 metros y ya se podría ver
// después estarían la cantidad de triangulos

//el parametro 3 y 4 son los segmentos que vendría siendo cuantos triangulos hay
// el 3es que en el ancho habrá la cantidad de cuadrados que especifique

//Y el 4 es la cantidad de cuadrados que habrá en el alto


const material = new THREE.MeshBasicMaterial( {
    color: 0xffff00, side: THREE.DoubleSide,
    //lo del dooble side es un valor binario donde backSide es 0
    // front es 1
    // Doubleside es 0 y 1
    wireframe: false //esto me muestra la maya con la que está hecha mi objeto 3d que serían
    //como puntos en el aire que si se conectan 3 forman triangulos o poligonos y de ahí cuadrados o demás
    // si está en true se muestra la maya, en false se apage. wireframe es la maya primitiva

    //Wireless en ingles significa sin cables y fi fidelity
    //como fidelidad inalambrica y eso es wifame

    //wire es cable, wireless less wire entonces sin cables

    //frame
} ); 
//DoubleSide es que se verá de los dos lados entonces no importa mucho si se vino en un eje negativo o positivo
const plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI * 0.5

//PI en mayusculas, se tiene que medir en radianes para rotar un objeto
// inicialmente está en el objeto y. Para moverlo al X lo movemos en el eje x
// y como PI es 180 grados entonces queremos moverlo 90 grados, 180 divido dos o por 0.5


export default plane