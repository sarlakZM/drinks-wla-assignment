import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product-ingredients',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './product-ingredients.component.html',
  styleUrl: './product-ingredients.component.scss'
})
export class ProductIngredientsComponent {
  @Input() ingredients!: string[];
}
