import { Injectable } from '@angular/core';
import { SearchObject } from 'src/app/interfaces/search-object';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor() { }

  searchObjects: SearchObject[]=[
    {
      id:'Dog',
      name:'Dog 1',
      imageUrl:'assets/dog1.jpg'
    },
    {
      id:'Dog',
      name:'Dog 2',
      imageUrl:'assets/dog2.jpg'
    },
    {
      id:'Dog',
      name:'Dog 3',
      imageUrl:'assets/dog3.jpg'
    },
    {
      id:'Dog',
      name:'Dog 4',
      imageUrl:'assets/dog4.jpg'
    },
    {
      id:'Cat',
      name:'Cat 1',
      imageUrl:'Dog1.jpg'
    },
    {
      id:'Cat',
      name:'Cat 2',
      imageUrl:'Dog1.jpg'
    },
    {
      id:'Cat',
      name:'Cat 3',
      imageUrl:'Dog1.jpg'
    },
    

  ]
  
  getSearchObjects(): SearchObject[] {
    return this.searchObjects;
  }
  getSearchObjectById(id: string) : SearchObject | undefined {
    return this.searchObjects.find((searchObject) => searchObject.id === id);
  }

  
}
