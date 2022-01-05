import { useSelector } from "react-redux"

export default function PlayerScore({playerId, playerName}){
    const advantage = useSelector(state => state.advantage)
    const playerScore = useSelector(state => playerId === "player1" ? state.player1 : state.player2)
    return (
        <div className="player-score">
            <p>{playerName}</p>
            <p>{advantage === playerId ? 'Avantage ' : ''}{`${playerScore}`}</p>
        </div>
    )
}