import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from "./components/pages/login/login.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestCardComponent } from './test-card/test-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './menu/menu.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { LinePageSelComponent } from './line-page-sel/line-page-sel.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportTableComponent } from './components/pages/report-table/report-table.component';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TestCardComponent,
    MainPageComponent,
    MenuComponent,
    CardCarouselComponent,
    LinePageSelComponent,
    FooterComponent,
    ReportTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LoginModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Nota: Tuve que agregar este componente para que funcionara p-table
    TableModule,
    AccordionModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
