import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './inner-components/home/home.component';
import { ServicesComponent } from './inner-components/services/services.component';
import { AboutComponent } from './inner-components/about/about.component';
import { ContactUsComponent } from './inner-components/contact-us/contact-us.component';
import { ThemeOneComponent } from './theme-one/theme-one.component';

const routes: Routes = [
  { path: '', component:RootComponent,
  children:[
    { path: '', redirectTo:'home',pathMatch:'full'},
    { path: 'home', component: ThemeOneComponent },
    // { path: 'service', component: ServicesComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'contact_us', component: ContactUsComponent },
  ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class ThemeOneRoutingModule { }
