import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillsurveyComponent } from './components/fillsurvey/fillsurvey.component';
import { UserhomeComponent } from './components/userhome/userhome.component';

const routes: Routes = [
  {
    path: '',
    component: UserhomeComponent,
    children: [
      {
        path: 'fillsurvey',
        component: FillsurveyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
