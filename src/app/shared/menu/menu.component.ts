import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../interfaces/meal';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuComponent {
  meals: Meal[] = [];
  constructor(private recursos:MealsService){
    recursos.getData().subscribe(answer => {
      this.meals = answer as Array<Meal>
      console.log(answer)
    })
  }
 }
