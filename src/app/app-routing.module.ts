import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { INTERNSHIPComponent } from './internship/internship.component';
const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"internship",component:INTERNSHIPComponent},
{path:"projects",component:ProjectsComponent},
{path:"skills",component:SkillsComponent},
{path:"",component:DefaultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
