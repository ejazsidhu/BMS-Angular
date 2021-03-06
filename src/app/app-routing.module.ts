import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'theme_one', 
    loadChildren: () => import('./themes-collection/theme-one/theme-one.module').then(m => m.ThemeOneModule)
  },
  {path:'', redirectTo:'theme_one',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
