import { Component } from '@angular/core';
import { ChatInputComponent } from '../../chat-input/chat-input/chat-input.component';

interface ChatMessage {
  text: string;
  isUserMessage: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat-view',
  imports: [ChatInputComponent],
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.css'
})
export class ChatViewComponent {
  messages: ChatMessage[] = [
    {
      text: 'Hola, ¿cómo estás?',
      isUserMessage: false,
      timestamp: new Date(Date.now() - 3 * 60000)
    },
    {
      text: '¡Muy bien! ¿Y tú? Estoy probando esta nueva interfaz de chat.',
      isUserMessage: true,
      timestamp: new Date(Date.now() - 2 * 60000)
    },
    {
      text: '¡Se ve genial! Me encanta cómo queda con Tailwind.',
      isUserMessage: false,
      timestamp: new Date(Date.now() - 1 * 60000)
    }
  ];

  handleNewMessage(message: string): void {
    // Añadir el mensaje del usuario
    this.messages.push({
      text: message,
      isUserMessage: true,
      timestamp: new Date()
    });

    // Simular respuesta automática
    setTimeout(() => {
      this.messages.push({
        text: 'Gracias por tu mensaje. Te responderemos pronto.',
        isUserMessage: false,
        timestamp: new Date()
      });
    }, 1000);
  }
  
  // Helper para formatear la hora
  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
