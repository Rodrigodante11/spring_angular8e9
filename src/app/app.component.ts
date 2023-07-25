import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-Angular-REST';

  usuario =  {
    login: '',
    senha: ''
  };

  public login(){
    console.log("teste login: " + this.usuario.login + " , Senha: " + this.usuario.senha);
  }
}
