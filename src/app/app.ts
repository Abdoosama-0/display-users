import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Users } from "./components/users/users";

@Component({
  selector: 'app-root',
  imports: [Navbar, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('displayUsers');
}
