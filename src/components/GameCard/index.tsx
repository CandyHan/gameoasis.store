// 游戏卡片组件，hover 时有动画特效
import React from 'react';
import styles from './index.module.scss';

interface GameCardProps {
    title: string;
    description: string;
    bg: string;
    onClick: () => void;
}

const GameCard = ({ title, description, bg, onClick }: GameCardProps) => {
    return (
        <div className={styles.gameCard} onClick={onClick}>
            <div className={styles.gameCardImage} style={{ backgroundImage: `url(${bg})` }}></div>
            <div className={styles.gameCardContent}>
                <h3>{title}</h3>
                <p title={description}>{description}</p>
            </div>
        </div>
    )
}

export default GameCard;