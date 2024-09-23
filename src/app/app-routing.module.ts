import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {path: 'experience', component: ExperienceComponent},
  {path: 'cv', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
