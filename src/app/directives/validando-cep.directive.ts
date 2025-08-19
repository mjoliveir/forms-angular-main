import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Directive({
  selector: '[validadorCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidandoCepDirective,
    multi: true 
  }]
})
export class ValidandoCepDirective implements AsyncValidator{

  constructor(private consultacepService: ConsultaCepService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.consultacepService.getConsultaCep(cep).pipe(map(
      (resultado: any) => resultado.erro? {'validadorCep': true} :
      null
    ))

  }
}
