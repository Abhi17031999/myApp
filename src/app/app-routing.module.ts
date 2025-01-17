import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'product-list', loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListPageModule) },
  { path: 'product-details', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
