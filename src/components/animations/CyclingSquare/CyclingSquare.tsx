import { motion, useCycle } from "framer-motion";
import styles from "@/components/animations/StackCard/StackCard.module.css";

export default function CyclingSquare() {
    const [animate, cycle] = useCycle(
        { scale: 1, rotate: 0 },
        { scale: 1.25, rotate: 180 }
    );

    return (
        <div className={styles.container}>
        <motion.div
            style={{
                width: 200,
                height: 400,
                borderRadius: 30,
                backgroundColor: "#fff",
                cursor: "pointer"
            }}
            animate={animate}
            onTap={() => cycle()}
        />
        </div>
    );
}
