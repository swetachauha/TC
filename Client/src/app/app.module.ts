import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TCRegisterComponent } from './Components/tcregister/tcregister.component';
import { SearchTCComponent } from './Components/search-tc/search-tc.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { TCTableComponent } from './Components/tctable/tctable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './Components/signup/signup.component';
// import { TokenInterceptorService } from './token/token-interceptor.service';
import { AuthService } from './Security/auth.service';
import { AuthGuard } from './Security/auth.guard';
import { TokenInterceptorService } from './Token/token-interceptor.service';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    TCRegisterComponent,
    SearchTCComponent,
    LoginComponent,
    TCTableComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
