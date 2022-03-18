import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio_09';

  nombre:string = "Nuria Godino"
  actualidad:string = "Becaria en BabelCamp 2022"
  exp:string = "Experiencia profesional"
  presentacion:string = "Presentacion"
  skills:string = "Skills"
  estudios:string = "Estudios"
  otros:string = "Otros"
}
