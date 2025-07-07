import marioBg from "@public/assets/mario.png";
import monsterBg from "@public/assets/monster.png";

export enum GAME_NAME {
    MARIO_MASTER = "mario-master",
    MONSTER_SURVIVORS = "monster-survivors",
}

export const GAME_IFRAME_URL_MAP = {
    [GAME_NAME.MARIO_MASTER]: "https://playmario.github.io/HTML5_Client",
    [GAME_NAME.MONSTER_SURVIVORS]: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
}

export interface GameInfo {
    title: string;
    description: string;
    bg: string;
    iframeUrl: string;
}

export const GAME_INFO_MAP: Record<GAME_NAME, GameInfo> = {
    [GAME_NAME.MARIO_MASTER]: {
        title: "Super Mario Bro",
        description: "Challenge your mind with 32 levels.",
        bg: marioBg,
        iframeUrl: "https://playmario.github.io/HTML5_Client",
    },
    [GAME_NAME.MONSTER_SURVIVORS]: {
        title: "Monster Survivors",
        description: "Survive the night, defeat the monsters, and become the ultimate survivor in this thrilling adventure game!",
        bg: monsterBg,
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
    }
}