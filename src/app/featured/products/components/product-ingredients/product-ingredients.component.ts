import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './product-ingredients.component.html',
  styleUrl: './product-ingredients.component.scss'
})
export class ProductIngredientsComponent {
  @Input() ingredients!: string[];
}
