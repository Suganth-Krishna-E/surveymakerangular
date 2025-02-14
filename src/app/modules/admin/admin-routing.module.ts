import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { CreatesurveyComponent } from './components/createsurvey/createsurvey.component';
import { SurveystatsComponent } from './components/surveystats/surveystats.component';
import { SurveydashboardComponent } from './components/surveydashboard/surveydashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminhomeComponent,
    children: [
      {
        path: 'createsurvey',
        component: CreatesurveyComponent
      },
      {
        path: 'surveystats',
        component: SurveystatsComponent
      },
      {
        path: 'surveydashboard',
        component: SurveydashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
