function Diary (date, name, description){
    this.date = date;
    this.name = name;
    this.description = description;
}
this.entries = [];

$(document).ready(function(){
    $("#form-control").submit (function(event){
        event.preventDefault();
        var date = document.getElementById ('#date').val();
        var name = document.getElementById ('#name').val();
        var description = document.getElementById ('#summernote').val();
        var entry = newEntry(date.value, name.value, description.value);
        this.entries.push(entry);

        var entries = [];
        var isOutput = document.getElementById ("#isOutput").val();
        for (var i=0; i < entries.length; i++){
        isOutput.innerHTML += '<h3>when: ${entry.date}</h3>${entry.name}<br>description:${entry.description}';
        }
    });
   
// $entry.forEach(myFunction);
//         document.getElementById("isOutput").innerHTML = txt;
//         function myFunction (date, name, description){
//             txt= txt + value + "<br>"
//         }
// document.addEventListener('DOMContentLoaded', ()=>{
// document.getElementById('add_button').addEventListener('submit, addEntry');
// });
});