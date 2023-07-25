import { EventEmitter,Injectable} from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_ limit/bolognese-1.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_ limit/bolognese-1.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ]),    
        new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_ limit/bolognese-1.jpg',
        [
            new Ingredient('French Fries',20),
            new Ingredient('Meat',1)
        ]),
        new Recipe('A Test Recipe 4', 'This is simply a test 4', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_ limit/bolognese-1.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('Buns',2)
        ]),
        new Recipe('A Test Recipe 5', 'This is simply a test 5', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_ limit/bolognese-1.jpg',
        [
            new Ingredient('Pho',3),
            new Ingredient('Meat',1)
        ]),
    ];

    constructor(private slService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();//Return copy array instead of real array
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
}