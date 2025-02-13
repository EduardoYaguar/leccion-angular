import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./shared/home/home.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AboutComponent } from "./shared/about/about.component";
import MenuComponent from "./shared/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, AboutComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leccion';
}
