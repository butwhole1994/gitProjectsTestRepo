import styles from "./ListDrag.module.css";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function ListDrag() {
    const [items, setItems] = useState(initialItems);

    return (
        <div className={styles.wrapper}>
            <Reorder.Group
                axis="y"
                onReorder={setItems}
                values={items}
                className={styles.list}
            >
                {items.map((item) => (
                    <Item key={item} item={item} />
                ))}
            </Reorder.Group>
        </div>
    );
}
