import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Body } from '../../interfaces/body';
import { Restaurant } from '../../interfaces/restaurant';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent implements OnInit {
  restaurants: Restaurant[] = [];
  page: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.onGetData();
  }
  onGetData(): void {
    this.restaurants = [];

    this.dataService.getData(10, 0).subscribe((res) => {
      this.restaurants = res.response;
    });
  }

  setPage(page: number) {
    this.page = page;
    this.dataService.getData(10, page * 10).subscribe((res) => {
      this.restaurants = res.response;
    });
  }
  //   calculateDistance(){
  // // var a = x1 - x2;
  // // var b = y1 - y2;

  // // var c = Math.sqrt( a*a + b*b );

  // // c is the distance
  //   }
}
