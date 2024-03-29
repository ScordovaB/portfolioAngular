import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

const routes: Routes = [
  { path: '',component:HomeComponent}, //data:{animation:'main'}
  { path:'contact',component:ContactComponent},
  { path:'education',component:EducationComponent},
  { path:'skills',component:SkillsComponent},
  { path:'proyects',component:ProyectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
