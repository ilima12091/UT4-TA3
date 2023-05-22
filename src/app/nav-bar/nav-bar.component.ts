import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeItem: string = ''; // Tracks the currently active item

  onItemClick(item: string): void {
    this.activeItem = item;
  }

  

}
