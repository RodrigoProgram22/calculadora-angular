import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora-angular';
  valorMostrar: any = '';

  sumNum(x: any) {
    if (this.valorMostrar == 'Error!') {
      this.valorMostrar = x;
    } else {
      this.valorMostrar = this.valorMostrar + x.toString();
    }
  }
  suma() {
    this.valorMostrar += ' + ';
  }
  resta() {
    this.valorMostrar += ' - ';
  }
  multi() {
    this.valorMostrar += ' * ';
  }
  divid() {
    this.valorMostrar += ' / ';
  }
  reset() {
    this.valorMostrar = '';
  }

  eliminarUltimaLetra(texto: string): string {
   if (texto.length === 0) {
     return texto;
   } else {
     return texto.slice(0, -1);
   }
 }
  borrarUltimoNum() {
    this.valorMostrar = this.eliminarUltimaLetra(this.valorMostrar);
  }
  resultado() {
    try {
      this.valorMostrar = eval(this.valorMostrar);
    } catch (error) {
      this.valorMostrar = 'Error!';
    }
  }
}
