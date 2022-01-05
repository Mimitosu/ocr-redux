import { createStore } from 'redux'
import { produce } from 'immer'
// initial state
const initialState = {
    player1: 0,
    player2: 0,
    playing: true,
    winner: null,
    advantage: null,
    history: []
}

// reducer
function reducer(state = initialState, action) {
    if (action.type === "restart") return initialState
    if (action.type === "playPause") return { ...state, playing: !state.playing }

    if (action.type === "pointScored") {
        const player = action.payload.player
        const currentScore = state[player]
        const currentConcurentScore = state[player === 'player1' ? 'player2' : 'player1']
        const currentWinner = state.winner
        const currentAdvantage = state.advantage
        if (currentWinner !== null) return state
        if (currentScore <= 15)
            return { ...state, [player]: currentScore + 15 }
        else if (currentScore <= 30)
            return { ...state, [player]: currentScore + 10 }
        else if (currentScore === 40) {
            if (currentAdvantage === player
                || (currentConcurentScore < currentScore
                    && currentWinner === null
                )
            ) return produce(state, draft => {
                draft.winner = player;
                draft.history.push({
                    player1: state.player1,
                    player2: state.player2,
                    winner: player
                })
            })
            else if (currentAdvantage === null) return { ...state, advantage: player }
            return { ...state, advantage: null }
        }
    }
    return state
}

export const store = createStore(reducer, initialState)

store.subscribe(() => {
    console.log("Nouveau state:")
    console.log(store.getState())
})