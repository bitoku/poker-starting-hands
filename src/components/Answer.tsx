import React from "react";
import '../style/answer.css';

type Props = {
    correct: number
    correctCallback?: (input: number, answer: number) => void,
    wrongCallback?: (input: number, answer: number) => void,
}
const Answer: React.FC<Props> = () => {
    return (
        <div>
            <div className="answer">
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
            </div>
            <div className="answer">
                <button className="button">4</button>
                <button className="button">5</button>
                <button className="button">6</button>
            </div>
            <div className="answer">
                <button className="button">7</button>
                <button className="button">8</button>
                <button className="button">9</button>
            </div>
        </div>
    )
};

export default Answer;