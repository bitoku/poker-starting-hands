import {CardCode} from "./CardCode";

const MIN = 1;
const MAX = 13;

export class Card {
    suit: string;
    rank: number;
    R: string;
    code: string;
    color: string;
    constructor(suit: string, rank: number) {
        this.suit = suit;
        this.rank = rank;
        this.R = this.rankConvert(this.rank);
        this.color = this.getColor(this.suit);
        this.code = CardCode[this.suit][this.rank];
    }

    rankConvert = (n: number): string => {
        if (n < MIN && MAX < n) {
            throw new Error("rank is out of range.")
        }
        if (n === 1) {
            return 'A'
        } else if (n === 10) {
            return 'T'
        } else if (n === 11) {
            return 'J'
        } else if (n === 12) {
            return 'Q'
        } else if (n === 13) {
            return 'K'
        }
        return n.toString()
    };

    getColor = (s: string): string => {
        if (s === 'H' || s === 'D') {
            return 'red'
        }
        return 'black'
    }
}