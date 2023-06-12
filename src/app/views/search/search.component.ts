import { Component, Input } from '@angular/core';
import { SearchServiceService } from 'src/app/services/user-profile-service/search-service.service';
import { SearchObject } from 'src/app/interfaces/search-object';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchId: string = '';
  searchResults: SearchObject[] = [];

  constructor(public searchService: SearchServiceService) {}

  searchImages(): void {
    this.searchResults = this.searchService.getSearchObjects().filter((searchObject) =>
      searchObject.id.toLowerCase().includes(this.searchId.toLowerCase())
    );
  }
}

