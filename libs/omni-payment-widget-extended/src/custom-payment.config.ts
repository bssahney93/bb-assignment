import {
    CounterPartyFields,
    FormFieldHooksParams,
    InitiatorFields,
    PaymentBaseFields,
    PaymentComponents,
  PaymentFormGroup,
  PaymentHooksParams,
  PaymentTypeConfig,
  RemittanceInfoFields,
} from '@backbase/payment-orders-ang';
import { Validators } from '@angular/forms';

let context : any = null;

const initiator: PaymentFormGroup = {
    name: PaymentBaseFields.initiator,
    title: 'From',
    fields: [
      {
        type: PaymentComponents.debitAccountSelector,
        name: InitiatorFields.initiatorAccountGroup,
        options: {
          placeholder: 'Select an account',
          cssClasses: ['mx-auto'],
        },
      },
    ],
  };
   
  const counterParty: PaymentFormGroup = {
    name: PaymentBaseFields.counterparty,
    title: 'To',
    fields: [
      {
        name: CounterPartyFields.name,
        type: PaymentComponents.beneficiarySelector,
        options: {
          placeholder: 'Select a beneficiary',
          saveNewContactLabel: 'Save as a new contact',
          cssClasses: ['mx-auto'],
        },
      },  
    ],
  };
  const merchantNum: PaymentFormGroup = {
    name: PaymentBaseFields.additions,
    title: 'Merchant Number',
    fields: [
      {
        type: PaymentComponents.number,
        name: 'merchantNumber',
        options: {
          label: 'Merchant Number',
          cssClasses: ['pl-3'],
          validationMessages: [
            {
              name: 'required',
              message: 'Required'
            }
          ]
        },
        hooks : {onInit({ component, control, group }: FormFieldHooksParams) {
            context = component;
          }
        }
      }      
    ],
  };

  const remittanceInfo: PaymentFormGroup = {
    name: PaymentBaseFields.remittanceInfo,
    title: 'Payment details',
    fields: [
      {
        type: PaymentComponents.amount,
        name: RemittanceInfoFields.amountCurrencyGroup,
        options: {
          label: 'Amount',
          currencies: ['EUR'],
          cssClasses: ['pl-3'],
        },
      },
      {
        name: RemittanceInfoFields.description,
        type: PaymentComponents.textarea,
        options: {
          label: 'Description',
          placeholder: 'Enter payment description',
          showCharCounter: true,
          minLength: 0,
          rows: 3,
          maxLength: 140,
          cols: 50,
          cssClasses: ['d-inline-block', 'col-12', 'pl-3', 'mx-auto'],
        },
      },
      
    ],
    
  };
   
  export const CUSTOM_PAYMENT: PaymentTypeConfig = {
    name: 'custom_payment',
    paymentType: 'CUSTOM_PAYMENT_TRANSFER',
    fields: [initiator, counterParty,remittanceInfo,merchantNum],
    hooks: {
        onSave(params: PaymentHooksParams | any) {
          if (params) {
            if(context.control.value === null || context.control.value === '' ) {
              params.form.get('additions')['controls'].merchantNumber.setErrors({required : true});
              params.doneFn(false);                            
            } else {
              params.doneFn();
            }            
          }
        }      
      }
    };