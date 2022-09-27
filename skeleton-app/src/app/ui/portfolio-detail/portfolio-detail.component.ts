import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-portfolio-detail',
    templateUrl: './portfolio-detail.component.html',
    styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

    @Input() messageToChild2: string = "asd";
    @Output() messageToParent = new EventEmitter<string>();
  

    constructor() { }

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
        console.log("some changes occurred");
    }
}
