import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameToAdd = '';
  amountToAdd = 0;
  @Output() shopToAdd = new EventEmitter<{name: string, amount: number}>();
  constructor(private slService: ShoppingListService) { }
  ngOnInit() {}

  onSubmit() {
    const newIngredient = new Ingredient(this.nameToAdd, this.amountToAdd);
    this.slService.addIngredient(newIngredient);
  }
}
