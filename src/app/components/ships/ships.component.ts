import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ShipsService } from '../../core/services/ships.service';

export interface ShipsData {
  count: number;
  next?: string;
  previous?: string;
  results: [];
}

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  starShips;
  loading = true;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getStarShips().subscribe((data: ShipsData) => {
      this.starShips = data;
      this.loading = false;
      console.log(this.starShips);
    });
  }

}
