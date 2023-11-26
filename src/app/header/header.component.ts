import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() headerEvent = new EventEmitter<number>();
  collapsed = true;

  onHeaderClick(category: number) {
    this.headerEvent.emit(category);
  }
}
