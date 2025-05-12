import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CardFlip.module.css";

function FlipCard({
                      direction,
                      label,
                  }: {
    direction: "horizontal" | "vertical";
    label: string;
}) {
    const [flipped, setFlipped] = useState(false);
    const isVertical = direction === "vertical";

    return (
        <div className={styles.scene} onClick={() => setFlipped((f) => !f)}>
            <motion.div
                className={styles.card}
                animate={isVertical ? { rotateX: flipped ? 180 : 0 } : { rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.front}>{label} Front</div>
                <div className={`${styles.back} ${isVertical ? styles.flipX : styles.flipY}`}>
                    {label} Back
                </div>
            </motion.div>
        </div>
    );
}

export default function CardFlip() {
    return (
        <div className={styles.wrapper}>
            <FlipCard direction="horizontal" label="Left-Right" />
            <FlipCard direction="vertical" label="Top-Bottom" />
        </div>
    );
}
