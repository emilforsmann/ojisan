"use client";

import { memo } from "react";
import { OjisanType } from "@/lib/game";
import styles from "./OjisanFace.module.css";

interface OjisanFaceProps {
  type: OjisanType;
  onClick: () => void;
  isVisible: boolean;
  isAngryClicked: boolean;
}

const OjisanFace = memo(({ type, onClick, isVisible, isAngryClicked }: OjisanFaceProps) => {
  const faceClasses = [
    styles.face,
    styles[type],
    !isVisible && styles.hidden,
    isAngryClicked && type === "angry" && styles["angry-clicked"]
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={faceClasses}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${type} ojisan face`}
    >
      <div className={styles.eyes} />
      <div className={styles.nose} />
      <div className={styles.mouth} />
    </div>
  );
});

OjisanFace.displayName = "OjisanFace";

export default OjisanFace;