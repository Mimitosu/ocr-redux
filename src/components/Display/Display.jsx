import { useSelector } from "react-redux"
import { selectDisplayText } from "../../utils/selector"

export default function Display() {
    const displayText = useSelector(selectDisplayText)

    return (
        <p className="display">
            {displayText}
        </p>
    )
}