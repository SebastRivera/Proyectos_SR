import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fish } from '../../interface/fish';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
  
})
export class FishComponent {

  fish!: Fish;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['Species Name']; 
      
      let peces = JSON.parse(localStorage.getItem("peces")!);
          
      if(peces) {
        let fishes = peces as Array<Fish>  
        let fishesfiltered = fishes.filter(fish => fish['Species Name'] == id)    
        this.fish = fishesfiltered[0];
      }

     });

  }

}
