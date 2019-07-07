import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css']
})
export class ModelCardComponent implements OnInit {
  @Input() title: string;

  constructor(public router: Router) {}

  ngOnInit() {}

  openAnotherUserdata() {
    this.router.navigate(['another-user']);
  }
}
