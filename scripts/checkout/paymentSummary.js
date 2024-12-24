import {cart} from '../../data/cart.js'
import { GetProduct } from '../../data/products.js';
import { GetDeliveryOption } from '../../data/deliveryOptions.js';
import FormatCurrency from '../utilis/money.js';

export function renderPayementSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;

   cart.forEach((cartItem) => {
   const product= GetProduct(cartItem.productId);
   productPriceCents+= product.priceCents * cartItem.quantity;
   const deliveryOption = GetDeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCents+= deliveryOption.priceCents;
   });
const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
const taxCents = totalBeforeTaxCents * 0.1;
const totalCents = totalBeforeTaxCents + taxCents;
const  paymentSummaryHTML = `
 <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
            $${FormatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${FormatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${FormatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${FormatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${FormatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
   `;
   document.querySelector('.js-payement-summary')
   .innerHTML = paymentSummaryHTML;
}