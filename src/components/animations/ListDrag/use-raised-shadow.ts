import { animate, MotionValue, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

export function useRaisedShadow(value: MotionValue<number>) {
    const boxShadow = useMotionValue(inactiveShadow);
    const isActiveRef = useRef(false);

    useMotionValueEvent(value, "change", (latest) => {
        const wasActive = isActiveRef.current;
        if (latest !== 0) {
            isActiveRef.current = true;
            if (isActiveRef.current !== wasActive) {
                animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
            }
        } else {
            isActiveRef.current = false;
            if (isActiveRef.current !== wasActive) {
                animate(boxShadow, inactiveShadow);
            }
        }
    });

    return boxShadow;
}
