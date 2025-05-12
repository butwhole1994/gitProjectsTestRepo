import styles from "./StackCard.module.css";
import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence,
} from "framer-motion";

function Card(props) {
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false,
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 },
        }),
    };

    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 },
    };

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: 180,
                height: 500,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : {
                        scale: { duration: 0.2 },
                        opacity: { duration: 0.4 },
                    }
            }
        >
            <motion.div
                style={{
                    width: 180,
                    height: 300,
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    scale,
                }}
            />
        </motion.div>
    );
}

export default function StackCard() {
    const [index, setIndex] = useState(0);

    return (
        <div className={styles.container}>
            <motion.div style={{ width: 150, height: 150, position: "relative" }}>
                <AnimatePresence initial={false}>
                    <Card key={index + 1} frontCard={false} />
                    <Card
                        key={index}
                        frontCard={true}
                        index={index}
                        setIndex={setIndex}
                        drag="x"
                    />
                </AnimatePresence>
            </motion.div>

            {/* Refresh 버튼 예시 */}
            <div className={styles.refresh} onClick={() => setIndex(0)}>
                ↻
            </div>
        </div>
    );
}
