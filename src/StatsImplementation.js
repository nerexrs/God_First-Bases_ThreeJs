import loopMachine from "./LoopMachine.js";
import Stats from "./modules/Stats.js";


let stats = new Stats() //acá llamo a mi libreria stats
document.body.appendChild(stats.dom) //le sumo al body en el dom los stats

loopMachine.addCallback(()=> {
    stats.update(); //en el modulo loop machine agrego un callback que es la actualización de
    //los stats para que los stats se actualicen conforme las animaciones que suceden
})