import styles from "./ListDrag.module.css";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";

interface Props {
    item: string;
}

export const Item = ({ item }: Props) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item} className={styles.item} style={{ boxShadow, y }}>
            <span>{item}</span>
        </Reorder.Item>
    );
};
