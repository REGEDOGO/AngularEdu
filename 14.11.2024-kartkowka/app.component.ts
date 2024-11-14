import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';

  wiersze = 10;
  kolumny = 10;
  dzielnik = 1;

  powtorz(i = 1) {
    return Array(i);
  }
}
