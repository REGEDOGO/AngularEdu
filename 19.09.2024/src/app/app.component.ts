import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Szalba';
  zmienna = 'unnamed';

  getinfo() {
    return 'funkcja zwracająca';
  }

  onkeyup(newName: string) {
    newName == '' ? (this.title = 'Szalba') : (this.title = newName);
  }
}
