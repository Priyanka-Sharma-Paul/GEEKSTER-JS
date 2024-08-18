
let input = document.getElementsByClassName("input")[0];
let searchBtn = document.getElementsByClassName("searchBtn")[0];
let card = document.querySelector(".card");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let cardDetail = document.getElementsByClassName("cardDetail")[0];

function cardFormat(element, image, phone_name, brand) {
    console.log("card format", element);
    let div = `
        <div class="cards">
            <img src="${image}" alt="${phone_name}">
            <h1>${phone_name}</h1>
            <h2>${brand}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <button class="showDetails" onClick="showDetailsPage('${element.image}', '${element.phone_name}', '${element.brand}', '${element.slug}')">SHOW DETAILS</button>
        </div>
    `;
    return div;
}

let dataDetail;
let page = 0;

async function fetchData() {
    page = 0;
    card.innerHTML = "";  
    cardDetail.style.display = "none";
    let query = input.value.toLowerCase();
    if(query.trim() == ""){
        query = "iphone"
    }

    let fetched = await fetch(`https://openapi.programming-hero.com/api/phones?search=${query}`);
    dataDetail = await fetched.json();

    if (dataDetail.data.length === 0) {
        notFound();
        return;
    }

    dataDetail.data.forEach((element, index) => {
        if (index < 5) {
            card.innerHTML += cardFormat(element, element.image, element.phone_name, element.brand);
        }
    });
    handlePage();
}

function nextPage() {
    page++;
    let start = page * 5;
    let end = start + 5;
    card.innerHTML = "";

    dataDetail.data.forEach((element, index) => {
        if (index < end && index >= start) {
            card.innerHTML += cardFormat(element, element.image, element.phone_name, element.brand);
        }
    });
    handlePage();
}

function prevPage() {
    page--;
    let start = page * 5;
    let end = start + 5;
    card.innerHTML = "";

    dataDetail.data.forEach((element, index) => {
        if (index < end && index >= start) {
            card.innerHTML += cardFormat(element, element.image, element.phone_name, element.brand);
        }
    });
    handlePage();
}

function handlePage(){
    console.log(page);
    console.log(dataDetail.data.length);
    if(page == 0){
        prev.style.display = 'none';
    }else {
        prev.style.display = 'block';
    }

    if(((page + 1) * 5) < dataDetail.data.length){
        next.style.display = 'block';
    }else {
        next.style.display = 'none';
    }
}

function showDetailsPage(image, phoneName, brand, slug) {
    console.log(image, phoneName, brand, slug);
    let div = `
        <div class="cards">
            <img src="${image}" alt="${phoneName}">
            <h1>${phoneName}</h1>
            <h2>${brand}</h2>
            <p>${slug}</p>
            <button class="close">CLOSE</button>
        </div>
    `;
    div.className = "card1";

    cardDetail.innerHTML = div;
    cardDetail.style.display = "block";
    let closeButton = cardDetail.querySelector(".close");
    console.log("going to click close clicked", closeButton);
    closeButton.addEventListener("click", () => {
        cardDetail.innerHTML = "";
        cardDetail.style.display = "none";
    });
}

function notFound() {
    let divNot = `<h1>No Mobile Phone Found in this Store</h1>`;
    card.innerHTML = divNot;
}


input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      fetchData();
    }
});
searchBtn.addEventListener("click", fetchData);
next.addEventListener("click", nextPage);
prev.addEventListener("click", prevPage);

fetchData();