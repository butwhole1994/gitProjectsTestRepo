import { motion } from "framer-motion";
import styles from "./CardDumbling.module.css";
import { useState } from "react";

export default function CardDumbling() {
    const [count, setCount] = useState(0);
    return (
        <div key={count} className={styles.container}>

            <motion.div
                onClick={() => setCount(count + 1)}
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    originY: 0,
                }}
                animate={{ rotateX: 360 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            />
        </div>
    );
}
