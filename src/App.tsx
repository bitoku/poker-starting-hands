import React from 'react';
import './App.css';
import {Deck} from "./utils/Deck";
import Hands from "./components/Hands";
import Answer from "./components/Answer";
import {getStartingHandRank} from "./utils/StartingHandRank";

const App: React.FC = () => {
    const deck = new Deck();
    deck.shuffle();
    const card1 = deck.pop();
    const card2 = deck.pop();

    return (
        <div className="App">
            <Hands
                card1={card1}
                card2={card2}
            />
            {/*{getStartingHandRank(card1, card2)}*/}
            <Answer
                correct={getStartingHandRank(card1, card2)}
            />
        </div>
    );
};

export default App;
