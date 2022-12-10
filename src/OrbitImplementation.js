
import camera from "./Camera.js";
import { OrbitControls } from "./modules/OrbitControls.js";
import renderer from "./Renderer.js";

const controls = new OrbitControls( camera, renderer.domElement );
// controls.enablePan = false;
// controls.enableZoom = false;
controls.target.set( 0, 0, 0 );
controls.update();