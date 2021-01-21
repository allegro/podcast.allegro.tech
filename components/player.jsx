import styles from "./player.module.css";
const Player = ({ link, index = 1 }) => {
    const playerSource = `${link}?client_source=small_player&amp;iframe=true`;
    const audioSource = `${link}.mp3`;
    if (index === 0) {
        return (
            <div id="buzzsprout-player-2799460">
                <iframe src={playerSource} scrolling="no" width="100%" height="200" frameBorder="0" loading="lazy"></iframe>
            </div>
        )
    }
    else {
        return (
            <audio
                className = {styles.audio}
                controls
                preload = "metadata"
                src={audioSource}>
            </audio>
        )
    }
};
export default Player;