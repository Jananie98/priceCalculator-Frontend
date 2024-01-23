import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'table', component: TableComponent },
    { path: 'calc', component: PriceCalculatorComponent },
    { path: '', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}