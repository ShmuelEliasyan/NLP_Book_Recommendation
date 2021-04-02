import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindSimilarBooksComponent } from './find-similar-books/find-similar-books.component';
import { ReduceWordsComponent } from './reduce-words/reduce-words.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListComponent } from './data-list/data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FindSimilarBooksComponent,
    ReduceWordsComponent,
    DataTableComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    AngularFileUploaderModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
