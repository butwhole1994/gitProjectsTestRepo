import { useParams } from "react-router-dom";
import ScrollTriggerPop from "@/components/animations/ScrollTriggerPop/ScrollTriggerPop";
import ListDrag from "@/components/animations/ListDrag/ListDrag"
import StackCard from "../components/animations/StackCard/StackCard"
import CyclingSquare from "@/components/animations/CyclingSquare/CyclingSquare.tsx";
import CardFlip from "@/components/animations/CardFlip/CardFlip";
import CardDumbling from "@/components/animations/CardDumbling/CardDumbling.tsx";
import SpringSequences from "@/components/animations/SpringSequences/SpringSequences.tsx";
import CardCursor from "@/components/animations/CardCursor/CardCursor.tsx"

export default function AnimationViewer() {
    const { type } = useParams();

    switch (type) {
        case "ScrollTriggerPop":
            return <ScrollTriggerPop />;
        case "ListDrag":
            return <ListDrag />;
        case "StackCard":
            return <StackCard />;
        case "CyclingSquare":
            return <CyclingSquare />;
        case "CardFlip":
            return <CardFlip />;
        case "CardDumbling":
            return <CardDumbling />;
        case "SpringSequences":
            return <SpringSequences />;
        case "CardCursor":
            return <CardCursor />;
        default:
            return <div>알 수 없는 애니메이션입니다.</div>;
    }
}
