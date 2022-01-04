import { useDispatch } from "react-redux"
import { pointScored } from "../../utils/action"
export default function PointScoredButton({ playerId, children }) {
    const dispatch = useDispatch()
    return (
        <button className="button" onClick={() => {
            dispatch(pointScored(playerId))
        }}>
            {children}
        </button>
    )
}