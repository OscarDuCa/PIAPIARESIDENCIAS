// Crea una matriz vacía para el carrito
let cartItems = [];

// Obtiene el botón para agregar elementos al carrito
let addToCartButton = document.getElementById("add-to-cart");

// Agrega un evento al botón para agregar elementos al carrito
addToCartButton.addEventListener("click", function() {
  // Agrega el elemento al carrito
  cartItems.push(item);
  
  // Actualiza la visualización del carrito
  updateCart();
});

// Obtiene el botón para vaciar el carrito
let clearCartButton = document.getElementById("clear-cart");

// Agrega un evento al botón para vaciar el carrito
clearCartButton.addEventListener("click", function() {
  // Vacía el carrito
  cartItems = [];
  
  // Actualiza la visualización del carrito
  updateCart();
});

// Función para actualizar la visualización del carrito
function updateCart() {
  // Obtiene la lista de elementos del carrito
  let cartList = document.getElementById("cart-items");
  
  // Limpia la lista actual
  cartList.innerHTML = "";
  
  // Agrega cada elemento del carrito a la lista
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
  }
}
