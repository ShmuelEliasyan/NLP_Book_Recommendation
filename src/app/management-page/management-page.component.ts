import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css']
})

export class ManagementPageComponent implements OnInit {
  
  similarLinkSelected: boolean;
  title = 'nlp-book-recommendation';
  findSimilarBooks = "find-similar-books";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.similarLinkSelected = this.router.url.includes(this.findSimilarBooks);
  }
}
