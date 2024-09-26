import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  headline: string;
  boardStatus: string[] = ['', '', '', '', '', '', '', '', ''];

  constructor(private gameService: GameService) {
    this.headline = this.gameService.headline;
  };

  handleBtnClick(id: number): void {
    if (!this.boardStatus[id] && !this.gameService.winner) {
      this.gameService.makeMove(this.boardStatus, id);
      this.headline = this.gameService.headline;
    }
  }
}