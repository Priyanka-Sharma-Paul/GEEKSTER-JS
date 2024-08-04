let minimize = document.getElementById("icons");
let left_container = document.querySelector(".left-container");
let right_container = document.querySelector(".right-container");
let noteContainer = document.querySelector(".right-container-notes");
let textContainer = document.querySelector(".text-container");




minimize.addEventListener('click', function(){
    minimize.classList.toggle("minimized");
    left_container.classList.toggle("minimized");
    right_container.classList.toggle("maximized");
    setTimeout(function() {
        textContainer.classList.toggle("hidden");
    }, 500);
})

let textarea = document.getElementById("textarea");
let title = document.getElementById("title");
let color = document.getElementById("colorInput");

let bold = document.getElementById("bold");
bold.addEventListener('click', function(){
    bold.classList.toggle("active");
    textarea.classList.toggle("bold");
    title.classList.toggle("bold");
})

let italic = document.getElementById("italic");
italic.addEventListener('click', function(){
    italic.classList.toggle("active");
    textarea.classList.toggle("italic");
    title.classList.toggle("italic");
})

let underline = document.getElementById("underline");
underline.addEventListener('click', function(){
    underline.classList.toggle("active");
    textarea.classList.toggle("underline");
    title.classList.toggle("underline");
})

let add = document.getElementById("add");
add.addEventListener("click", () => {
    if (textarea.value == "" || title.value == "") {
      alert("Title or Note is empty!"); 
      return;
    }
    addNotes(title.value, textarea.value, color.value, bold.classList.contains("active"), italic.classList.contains("active"), underline.classList.contains("active"));
    title.value = "";
    textarea.value = "";
    bold.classList.remove("active");
    italic.classList.remove("active");
    underline.classList.remove("active");
    textarea.classList.remove("bold");
    title.classList.remove("bold");
    textarea.classList.remove("italic");
    title.classList.remove("italic");
    textarea.classList.remove("underline");
    title.classList.remove("underline");
    document.querySelector(".notesNotAdded").classList.add("hidden");
  });
  
  function addNotes(title, note, color, bold, italic, underline) {
    div1 = document.createElement("div");
    div1.innerHTML = `<p class="title">${title}</p><hr/><p>${note}</p> <button class="close" onclick="removeNote(event)"><i class="fa-solid fa-xmark"></i></button>`;
    div1.style.backgroundColor = `${color}`;
    div1.classList.add("notes");
    if(bold){
        div1.classList.add("bold");
    }
    if(italic){
        div1.classList.add("italic");
    }
    if(underline){
        div1.classList.add("underline");
    }
    noteContainer.appendChild(div1);
    noteContainer.classList.remove("hidden");
  }

  function removeNote(event){
    event.target.parentElement.parentElement.remove();
    if(document.querySelectorAll('.notes').length == 0){
        noteContainer.classList.add("hidden");
        document.querySelector(".notesNotAdded").classList.remove("hidden");
    }
  }