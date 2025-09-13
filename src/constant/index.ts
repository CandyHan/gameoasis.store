import marioBg from "@public/assets/mario.png";
import monsterBg from "@public/assets/monster.png";
import rumbletsBg from "@public/assets/rumblets.avif";
import hexaSortBg from "@public/assets/hexa-sort.avif";
import PolytrackBg from "@public/assets/polytrack.avif";

export enum GAME_NAME {
    MARIO_MASTER = "mario-master",
    MONSTER_SURVIVORS = "monster-survivors",
    RUMBLETS_GO = "rumblets-go",
    HEXA_SORT = "hexa-sort",
    POLYTRACK = "polytrack"
}

export interface GameInfo {
    title: string; // 游戏名称
    description: string; // 游戏描述
    bg: string; // 游戏背景图
    iframeUrl: string; // 游戏iframe地址
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
    },
    [GAME_NAME.RUMBLETS_GO]: {
        title: "Rumblets Go",
        description: "Rumblets Go is a fun and challenging game that will test your reflexes and strategic thinking.",
        bg: rumbletsBg,
        iframeUrl: "https://games.crazygames.com/en_US/rumblets-go-exm/index.html?v=1.339",
    },
    [GAME_NAME.HEXA_SORT]: {
        title: "Hexa Sort",
        description: "Hexa Sort is an addictive puzzle-sorting game that combines strategic matching and merging challenges.",
        bg: hexaSortBg,
        iframeUrl: "https://games.crazygames.com/en_US/hexa-sort/index.html?v=1.339",
    },
    [GAME_NAME.POLYTRACK]: {
        title: "PolyTrack",
        description: "Polytrack is a classic car racing game with a slight twist.",
        bg: PolytrackBg,
        iframeUrl: "https://games.crazygames.com/en_US/polytrack/index.html?v=1.339",
    }
}

// 从枚举中获取游戏列表
export const GAME_LIST = Object.values(GAME_NAME);
