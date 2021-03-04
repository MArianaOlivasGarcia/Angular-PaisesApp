import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },{
    path: 'region',
    component: PorRegionComponent
  },{
    path: 'capital',
    component: PorCapitalComponent
  },{
    path: 'pais/:id',
    component: PaisComponent
  },{
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
