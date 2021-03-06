import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    loadChildren: './login/login.module#LoginPageModule'
    //loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { 
    path: 'home',
    loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'app',
    loadChildren: './tabs/tabs.module#TabsPageModule'
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
