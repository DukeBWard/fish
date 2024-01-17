export class Card {
    private rank: string;
    private suit: string;

    constructor(rank: string, suit: string) {
        this.rank = rank;
        this.suit = suit;
    }

    getRank(): string {
        return this.rank;
    }

    getSuit(): string {
        return this.suit;
    }

    toString(): string {
        return `${this.rank} of ${this.suit}`;
    }
}
