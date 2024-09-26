import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GameService} from "../game.service";
import {BoardComponent} from "../board/board.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, BoardComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent implements OnInit {
  regForm = new FormGroup({
    uname1: new FormControl(''),
    uname2: new FormControl(''),
  });

  headline: string;

  constructor(private router: Router, private gServ: GameService) {
    // //this.regForm = ...
    this.headline = "";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const player1 = this.regForm.value.uname1;
    const player2 = this.regForm.value.uname2;
    this.gServ.registerPlayers(player1!, player2!);
    this.router.navigate(['/board']);
  }
}