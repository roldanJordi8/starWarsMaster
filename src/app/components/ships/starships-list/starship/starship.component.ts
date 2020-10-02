import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input() starShip: Starship;
  idStarShip: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.extractIdStarShip();
  }

  extractIdStarShip(): void {
    const arraySplit = this.starShip.url.split('/');
    this.idStarShip = +arraySplit[arraySplit.length - 2];
  }

  openStarshipDetails(): void {
    this.router.navigate(['../', this.idStarShip], { relativeTo: this.route });
  }

}
