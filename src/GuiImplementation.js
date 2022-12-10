import cube from "./Cube.js"
import { GUI } from "./modules/GUI.js"

class GuiImplementation { //usar una clase para activar o desactivar
    constructor() {
        this.gui = null
    }
    start(){ 
        if (this.gui) { //si esto existe entonces no se ejecuta, pero si no existe entonces
            //no se ejecuta. Si es nuloe l if no se ejecuta y de ahí si no existe entonces se ejecuta lo de abajo

            //y si ya existe entonces no tienes que poner toda la inicialización sino que solo lo muestras
            //porque estaba escondido

            this.gui.show() //este quita el display none del stop

            //si esto ya se ejecutó antes entonces hago un return
            // si es la segunda vez es porque lo habíamos empezado y lo detuvimos
            return
        }

        this.gui = new GUI()
        let colorObj = { //acá pongo un nuevo espacio que será para el color del objeto
            colorParam: '#0xff0000', //Este es el nombre de la propiedad que modificaremos
            //es el valor por defecto pero con esto basicamente tengo todos los colores o casi todos
        }
        //acá a GUI accedo al metodo de agregar color donde de la variable colorOBj agarra
        //la propiedad colorPram y le pone nombre COLOR en donde cuando cambie
        //irá al cubo, de ahí accede al material y de ahí al color y le establece
        //el valor o el color de la propiedad colorParam de la variable colorObj

        //para entender los valores que se reciben en GUI ve a la doc de three js

        //así se cambia on the fly

        //con el .name como parametro le pongo el nombre que quiero que aparezca
        //en mi gui

        this.gui.addColor(colorObj, 'colorParam').name('COLOR').onChange(()=>{
            console.log(cube);//yo puedo debugear pasando el objeto que quiero modificar en un clg 
            // cube.material.color.set(colorOBbj.colorParam)
        })
        const rotation = this.gui.addFolder("Rotation")
        
        rotation.add(cube.rotation, 'y', 0, Math.PI * 2).step(Math.PI / 180)
        rotation.add(cube.rotation, 'x', 0, Math.PI * 2).step(Math.PI / 180)
        rotation.add(cube.rotation, 'z', 0, Math.PI * 2).step(Math.PI / 180)
        //pi es igual a 180 grados en radianes, supongo por eso el 0. 

        // Al multiplicar por 2 el número se convierte a 360 grados
        //el step de pi sobre 180 equivale a que se hará grado por grado el movimiento
        

        //así podemos poner secciones o carpetas, folders, o sea una sección que tenga sub secciones
        //el parametro string es el nombre del folder
        const position = this.gui.addFolder("Position")
        //llamo a position, le agrego la posición del cubo en su eje x y le digo que el 
        //valor mínimo será -10 y el maximo 10 en metros entiendo
        position.add(cube.position, 'x').min(-10).max(10).step(.2)
        //al ponerle 0.2 en el .step es que cada 0.2 metros o 20 centrimetros si entendí entonces se movería. Si fuera
        // 1 sería cada metro que se movería y así consecutivamente
        position.add(cube.position, 'y').min(-10).max(10).step(.1)
        //el .step() es para determinar a cuantos pasos va a hacer el cambio
        // y como parametro recibe precisamente ese número, en este caso 0.5 
        //metros o 50 centimetros si entendí bien
        position.add(cube.position, 'z', -1, 1).step(1).step(.1)
        //podemos poner los parametros de posición como 3 y 4to parametro, el tercer
        //parametro es el mínimo y el cuarto es el máximo
        //si no tiene .step entonces iría por cada movimiento pero si le pongo step 1 tendría
        //lejos, en medio o cerca
    }
    stop() { 
        this.gui.hide() //lo escondemos cuando ya se realizó, un display none
    }
}

const guiImplementation = new GuiImplementation()


export default guiImplementation