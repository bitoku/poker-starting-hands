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
            {[...Array(3)].map((_, i) =>
                <div key={`${i}-`} className="answer">
                    {[...Array(3)].map((_, j) =>
                        <button key={j} className="button">{i*3 + j + 1}</button>
                    )}
                </div>
            )}
        </div>
    )
};

export default Answer;