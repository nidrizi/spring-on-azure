import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SpringOnAzureSharedModule } from 'app/shared/shared.module';
import { SpringOnAzureCoreModule } from 'app/core/core.module';
import { SpringOnAzureAppRoutingModule } from './app-routing.module';
import { SpringOnAzureHomeModule } from './home/home.module';
import { SpringOnAzureEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SpringOnAzureSharedModule,
    SpringOnAzureCoreModule,
    SpringOnAzureHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SpringOnAzureEntityModule,
    SpringOnAzureAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SpringOnAzureAppModule {}
