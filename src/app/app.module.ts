import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { MainComponent } from './Main/main/main.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { SkillsComponent } from './Skills/skills/skills.component';
import { EducacionComponent } from './Educacion/educacion/educacion.component';
import { BannerComponent } from './Banner/banner/banner.component';
import { SobremiComponent } from './SobreMi/sobremi/sobremi.component';
import { ContactoComponent } from './Contacto/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    SkillsComponent,
    EducacionComponent,
    BannerComponent,
    SobremiComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
