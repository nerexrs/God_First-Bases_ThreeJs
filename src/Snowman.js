import * as THREE from "./modules/three.module.js";
import * as BufferGeometryUtils from "./modules/BufferGeometryUtils.js";

//* means all the exports as

/*
Why, si comparten material mejora el performance

    1) create individual bufferGeometries
    2) TransLate each BG to appropiate position before merging
    3) merge buffer geometries into single BG
*/

//create cloud parts                        //radius, widthsegs, heightsegs

const feet = new THREE.SphereBufferGeometry( 16, 32, 32);
feet.translate( 0, 0, 0); // translate o traslada mi BG al origen del espacio local


const body = new THREE.SphereBufferGeometry( 10, 24, 24);
body.translate( 0, 23, 0); // translate o traslada mi BG up 23 on Y axis o linea Y

const head = new THREE.SphereBufferGeometry( 7, 12, 12);
head.translate( 0, 38, 0); // translate o traslada mi BG up 38 on Y axis o linea Yl

const arm1 = new THREE.SphereBufferGeometry( 4, 12, 12);
arm1.translate( -11, 27, 0); // translate o traslada mi BG 11 izquierda y 27 arriba

const arm2 = new THREE.SphereBufferGeometry( 4, 12, 12);
arm2.translate( 11, 27, 0); // translate o traslada mi BG 11 derecha y 27 arriba

const snowmanGeo = BufferGeometryUtils.mergeBufferGeometries([feet, body, head, arm1, arm2])

export const snowman = new THREE.Mesh(
    snowmanGeo,
    new THREE.MeshStandardMaterial({ color: 0x888888})
)

snowman.position.set(0, 60, 100); //setposition