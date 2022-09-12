import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Body } from '../../interfaces/body';
import { Restaurant } from '../../interfaces/restaurant';
import { StoreInfo } from '../../interfaces/store-info';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css'],
})
export class RestaurantInfoComponent implements OnInit {
  @Input() testText: StoreInfo | null = null;

  constructor() {}

  ngOnInit() {}
}
