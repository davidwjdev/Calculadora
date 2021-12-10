import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private num1: string;
  private num2: string;
  private res: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void{
    this.num1 = '0';
    this.num2 = null;
    this.res = null;
    this.operacao = null;
  }

  adicionarNumero(num: string): void{
    if(this.operacao === null){
      this.num1 = this.concatenaNumero(this.num1, num);
    } else {
      this.num2 = this.concatenaNumero(this.num2, num);
    }
  }

  concatenaNumero(numAtual: string, numConcat: string): string {
    if(numAtual === '0' || numConcat === null){
      numAtual = '';
    }
    if(numConcat === '.' && numAtual===''){
      return '0.';
    }
    if(numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if(this.operacao === null){
      this.operacao = operacao;
      return;
    }

    if(this.num2 !== null){
      this.res = this.calculadoraService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao);
      this.operacao = operacao;
      this.num1 = this.res.toString();
      this.num2 = null;
      this.res = null;
    }
  }

  calcular(): void {
    if(this.num2 === null){
      return;
    }
    this.res = this.calculadoraService.calcular(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao
    );
  }

  get display(): string{
    if(this.res !== null){
      return this.res.toString();
    }
    if(this.num2 !== null){
      return this.num2;
    }
    return this.num1;
    
  }

}
