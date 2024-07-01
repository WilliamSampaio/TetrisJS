export default function createKeyboardListener() {
    // objeto que armazena os observers
    const state = {
        observers: []
    }

    // funcao que registra um novo observer
    function subscribe(observerFunc) {
        state.observers.push(observerFunc)
    }
    
    // function unsubscribe(observerFunc) {
    //     state.observers.splice(state.observers.indexOf(observerFunc), 1)
    // }

    // funcao que notifica todos os observers
    function notifyAll(command) {
        for (const observerFunc of state.observers) {
            observerFunc(command)
        }
    }

    // adiciona um event listener
    document.addEventListener('keydown', handleKeydown)

    // funcao que captura o input e notifica todos
    function handleKeydown(e) {
        // const keyPressed = e.code

        // const command = {
        //     keyPressed
        // }
        notifyAll(e.code)
    }

    return {
        subscribe
    }
}