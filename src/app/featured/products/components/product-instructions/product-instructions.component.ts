import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-instructions',
  standalone: true,
  imports: [],
  templateUrl: './product-instructions.component.html',
  styleUrl: './product-instructions.component.scss'
})
export class ProductInstructionsComponent {
  @Input() instructions!: string[];
}
