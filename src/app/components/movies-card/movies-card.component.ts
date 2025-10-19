import { Component, Input } from '@angular/core';
import { Movies } from '../../interfaces/movies';

@Component({
  selector: 'app-movies-card',
  standalone: false,
  templateUrl: './movies-card.component.html',
  styleUrl: './movies-card.component.css',
})
export class MoviesCardComponent {
  @Input() movies: Movies | undefined;
}
