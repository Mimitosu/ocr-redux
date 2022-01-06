// action creators
export const restartGame = () => ({
    type: "restart"
})

export const pointScored = (player) => ({
    type: "pointScored",
    payload: { player: player }
})

export const setPlaying = (playing) => ({
    type: "setPlaying",
    payload: playing
})
export let playIntervalId

export const autoPlay = (store) => {
    const isPlaying = !store.getState().playing;
    function play() {
        // le jeu est-il toujours en cours ?
        if (store.getState().playing === false) {
            // Si non, on ne fait rien
            return;
        }
        // si oui on marque un point aléatoire
        const pointWinner = Math.random() > 0.5 ? "player1" : "player2";
        store.dispatch(pointScored(pointWinner));
    }
    if (isPlaying) playIntervalId = setInterval(play, 2000)
    else clearInterval(play)
    // on indique que la partie est en cours
    store.dispatch(setPlaying(isPlaying));
    // on utilise setTimeout pour attendre 2 secondes
    
}