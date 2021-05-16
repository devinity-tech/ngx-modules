import { Component, Input, OnInit } from '@angular/core';
import { PillType } from './pill-type.enum';

@Component({
  selector: 'devinity-tech-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  @Input() public type: PillType= PillType.Info;
  @Input() public label = '';
  @Input() public iconClasses = '';


  constructor() { }

  ngOnInit(): void {
  }

}
