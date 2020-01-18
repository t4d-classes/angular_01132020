import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
import { CarsResolveService } from './services/cars-resolve.service';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [ AuthGuardService ],
    resolve: { cars: CarsResolveService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
