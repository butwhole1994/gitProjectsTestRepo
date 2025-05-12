import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "@/components/animations/CardCursor/CardCursor.module.css";

export default function CardCursor() {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    // 회전 범위를 줄이고 부드럽게 처리
    //const rotateX = useSpring(useTransform(y, [0, 400], [150, -150]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [0, 400], [-150, 150]), { stiffness: 150, damping: 20 });
    //const rotateX = (useTransform(y, [0, 400], [150, -150]));
    //const rotateY = (useTransform(x, [0, 400], [-150, 150]));

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <div className={styles.container}>
            <motion.div
                style={{
                    width: 600,
                    height: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    perspective: 1000,
                }}
                onMouseMove={handleMouse}
            >
                <motion.div
                    className={styles.cardWrapper}
                    style={{  rotateY }}
                >
                    <div className={`${styles.cardFace} ${styles.front}`}>Front</div>
                    <div className={`${styles.cardFace} ${styles.back}`}>Back</div>
                </motion.div>
            </motion.div>
        </div>
    );
}
