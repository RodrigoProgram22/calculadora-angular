import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora-angular';
  valorDolar!: number;
  valorMostrar: any = '';
  constructor(private http: HttpClient) {
    this.obtenerValorDolar();
  }

  obtenerValorDolar() {
    const apiUrl = 'https://api.bluelytics.com.ar/v2/latest';
    this.http.get<any>(apiUrl).subscribe((data) => {
      // Aquí puedes acceder a los datos obtenidos de la API
      this.valorDolar = data.blue.value_avg;
    });
  }

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
  dolar() {
    try {
      this.valorMostrar = eval(this.valorMostrar);
      this.valorMostrar = this.valorMostrar * this.valorDolar;
    } catch (error) {
      this.valorMostrar = 'Error!';
    }
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
