"use client";

import { useState, useCallback } from "react";
import OjisanFace from "./OjisanFace";
import styles from "./GameBoard.module.css";
import { GameState, initializeGame } from "@/lib/game";

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>(initializeGame);
  const [highScore, setHighScore] = useState(0);

  const handleClick = useCallback((index: number) => {
    if (gameState.gameOver) return;

    if (index === gameState.angryIndex) {
      setGameState(prev => ({ 
        ...prev, 
        gameOver: true,
        isAngryClicked: true 
      }));
      if (gameState.score > highScore) {
        setHighScore(gameState.score);
      }
      
      setTimeout(() => {
        setGameState(initializeGame());
      }, 2000);
      
      return;
    }

    setGameState(prev => ({
      ...prev,
      faces: prev.faces.map((face, i) => 
        i === index ? { ...face, isVisible: false } : face
      ),
      score: prev.score + 1,
    }));
  }, [gameState.angryIndex, gameState.gameOver, gameState.score, highScore]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Angry Ojisan Game</h1>
        <p>Score: {gameState.score} | High Score: {highScore}</p>
        <p className={styles.instructions}>
          Find the normal ojisans and avoid the angry one!
        </p>
      </div>

      <div className={styles.grid}>
        {gameState.faces.map((face, index) => (
          <OjisanFace
            key={face.id}
            type={face.type}
            isVisible={face.isVisible}
            isAngryClicked={gameState.isAngryClicked}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}