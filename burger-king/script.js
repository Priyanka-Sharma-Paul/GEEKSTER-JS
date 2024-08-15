const orderButton = document.getElementById("orderButton");
const overlay = document.getElementById("overlay");

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 2000;
}

function getRandomOrderId() {
  return Math.floor(Math.random() * 1000) + 100;
}

orderButton.addEventListener("click", function () {
  const selecteditems = getSelectedItems();

  if (selecteditems.length === 0) {
    alert("Please select atleast one item");
    return;
  }

  orderButton.disabled = true;
  overlay.style.display = "flex";
  



  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, getRandomTime());
  });

  promise.then(function () {

    const placeOrder = document.getElementById("placeOrder");
    const orderStatus = document.getElementById("orderStatus");
    const orderIdElement = document.getElementById("orderId");
    const orderIdValueElement = document.getElementById("orderIdValue");
  
    placeOrder.style.display = "none";
    orderStatus.style.display = "flex";
    
    const orderId = getRandomOrderId();
    orderIdValueElement.textContent = orderId;
    orderIdElement.style.display = "block";

    selecteditems.forEach(function(it){
        const orderedElement = document.getElementById("ordered_"+it);
        orderedElement.style.display = "block"
    })
    overlay.style.display = "none";
  });
});

Array.from(document.getElementsByClassName("item")).forEach(function (element) {
  element.addEventListener("click", function(e){
    e.target.classList.toggle("seleted");
    if(getSelectedItems().length > 0){
        orderButton.disabled = false;
    }else{
        orderButton.disabled = true;
    }
  });
});

function getSelectedItems(){
    const selecteditems = [];
    document.querySelectorAll(".item.seleted").forEach(function(e){selecteditems.push(e.id)});
    return selecteditems;
}


document.getElementById("done").addEventListener("click", function () {
    location.reload();
});