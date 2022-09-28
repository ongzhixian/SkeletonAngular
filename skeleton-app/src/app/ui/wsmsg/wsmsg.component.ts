import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
    selector: 'app-wsmsg',
    templateUrl: './wsmsg.component.html',
    styleUrls: ['./wsmsg.component.css']
})
export class WsmsgComponent implements OnInit {

    constructor() { }

    subject = webSocket('ws://127.0.0.1:5678');
    messageToSend?: string = "";

    ngOnInit(): void {
        this.subject.subscribe({
            next: msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
            error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
            complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
        });
    }

    sendMessage() {
        console.log(`Send '${this.messageToSend}'`);
        this.subject.next(this.messageToSend);
    }
}




