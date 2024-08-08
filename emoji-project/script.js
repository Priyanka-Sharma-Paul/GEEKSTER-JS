let searchemg = document.getElementById("search");
let displayEmg = document.getElementById("display-emoji");
let category = document.getElementById("category");


function loadCategory(value) {
    let categories =new Set(value.map(item => item.category));
    categories.forEach(e => {
        let option = document.createElement("option");
        option.innerText = e;
        option.value = e;
        category.append(option);
    });
}

function displayEmoji(value) {
    displayEmg.innerHTML = "";
    value.forEach(e => {
        let emoji_box = document.createElement("span");
        emoji_box.innerText = e.emoji;
        emoji_box.classList.add('emoji');
        displayEmg.append(emoji_box);

        let emoji_text = document.createElement("p");
        emoji_text.innerText = e.description;
        emoji_text.classList.add('emojiText');
        emoji_box.append(emoji_text);
    });
}

function filterEmoji() {
    let filteredData = emojiList;

    if(category.value != "all"){
        filteredData = filteredData.filter(e => e.category == category.value)
    }

    if(searchemg.value != ""){
        filteredData = filteredData.filter(e => {
            if (e.description.toLowerCase().includes(searchemg.value.toLowerCase())) {
                return true;
            }
            if (e.aliases.some(alias => alias.toLowerCase().startsWith(searchemg.value.toLowerCase()))) {
                return true;
            }
            if (e.tags.some(tag => tag.toLowerCase().startsWith(searchemg.value.toLowerCase()))) {
                return true;
            }
            return false;
        });
    }

    displayEmoji(filteredData);
};

window.onload = function() {
    displayEmoji(emojiList);
    loadCategory(emojiList);
}

searchemg.addEventListener('keyup', (event) => {
    filterEmoji();
});

category.addEventListener('change', (event) => {
    searchemg.value = "";
    filterEmoji();
});

displayEmg.addEventListener("click", (e) => {
    if (e.target.classList.contains("emoji")) {
        navigator.clipboard.writeText(e.target.innerText);
        alert("Copied to clipboard : " + e.target.innerText);
        console.log(e.target);
    }
});