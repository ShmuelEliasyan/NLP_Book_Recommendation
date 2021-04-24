import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  similarBooksList: Object[] = [{id:'123',name: 'First Book'} ,{id:'234',name: 'Second Book'} ,{id:'345',name: 'Third Book'} ,{id:'456',name: 'Fourth Book'} ,{id:'567',name: 'Fifth Book'}];
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  navigateToBook(bookId){
    this.router.navigateByUrl('/book-view/' + bookId);
  }

}
