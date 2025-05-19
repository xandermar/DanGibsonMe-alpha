import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentYear: number = new Date().getFullYear();

  getYearsSince(startYear: number): number {
    return this.currentYear - startYear;
  }
}
