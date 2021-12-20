import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WebSdkApiModule } from '@backbase/foundation-ang/web-sdk';
import { OmniPaymentWidgetExtendedModule } from '@omni-payment-widget-extended/omni-payment-widget-extended';
import { ProductSummaryListWidgetExtendedModule } from '@product-summary-list-widget-extended/product-summary-list-widget-extended';
import { ContainersModule } from '@backbase/universal-ang/containers';
import { MegaMenuNavigationContainerModule } from '@backbase/universal-ang/navigation';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule,
    RouterModule.forRoot([], { initialNavigation: "disabled", useHash: true }),
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    WebSdkApiModule,
    OmniPaymentWidgetExtendedModule,
    ProductSummaryListWidgetExtendedModule,
    ContainersModule,
    MegaMenuNavigationContainerModule,
    LayoutContainerModule
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
