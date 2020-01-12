import React from "react";
import '../style/answer.css';

type Props = {
    answer: number
    correct: number
    handleAnswer: (n: number) => () => void
}

const Answer: React.FC<Props> = (props) => {
    const {answer, correct, handleAnswer} = props;

    return (
        <div>
            {[...Array(3)].map((_, i) =>
                <div
                    key={`${i}-`}
                    className="answer"
                >
                    {[...Array(3)].map((_, j) => {
                        const n = i * 3 + j + 1;
                        let style = {
                            backgroundColor: '',
                        };
                        if (answer !== 0) {
                            if (n === answer) {
                                style.backgroundColor = 'red';
                            }
                            if (n === correct) {
                                style.backgroundColor = 'green';
                            }
                        }
                        return (
                            <button
                                key={j}
                                className="button"
                                onClick={handleAnswer(n)}
                                style={style}
                            >
                                {n}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    )
};

export default Answer;