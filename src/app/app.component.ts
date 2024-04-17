import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BienvenidoComponent,ErrorComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-01';
  promedio!: number;
  suma!: number;
  edadUno: number = 0;
  edadDos: number =0;

  calSumar(){
    this.suma = this.edadDos + this.edadDos
  }

  calPromedio(){
    this.promedio = (this.edadDos + this.edadDos) / 2
  }

  mostrarResultados(){
    this.calPromedio()
    this.calSumar()
  }
  
  limpiarInputs(){
    this.edadDos = 0
    this.edadUno = 0

    this.promedio = 0
    this.suma = 0
  }
}
