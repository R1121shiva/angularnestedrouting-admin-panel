import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ShopComponent } from './page/shop/shop.component';
import { DonateComponent } from './page/donate/donate.component';
import { ContactComponent } from './page/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { AdminLayoutComponent } from './component/admin-layout/admin-layout.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { AccountsettingComponent } from './component/dashboard/accountsetting/accountsetting.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'donate',
        component: DonateComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path:"dashboard",
    component:AdminLayoutComponent,
    children:[
      {
        path:"",
        component:DashboardComponent
      },
      {
        path:"account-setting",
        component:AccountsettingComponent
      }
    ]
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
