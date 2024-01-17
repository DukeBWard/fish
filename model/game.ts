import { Player } from "./player";
import { Deck } from "./deck";

export class Game {
    private players: Player[];
    private deck: Deck;
    private currentPlayer: number;
    private direction: number;

    constructor() {
        this.players = [];
        this.deck = new Deck();
        this.currentPlayer = 0;
        this.direction = 1;
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    start() {
        this.deck.shuffle();
        this.players.forEach(player => {
            player.addCard(this.deck.drawCard());
        });
    }

    toString(): string {
        return `${this.players[this.currentPlayer].getName()} has ${this.players[this.currentPlayer].getHand().length} cards`;
    }
}