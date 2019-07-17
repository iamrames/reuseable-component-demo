import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  // tslint:disable-next-line: no-input-rename
  @Input('isFavorite') isSelected: boolean;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}
