import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../service/resources.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  constructor(private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.resourcesService.obtenerDatos().subscribe(response => {
      
      let potterhead = localStorage.getItem("peces");
      if(!potterhead) {
        localStorage.setItem("peces", JSON.stringify(response));
      }

    })
  } 

}
