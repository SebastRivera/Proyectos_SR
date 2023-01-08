import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { FishesComponent } from './components/fishes/fishes.component';
import { FishComponent } from './components/fish/fish.component';
import { PhotosComponent } from './components/photos/photos.component';


const routes: Routes = [
   { path: "intro", component: IntroComponent },
   { path: "fishes", component: FishesComponent },
   { path: "fishes/:Species Name", component: FishComponent },
   { path: "photos", component: PhotosComponent },
   { path: "**", redirectTo: "intro" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
