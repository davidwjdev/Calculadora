import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1+4 eh 5',
    inject([CalculadoraService], (service: CalculadoraService) =>{
      let soma = service.calcular(1,4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }));
  
    it('deve garantir que 4-1 eh 3',
    inject([CalculadoraService], (service: CalculadoraService)=> {
      let subtracao = service.calcular(4,1, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(3);
    }));

    it('deve garantir que  2*2 eh 4',
    inject([CalculadoraService], (service: CalculadoraService) =>{
      let multiplicacao = service.calcular(2,2, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    }));

    it('deve garantir que 6/3 eh 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(6,3, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    }));

    it('deve retornar 0 para operacao invalida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(4,2, '%');
      expect(operacaoInvalida).toEqual(0);
    }))
});
