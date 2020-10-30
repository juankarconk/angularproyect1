import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { JuegosComponent } from "./juegos/juegos.component";
import { JuegoService } from './juegos/juego.service';
import { CompaniesComponent } from './companies/companies.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alerts/alert.component';
import { FormComponent as JuegosFormComponent } from './juegos/form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './companies/company.service';


const ROUTES: Routes = [
  { path: '', redirectTo: '/juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegosComponent },
  { path: 'juegos/form', component: JuegosFormComponent },
  { path: 'juegos/form/:id', component: JuegosFormComponent },
  { path: 'companies', component: CompaniesComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JuegosComponent,
    CompaniesComponent,
    AlertComponent,
    JuegosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [JuegoService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
