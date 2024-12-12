export type OjisanType = "normal" | "angry" | "glasses";
export const OJISAN_TYPES: OjisanType[] = ["normal", "angry", "glasses"];
export const GRID_SIZE = 25;

export interface GameState {
  faces: Array<{
    id: number;
    type: OjisanType;
    isVisible: boolean;
  }>;
  score: number;
  gameOver: boolean;
  angryIndex: number;
  isAngryClicked: boolean;
}

export function initializeGame(): GameState {
  const faces = Array.from({ length: GRID_SIZE }, (_, index) => ({
    id: index,
    type: OJISAN_TYPES[Math.floor(Math.random() * OJISAN_TYPES.length)],
    isVisible: true,
  }));
  const angryIndex = Math.floor(Math.random() * GRID_SIZE);
  faces[angryIndex].type = "angry";
  
  return {
    faces,
    score: 0,
    gameOver: false,
    angryIndex,
    isAngryClicked: false,
  };
}