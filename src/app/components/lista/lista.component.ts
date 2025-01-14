import { Component, Input } from '@angular/core';
import { EditoralistComponent } from '../editora/editoralist/editoralist.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [EditoralistComponent, NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  @Input() data: any[]; // Defina a propriedade de entrada editoras

  constructor() {
    this.data = []; // Inicialize a propriedade editoras no construtor
  }

  adicionarNovoItem() {
    const novoItem = window.prompt('Nome da editora a ser adicionada');
    if (novoItem) {
      this.data.push({ id: this.data.length + 1, nome: novoItem });
    }
  }
}
