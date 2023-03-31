import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RecipeComponent } from './recipe/recipe.component';
// import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageUploadComponent } from './image-upload/image-upload.component'
import { UploadDialogComponent } from './image-upload/upload-dialog/upload-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    // RecipeComponent,
    // RecipeDetailComponent,
    UploadDialogComponent,
    // ShoppingListComponent,
    ImageUploadComponent,
    FooterComponent
  ],
  imports: [
    ImageCropperModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatTooltipModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
