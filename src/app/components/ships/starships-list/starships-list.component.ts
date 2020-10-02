import { Component, Input, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  @Input() starShips: Starship[];

  constructor() { }

  ngOnInit(): void {
  }

}
