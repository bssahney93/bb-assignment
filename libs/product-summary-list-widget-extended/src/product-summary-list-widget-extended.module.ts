import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ProductSummaryListWidgetModule} from '@backbase/retail-ang';
import { ProductSummaryListWidgetExtendedComponent } from './product-summary-list-widget-extended.component';

@NgModule({
  declarations: [ProductSummaryListWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { ProductSummaryListWidgetExtendedComponent }
    }),
    ProductSummaryListWidgetModule
  ]
})
export class ProductSummaryListWidgetExtendedModule { }