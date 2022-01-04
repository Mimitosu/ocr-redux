import { useState } from "react"
import { useSelector } from "react-redux"
export default function PlayerPoints({ playerId, playerName }) {
    const [playerScore, setPlayerScore] = useState(0)

    // const winner = useSelector((state) => state.winner)
    // if (winner === playerId) setPlayerScore(playerScore + 1)
    return (
        <div className="player-games">
            <p>{playerName}</p>
            <p>Nombre de jeux gagnés : {playerScore}</p>
        </div>
    )
}