import { Card } from './card';

export class Deck {
    private cards: Card[];

    constructor() {
        this.cards = [];
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    removeCard(card: Card) {
        const index = this.cards.indexOf(card);
        if (index !== -1) {
            this.cards.splice(index, 1);
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard(): Card | undefined {
        return this.cards.pop();
    }

}
