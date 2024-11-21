let cart = [];
let total = 0;

// Función para actualizar el carrito en el modal
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  // Limpiar lista de productos en el modal
  cartItems.innerHTML = '';
  
  // Agregar productos al modal
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Product - $${item}`;  // Muestra el precio de cada producto
    li.classList.add('text-gray-700', 'border-b', 'pb-2');
    cartItems.appendChild(li);
  });
  
  // Actualizar el total
  cartTotal.textContent = total.toFixed(2);
}

// Añadir evento al botón 'BUY NOW'
document.querySelectorAll('.buy-now').forEach(button => {
  button.addEventListener('click', (e) => {
    // Asegúrate de seleccionar correctamente el precio
    const priceElement = e.target.parentElement.querySelector('.price');
    
    if (priceElement) {
      const price = parseFloat(priceElement.textContent.substring(1));  // Captura el precio y quita el símbolo $
      
      // Añadir el precio al carrito
      cart.push(price);
      total += price;

      // Actualizar el carrito en el modal
      updateCart();

      
    } else {
      console.error('Price element not found!');
    }
  });
});

// Mostrar modal al hacer clic en el botón del header
document.getElementById('cart-btn').addEventListener('click', () => {
  updateCart(); // Asegurarse de que el carrito esté actualizado antes de mostrar el modal
  document.getElementById('cart-modal').classList.remove('hidden');
});

// Cerrar modal al hacer clic en 'Close'
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('cart-modal').classList.add('hidden');
});