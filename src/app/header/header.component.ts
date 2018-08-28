import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  navSelected = 'recipe';
  onSelect(feature: string) {
    this.navSelected = feature;
    this.featureSelected.emit(feature);
  }
}
