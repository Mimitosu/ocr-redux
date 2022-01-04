// action creators
export const restartGame = () => ({
    type: "restart"
})

export const pointScored = (player) => ({
    type: "pointScored",
    payload: { player: player }
})

export const playPause = () => ({
    type: "playPause"
})