var date = document.getElementById ('#date');
var name = document.getElementById ('#name');
var description = document.getElementById ('#summernote');
var addButton = document.getElementById ("#add");
var saveEntry = document.getElementById ("#isOutput")
this.entries = [];

// function Diary (date, name, description){
//     this.dateInput = document.getElementById ('#date');
//     this.nameInput= document.getElementById ('#name');
//     this.descriptionInput = document.getElementById ('#summernote');
//     this.addButton = document.getElementById ('#add');
//     this.saveEntry = document.getElementById ('#isOutput');
//     this.setEvents();
// }
function setEvents(){
    this.addButton.onclick = (event) => {
            event.preventDefault();
            var entry = newEntry(date.value, name.value, description.value);
            this.entries.push(entry);
            this.saveEntry();
            console.log(entry)
    };
};

function saveEntry(){
   this.saveEntry.innerHTML = "";
   for (let i= 0; i< this.entries.length; i++){
       var entry = this.entries[i];
       this.saveEntry.innerHTML += `<h2>${entry.name}</h2>when: ${entry.date}<br>do:${entry.description}`;
   };
};