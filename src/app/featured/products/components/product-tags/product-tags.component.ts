import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-product-tags',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './product-tags.component.html',
  styleUrl: './product-tags.component.scss'
})
export class ProductTagsComponent {
  @Input() tags!: string[];
}
