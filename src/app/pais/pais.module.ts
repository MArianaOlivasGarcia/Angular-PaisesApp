import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';


@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, PaisComponent, PaisTablaComponent, PaisInputComponent],
  exports: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, PaisComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
