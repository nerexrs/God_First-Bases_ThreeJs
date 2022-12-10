
import camera from "./Camera.js";
import { OrbitControls } from "./modules/OrbitControls.js";
import renderer from "./Renderer.js";

const controls = new OrbitControls( camera, renderer.domElement );
// controls.enablePan = false; //ESTO MUEVE EL SISTEAM CUANDO PRESIONO CONTROL
// controls.enableZoom = false; //ESTO HABILITA EL ZOOM
controls.target.set( 0, 0, 0 );
controls.update();