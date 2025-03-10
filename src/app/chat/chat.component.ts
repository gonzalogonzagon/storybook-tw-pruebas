import { Component } from '@angular/core';
import { ChatViewComponent } from './chat-view/chat-view/chat-view.component';

@Component({
  selector: 'app-chat',
  imports: [ ChatViewComponent],
  templateUrl: './chat.component.html',
})
export class ChatComponent {

}
