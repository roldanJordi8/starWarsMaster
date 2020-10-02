import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipsService } from 'src/app/core/services/ships.service';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {

  starShipId: number;
  starShip: Starship;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shipsService: ShipsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.starShipId = params.id;
    });
    this.loading = true;
    this.shipsService.getStarShip(this.starShipId).subscribe(data => {
      this.starShip = data;
      this.loading = false;
    });

  }

}
