import { Component } from '@angular/core';
import { DANE } from './dane';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  jakisTitle = 'sigma meal';
  auta = ['BMW', 'Audi', 'Papamobil'];
  pusta = [];

  brainrot? = DANE;

  counter(i = 1) {
    return Array(i);
  }
}
