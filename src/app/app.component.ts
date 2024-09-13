import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
// <!-- https://www.youtube.com/watch?v=QjaNv7s1gW0  check this video for the project -->
  title = 'e-managment';
}
