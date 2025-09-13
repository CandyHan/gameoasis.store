import React from 'react';
import GameCard from '@/components/GameCard';
import { GAME_INFO_MAP, GAME_NAME, GAME_LIST } from '@/constant';
import styles from './index.module.scss';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.title}>
                <h1>Game List</h1>
            </div>
            <div className={styles.gameList}>
                {GAME_LIST.map((gameName) => (
                    <GameCard
                        key={gameName}
                        {...GAME_INFO_MAP[gameName]}
                        onClick={() => {
                            window.open(`/game-detail/${gameName}`, '_blank');
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage;
