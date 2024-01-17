import { Player } from "./player";
import { Deck } from "./deck";
import { Card } from "./card";

export class Game {
    private teams: {
        team1: Player[];
        team2: Player[];
    };
    private players: Player[];
    private currentPlayer: Player | null;
    private remainingBooks: number;
    private isGameOver: boolean;

    constructor() {
        this.teams = { team1: [], team2: [] };
        this.currentPlayer = null;
        this.remainingBooks = 8; // Number of books (sets) in the game
        this.isGameOver = false;
    }

    public dealCards(deck: Deck, players: Player[]): void {
        const cardsPerPlayer = players.length === 6 ? 8 : 6;

        for (let i = 0; i < cardsPerPlayer; i++) {
            for (const player of players) {
                const card = deck.drawCard();
                player.addCard(card);
            }
        }
    }

    public playTurn(question: string, requestedCard: Card): void {

    }

    public claimBook(claimingPlayer: number, book: Card[][]): void {
     
    }

    public checkGameOver(): boolean {
 
        return this.isGameOver;
    }

    public determineWinner(): string {
 
        return 'Team 1'; 
    }

}