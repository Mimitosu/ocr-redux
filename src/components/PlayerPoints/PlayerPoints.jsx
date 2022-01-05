import { useSelector } from "react-redux"
import { selectPlayerWins } from "../../utils/selector"

export default function PlayerPoints({ playerId, playerName }) {
    const playerScore = useSelector(selectPlayerWins(playerId))
    return (
        <div className="player-games">
            <p>{playerName}</p>
            <p>Nombre de jeux gagnés : {playerScore}</p>
        </div>
    )
}