import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
// import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
// import { RecipeComponent } from './recipe/recipe.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  // {path:'recipe/details/:id',component:RecipeDetailComponent},
  // {path:'recipe',component:RecipeComponent},
  // {path:'shopping',component:ShoppingListComponent},
  // { path: '**', component: RecipeComponent, pathMatch: 'full' },
  {path:'**',component:ImageUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
