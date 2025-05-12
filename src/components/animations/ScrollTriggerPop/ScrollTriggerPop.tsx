import styles from "./ScrollTriggerPop.module.css";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

interface Props {
    emoji: string;
    hueA: number;
    hueB: number;
}

const cardVariants: Variants = {
    initial: {
        y: 300,
    },
    animate: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
    const [isAnimated, setIsAnimated] = useState(false);
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={styles.cardContainer}
            onClick={() => setIsAnimated(true)}
        >
            <div className={styles.splash} style={{ background }} />
            <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="initial"
                animate={isAnimated ? "animate" : "initial"}
            >
                {emoji}
            </motion.div>
        </motion.div>
    );
}

const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];

export default function ScrollTriggerPop() {
    return (
        <div className={styles.wrapper}>
            {food.map(([emoji, hueA, hueB]) => (
                <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    );
}
