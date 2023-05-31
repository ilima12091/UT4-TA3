import { Component, Input } from '@angular/core';
import { SearchObject } from 'src/app/interfaces/search-object';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent {
  @Input() searchResults: SearchObject[] = [];
}
