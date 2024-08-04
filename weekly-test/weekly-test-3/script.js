const laptopList = [
    { id: 1, name: "Dell XPS 13", price: 99999, image: "img/dell_xps_13.jpeg" },
    { id: 2, name: "MacBook Air M1", price: 92999, image: "img/macbook_air_m1.jpg" },
    { id: 3, name: "HP Spectre x360", price: 104999, image: "img/hp_spectre_x360.jpg" },
    { id: 4, name: "Lenovo ThinkPad X1 Carbon", price: 114999, image: "img/lenovo_thinkpad_x1_carbon.jpg" },
    { id: 5, name: "Asus ROG Zephyrus G14", price: 124999, image: "img/asus_rog_zephyrus_g14.jpg" },
  ];

const productCardsContainer = document.querySelector("#product-cards-container");
const cartCardsContainer = document.querySelector("#cart-cards-container");
const emptyMessage = document.querySelector("#empty-message");
const totalPrice = document.querySelector("#total-price");

function updateCountAndCart(e, count) {
  e.target.parentNode.children[1].innerText = count;
  let selectedProduct = e.target.parentNode.parentNode.children[1].innerText;
  laptopList.forEach((prod) => {
    if (prod.name === selectedProduct) {
      prod.count = count;
    }
  });
  cartCardsContainer.innerHTML = "";
  let total = 0;

  laptopList.forEach((prod) => {
    if (prod.count > 0) {
      let div = document.createElement("div");
      div.innerHTML = `
                    <div class="image-conatiner-cart"><img src="${prod.image}" alt="${prod.name}"></div>
                    <p>${prod.name}</p>
                    <p><span class="item-count">${prod.count}</span> x <span class="item-price">${prod.price}</span></p>
              `;
      total += prod.count * prod.price;
      div.classList.add("product-card");
      cartCardsContainer.appendChild(div);
    }
  });

  totalPrice.innerText = total;

  if (cartCardsContainer.children.length === 0) {
    cartCardsContainer.appendChild(emptyMessage);
  }
}

window.onload = () => {
    laptopList.forEach((prod) => {
    let div = document.createElement("div");
    div.innerHTML = `
                <div class="image-conatiner"><img src="${prod.image}" alt="${prod.name}"></div>
                <p class="product-name">${prod.name}</p>
                <p class="product-price">${prod.price}</p>
                <div class="counter-container">
                    <p class="decrease control">-</p>
                    <p class="count">0</p>
                    <p class="increase control">+</p>
                </div>
          `;
    div.classList.add("product-card");
    productCardsContainer.appendChild(div);
  });
};

productCardsContainer.addEventListener("click", (e) => {
  let count = 0;

  if (e.target.innerText === "+") {
    count = Number(e.target.parentNode.children[1].innerText);
    count++;
    updateCountAndCart(e, count);
  } else if (e.target.innerText === "-") {
    count = Number(e.target.parentNode.children[1].innerText);
    if (count > 0) {
      count--;
    } else {
      alert("Action not possible");
      return;
    }
    updateCountAndCart(e, count);
  }
});
