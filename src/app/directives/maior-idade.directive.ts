import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  //esse trecho de código determina que a diretiva será usada como um validador 
  providers: [{ 
    provide : NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator{
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {

    //Aqui montamos toda a lógica de negocios, temos em maos o ano de nascimento do usuario e vamos criar um novo objeto com o ano atual, isso nos trará a possibilidade de comparar as duas idades por meio de uma subtração. tudo isso no fim para obter o resutado booleano da maioridade, descrito no retorno da função
    const dataNascimento = control.value
    const ano = new Date(dataNascimento).getFullYear()
    const anoAtual = new Date().getFullYear()
    const idadeUsuario = anoAtual - ano;
    const maioridade : boolean = (anoAtual - ano) >= 18
    return maioridade? null : {'maiorIdadeValidator': true}
    //após isso é só injetar essa diretiva personalizada como um parâmetro no input de data de nascimento
  }
}
