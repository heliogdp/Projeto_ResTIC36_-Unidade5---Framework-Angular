import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent implements OnInit {
  horaAtual: string = '';

  constructor() { }

  ngOnInit(): void {
    this.atualizarHora();
    setInterval(() => {
      this.atualizarHora();
    }, 1000); // Atualiza a cada 1 segundo
  }

  atualizarHora() {
    const agora = new Date();
    this.horaAtual = agora.toLocaleTimeString();
  }
}
