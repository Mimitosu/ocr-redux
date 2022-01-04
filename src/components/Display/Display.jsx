import { useSelector } from "react-redux"
export default function Display() {
    const { playing, winner, advantage, player1, player2 } = useSelector((state) => state)
    let displayText = ""
    if (winner) displayText = `Le Joueur ${winner === "player1" ? 1 : 2} gagne`
    else if (!playing) displayText = "C'est la pause"
    else {
        displayText = `Le score est : ${player1} - ${player2}`
        if (advantage) {
            displayText += ` avantage joueur ${advantage === "player1" ? 1 : 2}`
        }
    }
    return (
        <p className="display">
            {displayText}
        </p>
    )
}