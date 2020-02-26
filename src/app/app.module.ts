import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { SplashComponent } from './splash/splash.component';
import { NotesComponent } from './notes/notes.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ServicesComponent,
    SplashComponent,
    NotesComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
