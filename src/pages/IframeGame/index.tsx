import { useParams } from "react-router-dom";
import { GAME_INFO_MAP, GAME_NAME } from "@/constant";
import styles from './index.module.scss';

const IframeGame = () => {
    const { gameName } = useParams();
    return (
        <div className={styles.iframeGame}>
            <iframe src={GAME_INFO_MAP[gameName as GAME_NAME].iframeUrl} className={styles.iframe} />
        </div>
    )
}

export default IframeGame;