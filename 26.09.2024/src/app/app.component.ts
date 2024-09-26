import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  arg1 = 0;
  arg2 = 0;
  wynik = 0;
  dzialanie = 1;

  oblicz() {
    this.dzialanie == 1
      ? (this.wynik = this.arg1 + this.arg2)
      : this.dzialanie == 2
      ? (this.wynik = this.arg1 - this.arg2)
      : this.dzialanie == 3
      ? (this.wynik = this.arg1 * this.arg2)
      : (this.wynik = this.arg1 / this.arg2);
  }
}
