import { Card } from './card';

export class Player {
    private name: string;
    private hand: Card[];
    private score: number;

    constructor(name: string) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    getName(): string {
        return this.name;
    }

    getHand(): Card[] {
        return this.hand;
    }

    getScore(): number {
        return this.score;
    }

    addCard(card: Card) {
        this.hand.push(card);
    }

    removeCard(card: Card) {
        const index = this.hand.indexOf(card);
        if (index !== -1) {
            this.hand.splice(index, 1);
        }
    }

    toString(): string {
        return `${this.name} has ${this.score} points`;
    }
}