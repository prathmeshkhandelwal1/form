let x = 0;
display(x);

function display(n){
  let tabs = document.getElementsByClassName("tabs");
  tabs[n].style.display = "flex";

  if(n==0){
    document.getElementById("prev").style.display = "none"
    document.getElementById("next").value = 'next >';

  }
  if(n==1){
    document.getElementById("prev").style.display = "block"
    document.getElementById("next").value = 'next >';
  }
  if(n==2){
    document.getElementById("next").value = 'Submit';
  }
  if(n==3){
    document.getElementById("prev").style.display = "none"
    document.getElementById("next").style.display = "none"
  }
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener('click', function(){
  // console.log("hi");
  let tabs = document.getElementsByClassName("tabs");
  tabs[x].style.display = "none";
  x--;
  display(x);
})

next.addEventListener('click',function(){
  let tabs = document.getElementsByClassName("tabs");
  tabs[x].style.display = "none";
  x++;
  display(x);
})

function dropHandler(ev) {
  console.log('File(s) dropped');

  ev.preventDefault();

  if (ev.dataTransfer.items) {
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        var drag = document.getElementById("dragzone");
        drag.innerHTML = file.name;
      }
    }
  } else {
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }
}
function dragOverHandler(ev) {
  var drag = document.getElementById("dragzone");
  drag.classList.add("dragzone");
  console.log('File(s) in drop zone'); 

  ev.preventDefault();
}
function dragleave(){
  var drag = document.getElementById("dragzone");
  drag.classList.remove("dragzone");
}