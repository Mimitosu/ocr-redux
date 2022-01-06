import { useStore } from "react-redux";
import { autoPlay } from "../../utils/action"

export default function PlayPauseButton() {
    const store = useStore();
    const playing = store.getState().playing

    return (
        <button
            className="button"
            onClick={() => {
                autoPlay(store)
            }}
        >
            {playing ? 'Pause' : 'Reprendre'}
        </button>
    );
}