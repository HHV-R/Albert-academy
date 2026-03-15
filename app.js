let progress = localStorage.getItem("progress") || 0

update()

function completeCourse(name){

progress = parseInt(progress) + 20

save()

}

function save(){

localStorage.setItem("progress",progress)

update()

}

function update(){

document.getElementById("bar").style.width = progress + "%"

document.getElementById("percent").innerText = progress + "%"

}

function saveName(){

let name=document.getElementById("studentName").value

localStorage.setItem("studentName",name)

}
