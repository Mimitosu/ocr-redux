import { useDispatch } from "react-redux"
import { restartGame } from "../../utils/action"
export default function ResetButton() {
    const dispatch = useDispatch()
    return (
        <button className="button" onClick={()=>{
            dispatch(restartGame())
        }}>Remettre à zéro</button>
    )
}