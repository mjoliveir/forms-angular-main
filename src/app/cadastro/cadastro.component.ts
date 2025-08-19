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

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['./sucesso']) //esse comando envia o usuario ao path 'sucesso' definido em app-routing.module
    } else {
      alert('formulário invalido')
    }
    console.log(form);
  }

  consultaCep(ev: any, f: NgForm) {
    const cep = ev.target.value;  //recebe o valor digitado e cria uma variavel cep
    if (cep !== '') {
      this.consultaCepService.getConsultaCep(cep).subscribe(resultado =>
        {
        console.log(resultado)
        this.populandoEndereco(resultado, f);
      }) // insere o cep como parametro da funcao getConsultaCep e escreve o resultado na URL
    }
  }


  populandoEndereco(dados: any, f : NgForm){
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.UF

    })
  }

}
