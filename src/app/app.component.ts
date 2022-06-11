import { Component } from '@angular/core';
import { Carta } from './models/Carta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cartaMostrar: Carta = new Carta('1', 'copas');

  //public naipe: Naipe = new Naipe('Copas', 'Preto');

  public cartas = [
    {numero: 'A'},
    {numero: '2'},
    {numero: '3'},
    {numero: '4'},
    {numero: '5'},
    {numero: '6'},
    {numero: '7'},
    {numero: 'J'},
    {numero: 'Q'},
    {numero: 'K'},
    ];

  public naipes = [
    {nome: "copas"},
    {nome: "paus"},
    {nome: "ouro"},
    {nome: "espada"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public exibeCarta(nome: string, naipe: string):Carta {
    if (nome !== '') {
      alert('Você selecionou o ' + nome + ' de ' + this.cartaMostrar.naipe);
      this.cartaMostrar.nome = nome;
    }
    if (naipe !== '') {
      alert('Você selecionou o ' + this.cartaMostrar.nome + ' de ' + naipe);
      this.cartaMostrar.naipe = naipe;
    }

    //this.cartaMostrar = new Carta(nome, '');
    return this.cartaMostrar;
  }

}
