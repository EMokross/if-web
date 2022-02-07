import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HomeModule } from './pages/home/home.module';
import { SsrService } from './service/ssr.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TopbarModule } from './components/topbar/topbar.module';
import { reducers } from './store';
import { hydrationMetaReducerFactory } from './store/hdyration/hydration.reducer';
import { NgxChartsModule } from '@swimlane/ngx-charts';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      reducers
    ),
    NzLayoutModule,
    TopbarModule,
    HomeModule,
    DashboardModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    {
      provide: META_REDUCERS,
      deps: [SsrService],
      useFactory: hydrationMetaReducerFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
