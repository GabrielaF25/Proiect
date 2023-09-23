import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating=0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>();
  ngOnChanges(): void {
    this.cropWidth=this.rating*75/5;
  }
OnClick():void{
  this.ratingClicked.emit(`The rating${this.rating} was clicked!`);
}
}
