import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';
import { LoginGuardGuard } from '../services/service.index';



const routes: Routes = [
   {
     path: '',
     component: DashboardComponent,
     children: dashboardRoutes
  },
];

// son rutas hijas no forRoot
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []

})
export class DashboardRoutingModule { }
