import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // ok, time to explain what is going on. this bit of code is calling the already existing local storage. If it doesn't exist yet, it creates an array.
  // It then takes that array and assigns it a value named cartItems
  const cartItems = getLocalStorage("so-cart") || [];

  // this bit takes the new product trying to be added to the cart, and inserts it at the end of this array.
  cartItems.push(product);

  // this bit of code then takes that array and assigns it to the local storage, allowing items to finally be added to the cart
  // and read by the function needed to make the cart items appear.
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
