import {Card} from "./Card";
import {STARTING_HAND_RANKS} from "./Constants";

export const getStartingHand = (card1: Card, card2: Card): string => {
    if (card1.rank === card2.rank) {
        return card1.R + card2.R;
    }
    let suit = 'o';
    if (card1.suit === card2.suit) {
        suit = 's';
    }
    if (card1.rank === 1 || (card2.rank !== 1 && card1.rank > card2.rank)) {
        return card1.R + card2.R + suit;
    }
    return card2.R + card1.R + suit;
};

export const getStartingHandRank = (card1: Card, card2: Card): number => {
    const startingHand = getStartingHand(card1, card2);
    const rank = STARTING_HAND_RANKS[startingHand];
    if (rank === undefined) {
        return 9
    }
    return rank
};

