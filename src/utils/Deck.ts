import {Card} from "./Card";
import {Ranks, Suits} from "./Constants";

export class Deck {
    cards: Card[];
    constructor() {
        this.cards = [];
        for (let s of Suits) {
            for (let r of Ranks) {
                const card: Card = new Card(s, r);
                this.cards.push(card)
            }
        }
    }

    shuffle = () => {
        const len = this.cards.length;
        for (let i = 0; i < len; i++) {
            const j: number = Math.floor(Math.random() * len);
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    };

    pop = (): Card => {
        const c = this.cards.pop();
        if (c === undefined) {
            throw new Error("No more cards.");
        }
        return c;
    }
}