import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-bar-items',
  templateUrl: './nav-bar-items.component.html',
  styleUrls: ['./nav-bar-items.component.css']
})
export class NavBarItemsComponent {

  @Output() itemClick = new EventEmitter<string>();
  activeItem: string = '';

  onClick(item: string): void {
    this.activeItem = item;
    this.itemClick.emit(item);
  }
 

  
}
