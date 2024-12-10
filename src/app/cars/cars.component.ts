import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  cars = [
    {
      name: 'Toyota Camry',
      description: 'Comfortable and fuel-efficient.',
      price: '$50/day',
      image: 'assets/images/Toyota carmy.jpg',
    },
    {
      name: 'BMW 5 Series',
      description: 'Luxury and performance combined.',
      price: '$120/day',
      image: 'assets/images/BMW Series 5.jpg',
    },
    {
      name: 'Ford Mustang',
      description: 'A true icon of speed.',
      price: '$150/day',
      image: 'assets/images/Ford Mustang.jpg',
    },
    // Add more car objects here
  ];
}
