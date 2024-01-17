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

    // private switchPlayer(): void {
     
    // }

    // public dealCards(deck: Deck, numPlayers: number): void {

    // }

    // public playTurn(question: string, requestedCard: Card): void {

    // }

    // public claimBook(claimingPlayer: number, book: Card[][]): void {
     
    // }

    // public checkGameOver(): boolean {
 
    //     return this.isGameOver;
    // }

    // public determineWinner(): string {
 
    //     return 'Team 1'; 
    // }

}