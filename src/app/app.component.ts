import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  similarLinkSelected = true;
  title = 'nlp-book-recommendation';

  reduceClicked(){
    this.similarLinkSelected = false;
  }

  similarClicked(){
    this.similarLinkSelected = true;
  }
}
