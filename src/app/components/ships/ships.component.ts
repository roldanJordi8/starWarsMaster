import { HttpErrorResponse } from '@angular/common/http';
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

  starShips = [];
  loading = true;
  APIerror = false;
  page = 1;
  firstPageURL = 'https://swapi.dev/api/starships/?page=1';

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.getStarShipsPage(this.firstPageURL);
  }

  getStarShipsPage(url): void {
    this.shipsService.getStarShips(url).subscribe((data: ShipsData) => {
      this.starShips.push(data);
      if (data.next !== null) {
        this.getStarShipsPage(data.next);
      }
      this.loading = false;
    },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.APIerror = true;
      });
  }

  prevPage(): void {
    this.page--;
  }

  nextPage(): void {
    this.page++;
  }



}
