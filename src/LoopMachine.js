class LoopMachine {
    constructor() {
        this.flag = false
        // the flag is going to derminate the state of the loop
        this.callbacks = []
        // we're going to put here all the callbacks
    }
    addCallback(callback) {
        this.callbacks.push(callback) 
        // here I push all my callbacks
    }
    
    removeCallback(callback) {
        let index = this.callbacks.indexOf(callback)
        // here I have the index of my callbacks
        this.callback.splice(index, 1) 
        // and here I delete the index of my callback
    }
    run() {
        if (!this.flag) return 
        this.callbacks.forEach(cb => {
            cb()
        })
        //solo se ejecuta una vez
        // if the flag is true then I return only 1 callback
    
        //para que sea un loop necesitamos llamar a this run de una forma

        //el this es un callback que pierde contexto
        //tenemos que binedar o unir el contexto con el contexto de ejecución del callback
        //o sobre qué se está ejecutano. Metodo run no es callback, metodo de instancia.
        //en el request sí va a ser un callback sin contexto
        requestAnimationFrame(this.run.bind(this))
        //la segunda vez que se ejecute el run, el valor this
        //seguirá refirienose a la instancia porque está ejecutandose
        // en un callback de request. Porque la seguna vez le asignamos
        //con el bind que el contexto de ejecución es la misma instancia
    }
    start() {
        // in this function I need to change my flag 
        //to true only if in the start is false
        if (this.flag) return
        this.flag = true
        // here I change might flag to through and then 
        //I start the method run
        this.run()
    }
    stop() { 
        // finally the program is stops and the
        // flag return to false
        this.flag = false
    }
}

const loopMachine = new LoopMachine()


export default loopMachine