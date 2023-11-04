import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './component/admin-layout/admin-layout.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { AccountsettingComponent } from './component/dashboard/accountsetting/accountsetting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule } from "@angular/material/tabs";
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    PagenotfoundComponent,
    AdminLayoutComponent,
    SidebarComponent,
    DashboardComponent,
    AccountsettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
