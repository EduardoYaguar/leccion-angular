import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal',
  imports: [],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealComponent {

}
