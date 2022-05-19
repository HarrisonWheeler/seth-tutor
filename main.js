// we need to draw items to the page
// -some objects - basically some data
// -pull objects out of collection (iterate?)
//   --Is this collection a dictionary or an array?

let items = {
  // in a dictionary, golfBall, driver, and golfCart are KEYS of the items object - and their values are the object associated
  golfBall: {
    brand: "TaylorMade",
    color: "white",
    price: 2,
  },
  driver: {
    brand: "Callaway",
    color: "white",
    price: 250,
  },
  golfCart: {
    brand: "Dunno",
    color: "white",
    price: 1000,
  }
}

let itemsArr = [
  // In an array, these objects are indexed by their number and don't have a unique "key" [to call from array]
  {
    brand: "TaylorMade",
    color: "white",
    price: 2,
  },
  {
    brand: "Callaway",
    color: "beige",
    price: 250,
  },
  {
    brand: "Dunno",
    color: "carbon fiber",
    price: 1000,
  }
]

let cart = []

function drawItemsDict() {
  let template = ""
  for (let key in items) {
    let item = items[key]
    template += /*html*/ `
    <div class="col-md-4">
      <div class="bg-light rounded shadow text-center p-2">
        <h1>${item.brand}</h1>
        <div class="d-flex justify-content-between p-2">
          <h6>${item.color}</h6>
          <h6>Price: $${item.price}</h6>
        </div>
        <button class="btn btn-success" onclick="addToCart('${key}')">Add To Cart</button>
      </div>
  </div>
    `
  }
  document.getElementById('shop-items').innerHTML = template
}


function drawItemsArr() {
  let template = ""
  itemsArr.forEach(i =>
    template += /*html*/ `
    <div class="col-md-4">
        <div class="bg-light rounded shadow text-center p-2">
          <h1>${i.brand}</h1>
          <div class="d-flex justify-content-between p-2">
            <h6>${i.color}</h6>
            <h6>Price: $${i.price}</h6>
          </div>
        </div>
   </div>
    `
  )
  console.log('template string:', template);
  document.getElementById('shop-items').innerHTML = template
}

function addToCart(itemKey) {
  cart.push(items[itemKey])
  console.log(cart);
  drawCart()
}

function drawCart() {
  let template = ""
  cart.forEach(c => template += `<h6>${c.brand}</h6>`)
  document.getElementById('cart').innerHTML = template
}

// drawItemsArr()
drawItemsDict()