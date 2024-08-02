const box = document.querySelector(".box");
const sound = document.getElementById("keypress-sound");
const history = document.getElementById("history");


document.addEventListener("keydown", (e) => {
    let keyName = e.keyCode === 32 ? "Space" : e.key;

    box.querySelector(".key-code").innerText = e.keyCode;
    box.querySelector(".key-name").innerText = keyName.toUpperCase();
    box.querySelector(".key span").innerText = keyName;
    box.querySelector(".code span").innerText = e.keyCode;  

    sound.currentTime = 0;
    sound.play();

    box.classList.add("active");
    const newItem = document.createElement('span');
    newItem.textContent = keyName;
    history.appendChild(newItem);
});