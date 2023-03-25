import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarouselModule} from 'primeng/carousel';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RecipeComponent } from './recipe/recipe.component';
// import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
// import {MatTableModule} from '@angular/material/table';
// import {MatIconModule} from '@angular/material/icon'
// import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageUploadComponent } from './image-upload/image-upload.component'
import { UploadDialogComponent } from './image-upload/upload-dialog/upload-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  declarations: [
    AppComponent,
    // RecipeComponent,
    // RecipeDetailComponent,
    UploadDialogComponent,
    // ShoppingListComponent,
    ImageUploadComponent
  ],
  imports: [
    ImageCropperModule,
    BrowserAnimationsModule,
    BrowserModule,
    // MatCardModule,
    // MatTableModule,
    // MatIconModule,
    AppRoutingModule,
    CarouselModule,
    MatDialogModule,
    
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
