import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeTwoRoutingModule } from './theme-two-routing.module';
import { RootComponent } from './root/root.component';
import { ThemeTwoComponent } from './theme-two/theme-two.component';

@NgModule({
  declarations: [RootComponent, ThemeTwoComponent],
  imports: [
    CommonModule,
    ThemeTwoRoutingModule
  ]
})
export class ThemeTwoModule { }
