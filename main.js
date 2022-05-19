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
  // indexed by number
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
  // Set up a template to 'dump' the html below into as we iterate
  let template = ""
  for (let key in items) {
    // Aliasing out each individual item as we iterate 
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
  // after iteration is complete, take that template string full of HTML code, and inject it into our DOM
  document.getElementById('shop-items').innerHTML = template
}


function drawItemsArr() {
  let template = ""
  // i is representing each object in our array (collection)
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
  // we passed through the key from our iteration so we know what item we need to grab out of the dictionary
  cart.push(items[itemKey])
  // take that item we found, and push it into our empty cart array
  console.log(cart);
  // call our draw function
  drawCart()
}

function drawCart() {
  let template = ""
  // since our cart is an array, we will use a forEach loop to add html to this template string and inject it to the cart portion of our page
  cart.forEach(c => template += `<h6>${c.brand}</h6>`)
  document.getElementById('cart').innerHTML = template
}

// drawItemsArr()
drawItemsDict()