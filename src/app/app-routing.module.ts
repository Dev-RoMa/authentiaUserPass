import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';
import { MainPagePage } from './main-page/main-page.page';

const routes: Routes = [
  {
  path: '',
  /* redireccionar al principal*/ 
  redirectTo: 'main-page',
  pathMatch: 'full'
  },
  {
  path: 'main-page',
  redirectTo: 'main-page',
  pathMatch: 'full'
  }
  ,
  {
  path: 'authentia',
  redirectTo: 'authentia',
  pathMatch: 'full'
  },
  {
  path: 'pass-change',
  redirectTo: 'pass-change',
  pathMatch: 'full'
  }
  ,
  {
  path: '**',
  redirectTo: 'e404',
  pathMatch: 'full'
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  }
  ,
  {
    path: 'authentia',
    loadChildren: () => import('./authentia/authentia.module').then( m => m.AuthentiaPageModule),
    canActivate:[DbService]
  },
  {
    path:'e404',
    loadChildren:  () => import('./e404/e404.module').then( m=> m.E404PageModule)
  },
  {
    path: 'pass-change',
    loadChildren: () => import('./pass-change/pass-change.module').then( m => m.PassChangePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
