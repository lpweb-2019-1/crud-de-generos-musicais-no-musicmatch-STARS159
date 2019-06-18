import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaDeMusicasComponent } from './lista-de-musicas/lista-de-musicas.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { ArtistaListaComponent } from './artista-lista/artista-lista.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { CadastrarGeneroComponent } from './cadastrar-genero/cadastrar-genero.component';
import { EditarGeneroComponent } from './editar-genero/editar-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    MusicasComponent,
    ArtistaComponent,
    GeneroComponent,
    PesquisaComponent,
    ListaDeMusicasComponent,
    CadastrarArtistaComponent,
    ArtistaListaComponent,
    EditarArtistaComponent,
    GeneroListaComponent,
    CadastrarGeneroComponent,
    EditarGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
