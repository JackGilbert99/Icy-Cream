let IcyCreams = [
  {
    name: 'Cookie Dough',
    price: 10,
    quantity: 0
  },
  {
    name: 'Vanilla',
    price: 10,
    quantity: 0
  },
  {
    name: "Strawberry",
    price: 10,
    quantity: 0
  },
  {
    name: 'Waffle Cone',
    price: 5,
    quantity: 0
  },
  {
    name: 'Waffle Bowl',
    price: 5,
    quantity: 0
  },
  {
    name: 'Sprinkles',
    price: 5,
    quantity: 0
  },
  {
    name: 'Chocolate',
    price: 5,
    quantity: 0
  },
]

function addIcyCreamToCart(name) {
  let IcyCream = IcyCreams.find(IcyCream => IcyCream.name == name)
  IcyCream.quantity++
  drawCart()
}

function drawCart() {
  let cart = document.getElementById('cart')
  let template = ''
  IcyCreams.forEach(IcyCream => {
    if (IcyCream.quantity > 0) {
      template += `
      <div class="d-flex justify-content-between px-2 border-dark border">
      <i class="mdi mdi-delete text-danger" onclick="removeItem('${IcyCream.name}')"></i>
      <p>${IcyCream.name}</p>
      <p>x${IcyCream.quantity}</p>
      <p>$${IcyCream.price}</p>
      </div>`

    }
  })
  cart.innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total = 0
  IcyCreams.forEach(IcyCream => {
    total += IcyCream.price * IcyCream.quantity
  })
  document.getElementById('total').innerText = total.toFixed(2)


}

function checkout() {
  if (window.confirm("Are you ready to checkout?")) {
    IcyCreams.forEach(IcyCream => {
      IcyCream.quantity = 0
    })
    drawCart()
  }
}

function removeItem(name) {

  let IcyCream = IcyCreams.find(IcyCream => IcyCream.name == name)

  IcyCream.quantity--
  drawCart()
}