import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReduceWordsComponent } from './reduce-words/reduce-words.component';
import { FindSimilarBooksComponent } from './find-similar-books/find-similar-books.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataListComponent } from './data-list/data-list.component';


const routes: Routes = [ 
  {path:'', redirectTo: '/find-similar-books', pathMatch: 'full'},
  {path:'find-similar-books', component: FindSimilarBooksComponent},
  {path:'reduce-words', component: ReduceWordsComponent},
  {path:'data-table', component: DataTableComponent},
  {path:'data-list', component: DataListComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FindSimilarBooksComponent,
                                  PageNotFoundComponent,
                                  ReduceWordsComponent,
                                  DataTableComponent,
                                  DataListComponent]
