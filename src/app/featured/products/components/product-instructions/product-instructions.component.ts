import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-product-instructions',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './product-instructions.component.html',
  styleUrl: './product-instructions.component.scss'
})
export class ProductInstructionsComponent {
  @Input() instructions!: string[];
}
