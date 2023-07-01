import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent, SidebarComponent} from '@shared/components';
import {HttpClientModule} from '@angular/common/http';
import {SvgHttpLoader, SvgLoader} from '@components/utils/svg-icon/svg-loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    {provide: SvgLoader, useClass: SvgHttpLoader}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
