import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  borrado?: string;
  heroes  : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];

  borrarHeroe() {
    console.log('borrando...');

    this.borrado = this.heroes.shift();
  }
}
