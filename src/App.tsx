import React, {useState} from 'react';
import './App.css';
import {Deck} from "./utils/Deck";
import Hands from "./components/Hands";
import Answer from "./components/Answer";
import {getStartingHandRank} from "./utils/StartingHandRank";

const App: React.FC = () => {
    const deck = new Deck();
    deck.shuffle();
    const [card1, setCard1] = useState(deck.pop());
    const [card2, setCard2] = useState(deck.pop());
    const [answer, setAnswer] = useState(0);
    const [correctNumber, setCorrectNumber] = useState(0);
    const correct = getStartingHandRank(card1, card2);

    const resetGame = () => {
        setTimeout(() => {
            setAnswer(0);
            const deck = new Deck();
            deck.shuffle();
            setCard1(deck.pop());
            setCard2(deck.pop());
        }, 1500);
    };

    const handleAnswer = (n: number) => {
        return () => {
            setAnswer(n);
            if (n !== correct) {
                setCorrectNumber(0);
                resetGame();
            } else {
                setCorrectNumber(v => v + 1);
                resetGame();
            }
        }
    };

    return (
        <div className="App">
            <Hands
                card1={card1}
                card2={card2}
            />
            <Answer
                answer={answer}
                correct={correct}
                handleAnswer={handleAnswer}
            />
            {correctNumber}
        </div>
    );
};

export default App;
