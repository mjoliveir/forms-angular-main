import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

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
}
