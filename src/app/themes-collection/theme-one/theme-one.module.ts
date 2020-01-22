import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeOneRoutingModule } from './theme-one-routing.module';
import { RootComponent } from './root/root.component';
import { ThemeOneComponent } from './theme-one/theme-one.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './inner-components/home/home.component';
import { ServicesComponent } from './inner-components/services/services.component';
import { AboutComponent } from './inner-components/about/about.component';
import { ContactUsComponent } from './inner-components/contact-us/contact-us.component';
import { FooterComponent } from './inner-components/footer/footer.component';

@NgModule({
  declarations: [RootComponent, ThemeOneComponent, NavComponent, HomeComponent, ServicesComponent, AboutComponent, ContactUsComponent, FooterComponent],
  imports: [
    CommonModule,
    ThemeOneRoutingModule
  ]
})
export class ThemeOneModule { }
