import { createStore } from 'redux'
import { produce } from 'immer'
import { playIntervalId } from './action'
// initial state
const initialState = {
    player1: 0,
    player2: 0,
    playing: false,
    winner: null,
    advantage: null,
    history: []
}

// reducer
function reducer(state = initialState, action) {
    if (action.type === "setPlaying") return { ...state, playing: action.payload }
    if (action.type === "restart") return produce(state, draft => {
        if (playIntervalId) clearInterval(playIntervalId)
        draft.player1 = 0
        draft.player2 = 0
        draft.playing = false
        draft.winner = null
        draft.advantage = null
    })
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
                if (playIntervalId) clearInterval(playIntervalId)
                draft.winner = player
                draft.playing = false
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