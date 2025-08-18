import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form : NgForm){
    if (form.valid){
      this.router.navigate(['./sucesso']) //esse comando envia o usuario ao path 'sucesso' definido em app-routing.module
    } else {
      alert('formulário invalido')
    }
      console.log(form);
  }
  
  consultaCep(ev: any){
    const cep = ev.target.value  //recebe o valor digitado e cria uma variavel cep
    return this.consultaCepService.getConsultaCep(cep).subscribe(resultado => console.log(resultado)) // insere o cep como parametro da funcao getConsultaCep e escreve o resultado na URL
  }
}
