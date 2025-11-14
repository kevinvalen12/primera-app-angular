import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet], 
  // templateUrl: './app.html',
  styleUrl: './app.css',
  //agragar template
  template: `
    <h1>Hello world!</h1>
  `,
})
export class App {
  title = 'home';
}
