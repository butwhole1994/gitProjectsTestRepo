import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import styles from "./SpringSequences.module.css";

export default function SpringSequences() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            [
                [
                    scope.current,
                    {
                        transform: [
                            "rotateX(-360deg) rotateZ(180deg)",
                            "rotateX(35deg) rotateZ(0deg)",
                        ],
                        backgroundColor: ["#f5f5f500", "#f5f5f577"],
                    },
                    { type: "spring" },
                ],
                [
                    `.${styles.dot}`,
                    {
                        transform: ["translateZ(100px)", "translateZ(10px)"],
                        opacity: [0, 1],
                    },
                    {
                        type: "spring",
                        stiffness: 4000,
                        damping: 20,
                        delay: stagger(0.1),
                        at: "-0.6",
                    },
                ],
            ],
            { delay: 0.3 }
        );
    }, []);

    return (
        <div className={styles.wrapper}>
        <div className={styles.container} ref={scope}>
            <div className={styles.dot} >CARD #1</div>
            <div className={styles.dot} >CARD #2</div>
            <div className={styles.dot} >CARD #3</div>
            <div className={styles.dot} >CARD #4</div>
            <div className={styles.dot} >CARD #5</div>
            <div className={styles.dot} >CARD #6</div>
        </div>
        </div>
    );
}
