import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})
export class BooksCatalogComponent {

  constructor(private router: Router) { }
  
  imageObject: Array<object> = [{
    image: 'https://i.postimg.cc/qq7w84YT/slider-image-1.jpg',
    thumbImage: 'https://i.postimg.cc/KYmWsS31/slider-image-1.jpg',
  }, {  
    image: 'https://i.postimg.cc/GhHzt3GP/slider-image-2.jpg',
    thumbImage: 'https://i.postimg.cc/x1PQdPKb/slider-image-2.jpg',
  }, {
    image: 'https://i.postimg.cc/YCF3NXXh/slider-image-3.jpg',
    thumbImage: 'https://i.postimg.cc/pyNGfgtX/slider-image-3.jpg',
  }, {
    image: 'https://i.postimg.cc/MGbmNnJw/slider-image-4.jpg',
    thumbImage: 'https://i.postimg.cc/26KX61cW/slider-image-4.jpg',
  }, {
    image: 'https://i.postimg.cc/WbC8kRwB/slider-image-5.jpg',
    thumbImage: 'https://i.postimg.cc/SKVvBTcD/slider-image-5.jpg',
  }, {
    image: 'https://i.postimg.cc/V6fW8zzC/slider-image-6.jpg',
    thumbImage: 'https://i.postimg.cc/WzqYJsCH/slider-image-6.jpg',
  }, {
    image: 'https://i.postimg.cc/PqkMSmcK/slider-image-7.jpg',
    thumbImage: 'https://i.postimg.cc/QttyhQbs/slider-image-7.jpg',
  }, {
    image: 'https://i.postimg.cc/G2XJ36pS/slider-image-8.jpg',
    thumbImage: 'https://i.postimg.cc/KvBF6bjf/slider-image-8.jpg',
  }, {
    image: 'https://i.postimg.cc/wjDXR1vN/slider-image-9.jpg',
    thumbImage: 'https://i.postimg.cc/3xh77qDT/slider-image-9.jpg',
  }, {
    image: 'https://i.postimg.cc/2yJQhvhQ/slider-image-10.jpg',
    thumbImage: 'https://i.postimg.cc/WpDs7gPQ/slider-image-10.jpg',
  }, {
    image: 'https://i.postimg.cc/cC67vTg1/slider-image-11.jpg',
    thumbImage: 'https://i.postimg.cc/HLsg872v/slider-image-11.jpg',
  }, {
    image: 'https://i.postimg.cc/j2t70cKd/slider-image-2.jpg',
    thumbImage: 'https://i.postimg.cc/T2ZfN1dh/slider-image-12.jpg',
  }, {
    image: 'https://i.postimg.cc/L6YBRCFN/slider-image-13.jpg',
    thumbImage: 'https://i.postimg.cc/RFWxX52c/slider-image-13.jpg',
  }, {
    image: 'https://i.postimg.cc/c15Mpq2v/slider-image-14.jpg',
    thumbImage: 'https://i.postimg.cc/XvH0f71j/slider-image-14.jpg',
  }, {
    image: 'https://i.postimg.cc/9F6PfdWV/slider-image-15.jpg',
    thumbImage: 'https://i.postimg.cc/Y9TKPDwT/slider-image-15.jpg',
  }];

  onImageClick(imageId){
    this.router.navigateByUrl('/book-view/' + imageId);
  }
}
