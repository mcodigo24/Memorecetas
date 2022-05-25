import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
})
export class DividerComponent implements OnInit {
  @Input() dividerTitle: string = '';
  @Input() cantRec: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
