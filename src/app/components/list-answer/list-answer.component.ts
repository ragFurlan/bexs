import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
    id: Observable<string>;

  constructor(route: ActivatedRoute) { 
    this.id = route.params.pipe(map(p => p.id));
   
  }

  ngOnInit(): void {
  }

}
