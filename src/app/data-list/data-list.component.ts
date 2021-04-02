import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  wordsList = [
    { beforeReduce: ['Amazing','Incredible','Unbelievable','Improbable','Fabulous','Wonderful','Fantastic','Astonishing','Astounding','Extraordinary'], afterReduce: 'Amazing' },
    { beforeReduce: ['Anger','Enrage','Infuriate','Arouse','Nettle','Exasperate','Inflame','Madden'], afterReduce: 'Anger' },
    { beforeReduce: ['Angry','Mad','Furious','Enraged','Excited','Wrathful','Indignant','Exasperated','Aroused','Inflamed'], afterReduce: 'Angry' },
    { beforeReduce: ['Answer','reply','respond','Retort','Acknowledge'], afterReduce: 'Answer' },
    { beforeReduce: ['Ask','Question','Inquire','Seek Information From','Put A Question To','Demand','Request','Expect','Inquire'], afterReduce: 'Ask' },
    { beforeReduce: ['Awful','dreadful','terrible','Abominable','Bad','Poor','Unpleasant'], afterReduce: 'Awful' },
    { beforeReduce: ['Small','Miniature','Limited'], afterReduce: 'Small' },
    { beforeReduce: ['Big','Colossal','Enormous'], afterReduce: 'Big' },
    { beforeReduce: ['Fat','Bulging'], afterReduce: 'Fat' },
    { beforeReduce: ['Thin','Delicate'], afterReduce: 'Thin' },
    { beforeReduce: ['Child','Kid'], afterReduce: 'Child' },
    { beforeReduce: ['Baby','Dwarf'], afterReduce: 'Baby' },
    { beforeReduce: ['Fat'], afterReduce: 'Fat' },
    { beforeReduce: ['Thin'], afterReduce: 'Thin' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
