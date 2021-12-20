import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { OmniPaymentWidgetExtendedComponent } from './omni-payment-widget-extended.component';
import { PayordOmniPaymentWidgetAngModule } from '@backbase/payord-omni-payment-widget-ang';


@NgModule({
  declarations: [OmniPaymentWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { OmniPaymentWidgetExtendedComponent }
    }),
    PayordOmniPaymentWidgetAngModule
  ]
})
export class OmniPaymentWidgetExtendedModule { }