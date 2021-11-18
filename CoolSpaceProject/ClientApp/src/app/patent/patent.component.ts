import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {
  @Input() patent?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
