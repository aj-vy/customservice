import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './components/global/global.component';
import { ContiresComponent } from './components/contires/contires.component';
import { AboutComponent } from './components/about/about.component';
import { ErrPageComponent } from './components/err-page/err-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateblogComponent } from './components/createblog/createblog.component';

const routes: Routes = [
  { path: 'global', redirectTo: '' },
  {
    path: '',
    component: GlobalComponent,
    pathMatch: 'full',
    data: { title: 'Global Corona Cases' },
  },
  {
    path: 'contries',
    component: ContiresComponent,
    data: { title: 'Contries' },
  },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'create-blog', component: CreateblogComponent, data: { title: 'Create blog' } },
  { path: 'blogs', component: BlogsComponent, data: { title: 'Shared experinces' } },
  { path: 'register',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { path: '**', component: ErrPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
