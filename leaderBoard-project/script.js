let country = document.getElementById("country");

function loadCountry(countries) {
  countries.forEach((e) => {
    let option = document.createElement("option");
    option.innerText = e.name;
    option.value = e.name;
    country.append(option);
  });
}

window.onload = function () {
  loadCountry(allCountries);
};

const playersList = [];
const container = document.getElementById("container");
let button = document.querySelector("button");
button.addEventListener("click", addPlayer);

function addPlayer() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const country = document.getElementById("country").value;
  const score = document.getElementById("score").value;

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";

  const playerData = {
    name: firstName + " " + lastName,
    country: country,
    score: Number(score),
  };

  playersList.push(playerData);

  refreshList();
}

function refreshList() {
  if (playersList.length == 0) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }

  playersList.sort(
    (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
  );

  container.innerHTML = "";
  for (let index = 0; index < playersList.length; index++) {
    const player = playersList[index];

    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";

    const item1 = document.createElement("div");
    item1.className = "item";
    item1.innerHTML = player.name;
    scoreContainer.appendChild(item1);

    const item2 = document.createElement("div");
    item2.className = "item";
    item2.textContent = player.country;
    scoreContainer.appendChild(item2);

    const item3 = document.createElement("div");
    item3.className = "item";
    item3.textContent = player.score;
    scoreContainer.appendChild(item3);

    const group = document.createElement("div");
    group.className = "item group";

    const groupItem1 = document.createElement("div");
    groupItem1.className = "group-item";
    groupItem1.innerHTML = '<i class="fa-solid fa-trash"></i>';
    groupItem1.setAttribute("onclick", `deleteButtonHandler(${index})`);
    group.appendChild(groupItem1);

    const groupItem2 = document.createElement("div");
    groupItem2.className = "group-item";
    groupItem2.textContent = "-5";
    groupItem2.setAttribute("onclick", `decreaseScoreHandler(${index})`);
    group.appendChild(groupItem2);

    const groupItem3 = document.createElement("div");
    groupItem3.className = "group-item";
    groupItem3.textContent = "+5";
    groupItem3.setAttribute("onclick", `increaseScoreHandler(${index})`);
    group.appendChild(groupItem3);

    scoreContainer.appendChild(group);

    container.appendChild(scoreContainer);
  }
}

function increaseScoreHandler(index) {
  playersList[index].score += 5;
  refreshList();
}

function decreaseScoreHandler(index) {
  playersList[index].score -= 5;
  refreshList();
}

function deleteButtonHandler(idx) {
  playersList.splice(idx, 1);
  refreshList();
}
