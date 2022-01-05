import { useSelector } from "react-redux"
import { selectPlayerHasAdvantage, selectPlayerScore, selectRemainPointsToWin } from "../../utils/selector"

export default function PlayerScore({ playerId, playerName }) {
    const advantage = useSelector(selectPlayerHasAdvantage(playerId))
    const playerScore = useSelector(selectPlayerScore(playerId))
    const remainPoints = useSelector(selectRemainPointsToWin(playerId))

    return (
        <div className="player-score">
            <p>{playerName} (encore {remainPoints} points)</p>
            <p>{advantage ? 'Avantage ' : ''}{`${playerScore}`}</p>
        </div>
    )
}