import { ContentChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SalesComponent } from './sales/sales.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    ContentComponent,
    SalesComponent,
    CartComponent
  ], 
  imports: [
  
  MatCardModule, 
    MatButtonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
 
    RouterModule.forRoot(
      [
        {path: '',  component:HomeComponent},

        {path: 'login',  component:LoginComponent },
        {path:'signup' ,  component :SignupComponent},
        {path:'home' ,  component:HomeComponent },
        {path:'cart' ,  component:CartComponent },
        {path:'sales',  component:SalesComponent },
        {path:'content',component:ContentComponent},
        {path:'**' , component:NotfoundComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
