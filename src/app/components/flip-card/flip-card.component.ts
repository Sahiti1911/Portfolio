import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  imports: [CommonModule],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css',
})
export class FlipCardComponent {
  @Input() skill = '';
  @Input() icon = '';
  @Input() rating = '';
  @Input() tools: string[] = [];

  flipped = false;

  toggleFlip() {
    this.flipped = !this.flipped;
    console.log('Flipped:', this.flipped);
  }
}
