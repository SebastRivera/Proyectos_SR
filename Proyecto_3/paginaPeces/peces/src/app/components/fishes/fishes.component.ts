import { Component } from '@angular/core';
import { Fish,Photo } from '../../interface/fish';
import { ResourcesService } from '../../service/resources.service';
@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css']
})





export class FishesComponent {

  fishes!: Fish[] ;  
  photo!: Photo[];
  pages: number = 1;
  constructor(private resourcesService: ResourcesService) {
      
       /* Leer desde el localStorage */
    let peces = JSON.parse(localStorage.getItem("peces")!);
      
    if(peces) {
      this.fishes = peces as Fish[]
    }
  }
}
