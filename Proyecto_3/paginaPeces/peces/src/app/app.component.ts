import { Component } from '@angular/core';
import { GalleryServicesService } from './service/gallery-services.service';
import { ResourcesService } from './service/resources.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peces';

  

  constructor(private resourcesService: ResourcesService) {
          

  }

  


}
