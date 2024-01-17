import { Player } from "./player";
import { Deck } from "./deck";

export class Game {
    private teams: {
        team1: Player[];
        team2: Player[];
    };
    private currentPlayer: Player | null;
    private remainingBooks: number;
    private isGameOver: boolean;

    constructor() {
        this.teams = { team1: [], team2: [] };
        this.currentPlayer = null;
        this.remainingBooks = 8; // Number of books (sets) in the game
        this.isGameOver = false;
    }

}