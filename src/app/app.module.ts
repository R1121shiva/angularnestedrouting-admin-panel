import { NgModule } from '@angular/core';
import { BrowserModule , Title } from '@angular/platform-browser';
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
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { CardheaderComponent } from './component/common/cardheader/cardheader.component';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ShopComponent } from './page/shop/shop.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModelComponent } from './component/common/model/model.component';
import { FormModalComponent } from './component/common/form-modal/form-modal.component';
import { DonateComponent } from './page/donate/donate.component';
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
    AccountsettingComponent,
    CardheaderComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ModelComponent,
    FormModalComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [AuthService , Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
