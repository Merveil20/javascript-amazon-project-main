import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPayementSummary } from './checkout/paymentSummary.js'
import { loadProducts, loadProductsFetch } from '../data/products.js';
import '../data/cart-class.js'
import '../data/backend-pratice.js';
import { loadCart } from '../data/cart.js';

async function loadPage() {
  try {

    await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        //reject('error3')
        resolve('value3');
      });
    });
  } catch (error) {
    console.log('Unepected error. Please try again later.');
  }
  renderOrderSummary();
  renderPayementSummary();
}
loadPage()
/*Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);

  renderOrderSummary();
  renderPayementSummary();
});*/
/*new Promise((resolve, reject) => {
  console.log('start promise');
  loadProducts(() => {
    console.log('finish loading');
    resolve('value1');
  })
}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  renderOrderSummary();
  renderPayementSummary();
});*/


/*loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPayementSummary();
  });
})*/