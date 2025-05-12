import { Link } from "react-router-dom";

const animations = ["ScrollTriggerPop", "ListDrag", "StackCard", "CyclingSquare", "CardFlip", "CardDumbling", "SpringSequences", "CardCursor"];

export default function Home() {
    return (
        <div>
            <h1>애니메이션 목록</h1>
            <ul>
                {animations.map((name) => (
                    <li key={name}>
                        <Link to={`/animations/${name}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
