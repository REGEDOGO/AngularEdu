import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Użycie ngIf oraz else';
  zmiennaBool = 1;
  change = false;

  author = {
    name: 'rege',
    age: 18,
  };

  onClick() {
    if (this.change) {
      this.change = false;
    } else this.change = true;
  }
}
