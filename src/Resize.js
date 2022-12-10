import camera from "./Camera.js"

class Resize {
    constructor() {
        this.renderer = null //el renderizado de inicio es nulo
    }
    start(renderer) { //para empezar la función de la clase
        //el renderizado es igual a renderer
        this.renderer = renderer 
        /*agrego un evento a mi ventana o window donde le paso resize y como 
        callback le paso la función de esta función hazme resize y uneme con el this
        bind es unir */
        window.addEventListener('resize', this.resize.bind(this))
    }
    stop() {
        //acá elimino el escuchador de eventos
        window.removeEventListener('resize', this.resize.bind(this))
    }
    resize() {
        //aspecto de mi camara
        camera.aspect = window.innerWidth / window.innerHeight
        /*actualizar mi camar cuando haya un cambio de ventana
         para eso se usa el actualiza la matriz de proyección */
        camera.updateProjectionMatrix()
        //de la función resize,this, llamame a renderer y establece el nuevo tamaño
        this.renderer.setSize( window.innerWidth , window.innerHeight );
    }
}

/*TEN MUCHO CUIDADO CON LO DE WINDOW INNER PORQUE DURASTE MEDIA HORA AVERIGUANDO QUE
 PASABA XD
 EL CONSTRUCTOR ES EL QUE ESTABLECE MI FUNCIÓN DE RENDERIZAR

START ES EL QUE COGE EL EVENTO Y RENDERIZA UNA VEZ QUE SE ESCUCHA EL EVENTO RESIZE
 O QUE CAMBIA LA PANTALLA Y LE DIGO QUE ME UNA MI FUNCIÓN RESIZE

 DESPUÉS STOP  SUCEDE CUANDO DEJA DE SUCEDER EL EVENTO RESIZE, EL ASPECTO 
ES EL DE  LA CAMARA ES EL DE LA PANTALLA ACTUAL, DESPUÉS ACTUALIZA LA MATRIZ
DE PROYECCIÓN Y DE AHÍ EN ESTA FUNCIÓN ACTUAL CON EL VALOR ACTUAL POR ESO EL THIS
EN ESE CONTEXTO ESPECIFICO LE PIDO QUE ME RENDERICE Y ESTABLEZCA EL TAMAÑO AL NUEVO
TAMAÑO DEL WINDOWS Y CUANDO ESO SUCEDE PASA EL STOP DE QUE DEJA DE ESCUCHAR AL EVENTO

CUANDO VUELVA A REALIZAR EL EVENTO DE RESIZE ENTONCES CAMBIARÁ DE NUEVO EL ASPECTO
 DE LA PANTALLA
*/
const resize = new Resize()


export default resize