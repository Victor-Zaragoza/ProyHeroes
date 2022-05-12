import { Component, OnInit, NgModule } from '@angular/core';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario!: Usuario;
  usuarios: Usuario[] = [];

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('user') || '[]');
  }

  agregarUsuario() {
    let genero;
    let arrayUsers = localStorage.getItem('user');
    console.log(this.usuario.sexo);
    if (this.usuario.sexo == '1') genero = 'M';
    else genero = 'F';
    if (arrayUsers !== null) {
      let arrayUserAux = JSON.parse(localStorage.getItem('user') || '[]');
      const usuarioTemp = this.usuario;
      const usuarioStr = {
        nombre: usuarioTemp.nombre,
        sexo: genero,
        email: usuarioTemp.email,
        fecha: usuarioTemp.fecha,
      };
      arrayUserAux.push(usuarioStr);
      const yeison = JSON.stringify(arrayUserAux);
      console.log('yeison', yeison);
      localStorage.setItem('user', yeison);
    } else {
      let arrayUsersInit = [];
      const usuarioTemp = this.usuario;
      const usuarioStr = {
        nombre: usuarioTemp.nombre,
        sexo: genero,
        email: usuarioTemp.email,
        fecha: usuarioTemp.fecha,
      };

      arrayUsersInit.push(usuarioStr);
      const usr = JSON.stringify(arrayUsersInit);
      localStorage.setItem('user', usr);
    }
  }

  ngOnInit(): void {
    this;
  }
}
