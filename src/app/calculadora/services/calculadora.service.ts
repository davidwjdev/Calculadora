/**
 * Serviço responsável por executar as operações
 * da calculadora
 * 
 * @autor David
 * @since 1.0.0
 */
import { ClassField } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*
   define as constantes utilizadas
   para identificar as operações de cálculo
   */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * 
   * @param num1 number Primeiro numero digitado pelo usuario
   * @param num2 number Segundo numero digitado pelo usuario
   * @param operacao string Operação a ser executada
   * @returns number Retorna resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operação
    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
