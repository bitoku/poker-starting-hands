import React from "react";
import {Card} from "../utils/Card";
import '../style/hands.css';

type Props = {
    card1: Card,
    card2: Card,
}

const Hands: React.FC<Props> = (props) => {
    const {card1, card2} = props;
    return (
        <div className="hands">
            <div style={{color: card1.color}}>
                {card1.code}
            </div>
            <div style={{color: card2.color}}>
                {card2.code}
            </div>
        </div>
    )
};

export default Hands;