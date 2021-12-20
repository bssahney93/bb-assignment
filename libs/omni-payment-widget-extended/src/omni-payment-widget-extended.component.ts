import { Component} from '@angular/core';
import { PayordOmniPaymentWidgetAngComponent } from '@backbase/payord-omni-payment-widget-ang';
import { CopyRoutes } from '@backbase/foundation-ang/core';
import { CUSTOM_PAYMENT } from './custom-payment.config';

@Component({
  selector: 'bb-omni-payment-widget-extended',
  templateUrl: './omni-payment-widget-extended.component.html',
  styles: [
  ]
})

@CopyRoutes(PayordOmniPaymentWidgetAngComponent)
export class OmniPaymentWidgetExtendedComponent {
  paymentConfig = CUSTOM_PAYMENT;
  businessFunction = 'US Domestic Wire';
}
