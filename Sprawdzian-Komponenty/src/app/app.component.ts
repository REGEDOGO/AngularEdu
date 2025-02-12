import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoraComponent } from './gora/gora.component';
import { SrodekComponent } from './srodek/srodek.component';
import { DolComponent } from './dol/dol.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoraComponent, SrodekComponent, DolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CodeSandbox';
}
