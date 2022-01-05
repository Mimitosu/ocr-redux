export const selectPlayerHasAdvantage = playerId => {
    return (state) => state.advantage === playerId
}

export const selectPlayerScore = playerId => {
    return (state) => state[playerId]
}

export const selectDisplayText = state => {
    let displayText = ""
    const { playing, winner, advantage, player1, player2 } = state
    if (winner) displayText = `Le Joueur ${winner === "player1" ? 1 : 2} gagne`
    else if (!playing) displayText = "C'est la pause"
    else {
        displayText = `Le score est : ${player1} - ${player2}`
        if (advantage) {
            displayText += ` avantage joueur ${advantage === "player1" ? 1 : 2}`
        }
    }
    return displayText
}

export const selectPlayerWins = playerId => {
    return state => state.history.reduce((nbWin, match) => {
        if (match.winner === playerId) nbWin++
        return nbWin
    }, 0)
}

export const selectRemainPointsToWin = playerId => {
    return state => {
        const currentPoints = state[playerId]
        const concurentPoint = state[playerId === 'player1' ? 'player2' : 'player1']
        const advantage = state.advantage
        if (state.winner === playerId) return 0
        if (advantage === playerId || (currentPoints === 40 && concurentPoint < currentPoints)) return 1
        if (currentPoints === 30 || (currentPoints === 40 && concurentPoint === 40)) return 2
        if (currentPoints === 15) return 3
        if (currentPoints === 0) return 4
    }
}