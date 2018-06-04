import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClienteService } from './services/cliente.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { UserpageComponent } from './userpage/userpage.component';
import {Globals} from "./globals";
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component';
import { JuegosComponent } from './juegos/juegos.component';
import { DistribuidorComponent } from './distribuidor/distribuidor.component';
import { EliminarDistribuidorComponent } from './eliminar-distribuidor/eliminar-distribuidor.component';
import { AddDistribuidorComponent } from './add-distribuidor/add-distribuidor.component';
import {ListaJuegosComponent} from "./lista-juegos/lista-juegos.component";
import {DistribuidorService} from './distribuidor.service';
import {JuegosService} from './services/juegos.service';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    UserpageComponent,
    ModifyComponent,
    DeleteComponent,
    JuegosComponent,
    DistribuidorComponent,
    EliminarDistribuidorComponent,
    ListaJuegosComponent,
    EliminarDistribuidorComponent,
    AddDistribuidorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'signin', component : SigninComponent },
      { path: 'signup', component : SignupComponent },
      { path: 'home', component: HomeComponent },
      { path: 'userpage', component: UserpageComponent },
      { path: 'userpage/modify', component: ModifyComponent},
      { path: 'userpage/delete', component: DeleteComponent},
      { path: 'adminJuegos', component: JuegosComponent},
      { path: 'listaJuegos', component: ListaJuegosComponent},
      { path: 'distribuidor', component: DistribuidorComponent},
      { path: 'distribuidor/elminarDistribuidor', component: EliminarDistribuidorComponent},
      { path: 'distribuidor/addDistribuidor', component: AddDistribuidorComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [ClienteService,JuegosService, Globals, DistribuidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
