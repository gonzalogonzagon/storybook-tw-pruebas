import { Component, EventEmitter, Output } from '@angular/core';
import { ChatButtonComponent } from "../../chat-button/chat-button/chat-button.component";

@Component({
  selector: 'app-chat-input',
  imports: [ChatButtonComponent],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  @Output() messageSent = new EventEmitter<string>();
  
  /**
   * Auto-redimensiona el textarea cuando el usuario escribe
   */
  autoResizeTextarea(textarea: HTMLTextAreaElement): void {
    // Resetear la altura para calcular el tamaño correcto
    textarea.style.height = 'auto';
    
    // Limitar la altura máxima a 150px (aproximadamente 6-7 líneas)
    const maxHeight = 150;
    
    // Ajustar la altura basada en el contenido
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
  }
  
  /**
   * Envía el mensaje y limpia el input
   */
  sendMessage(textarea: HTMLTextAreaElement): void {
    const message = textarea.value.trim();
    
    if (message) {
      this.messageSent.emit(message);
      textarea.value = '';
      
      // Resetear altura después de enviar
      textarea.style.height = 'auto';
      
      // Dar foco de nuevo al textarea
      textarea.focus();
    }
  }
}
