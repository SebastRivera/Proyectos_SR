import { Component } from '@angular/core';
import { Fish,Photo } from '../../interface/fish';
import { ResourcesService } from '../../service/resources.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent  {
  
  searchText: any;
  fishes!: Fish[] ;  
  photo!: Photo[];
  pages: number = 1;
  constructor(private resourcesService: ResourcesService) {
      
       /* Leer desde el localStorage */
    let peces = JSON.parse(localStorage.getItem("peces")!);
      
    if(peces) {
      this.fishes = peces as Fish[]
      console.log(this.fishes)
    }
  }
  
}
