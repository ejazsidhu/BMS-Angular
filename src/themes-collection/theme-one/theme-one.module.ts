import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeOneRoutingModule } from './theme-one-routing.module';
import { RootComponent } from './root/root.component';
import { ThemeOneComponent } from './theme-one/theme-one.component';

@NgModule({
  declarations: [RootComponent, ThemeOneComponent],
  imports: [
    CommonModule,
    ThemeOneRoutingModule
  ]
})
export class ThemeOneModule { }
