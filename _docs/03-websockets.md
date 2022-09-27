https://websockets.readthedocs.io/en/9.0.1/intro.html#installation
https://indepth.dev/tutorials/angular/how-to-implement-websockets-in-angular-project

return new Observable(
    observer => {
      try {
        observer.next('Hello from observable');

        // throw("Got an error");
         // some other code can be here
      } catch(err) {
         observer.error(err);
       } finally {
         observer.complete();
       }
    }
);

import {Observable } from 'rxjs';

export class WebSocketService {

  ws: WebSocket;
  socketIsOpen = 1;

  createObservableSocket(url: string): Observable<any> {
     this.ws = new WebSocket(url);

    return new Observable(
       observer => {

        this.ws.onmessage = (event) =>
          observer.next(event.data);

        this.ws.onerror = (event) => observer.error(event);

        this.ws.onclose = (event) => observer.complete();

        return () =>
            this.ws.close(1000, "The user disconnected");
       }
    );
  }

  sendMessage(message: string): string {
    if (this.ws.readyState === this.socketIsOpen) {
       this.ws.send(message);
       return `Sent to server ${message}`;
    } else {
      return 'Message was not sent - the socket is closed';
     }
  }
}



import {Component, OnDestroy} from "@angular/core";
import {WebSocketService} from "./websocket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  providers: [ WebSocketService ],
  template: `<h1>Angular client for a WebSocket server</h1>
  {{messageFromServer}}<br>
  <button (click)="sendMessageToServer()">Send Message to Server</button>
  <button (click)="closeSocket()">Disconnect</button>
  <div>{{status}}</div>
  `})
export class AppComponent implements OnDestroy {

  messageFromServer: string;
  wsSubscription: Subscription;
   status;

  constructor(private wsService: WebSocketService) {

    this.wsSubscription =
      this.wsService.createObservableSocket("ws://localhost:8085")
       .subscribe(
        data => this.messageFromServer = data,
         err => console.log( 'err'),
        () =>  console.log( 'The observable stream is complete')
      );
  }

  sendMessageToServer(){
    this.status = this.wsService.sendMessage("Hello from client");
   }

  closeSocket(){
    this.wsSubscription.unsubscribe();
     this.status = 'The socket is closed';
  }

  ngOnDestroy() {
    this.closeSocket();
  }
}



------------

import {Server} from "ws";

let wsServer = new Server({port:8085});

console.log('WebSocket server is listening on port 8085');

wsServer.on('connection',
    websocket => {

     websocket.send('Hello from the two-way WebSocket server');

     websocket.onmessage = (message) =>
              console.log(`The server received: ${message['data']}`);

     websocket.onerror = (error) =>
          console.log(`The server received: ${error['code']}`);

     websocket.onclose = (why) =>
          console.log(`The server received: ${why.code} ${why.reason}`);
   });
   

https://tutorialedge.net/typescript/angular/angular-websockets-tutorial/
https://javascript-conference.com/blog/real-time-in-angular-a-journey-into-websocket-and-rxjs/
https://indepth.dev/tutorials/angular/how-to-implement-websockets-in-angular-project
