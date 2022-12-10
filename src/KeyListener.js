class KeyListener {
    constructor(caster) {
        this.keys = {} 
        this.caster = caster || console.log;

        // here i'm going to have the keys in my object and the caster is going to store te keys
    }
    setCaster(caster) {
        this.caster = caster
        // because there ease they model that this going to a store the keys to show it
    }
    //eventHandler "callback"
    down = (e) => {
        // these is the event when I press a key
        if (this.keys[e.keyCode]) return
        // with these i'm referring to down an keys is the array oF KEYS, then I pass as 
        //parameter the keyCode of the event that is the number of the key. and if is down then they return nothing
        this.keys[e.keyCode] = true
        // then I referred that east through that the keyCode is press
        this.caster([e.keyCode, true, this.keys])
        // finally i referred to the caster a 3 parameters the keyCode or the number of the key, true an the keys stored
        // e.preventDefault()
        // e.stopPropagation()
    }
    //eventHandler "callback"
    up = (e) => {
        this.keys[e.keyCode] = false
        // here I refer that if my key is up then is false
        this.caster([e.keyCode, false, this.keys])
        // then I have the caster and now I have the parameter false
        // e.preventDefault()
        // e.stopPropagation()
    }
    isPressed(keyCode) {
        // here are a referred that eve my key code is equal to my key code then return keycode, else is false so that prevents the
        // thing of that if you press continiously you are going to have errors
        return (this.keys[keyCode]) ? this.keys[keyCode] : false
    }
    start() {
        this.stop()
        window.addEventListener('keydown', this.down)
        window.addEventListener('keyup', this.up)
        // here is start everything first I stop an then I add the events
    }
    stop() {
        window.removeEventListener('keydown', this.down)
        window.removeEventListener('keyup', this.up)
    
        //here I delete everything so it continous
    }
}

const keyListener = new KeyListener()

export default keyListener

export { KeyListener }