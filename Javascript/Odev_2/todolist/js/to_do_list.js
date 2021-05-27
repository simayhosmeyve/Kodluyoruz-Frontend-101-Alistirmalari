const form = document.querySelector('form')
const input = document.getElementById('item')
const button1 = document.getElementById('save')
const list = document.getElementById('list')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const message = document.getElementById('message') 

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    li.classList.add("before");
    li.innerHTML += "<span class='close' style='position: absolute; right: 150px; margin-top:10px;'><strong>X</strong></span>"
    
}
  
save.addEventListener('click', function (e) {
    e.preventDefault();
    if(input.value != ""){
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
    message.innerHTML ="";
    message.innerHTML += "Listeye Eklendi.";
    $("#mytoast").toast({ delay: 1500 });
    $("#mytoast").toast('show');}
    else{
        message.innerHTML ="";
        message.innerHTML += "Listeye boş ekleme yapamazsınız!";
        $("#mytoast").toast({ delay: 1500 });
        $("#mytoast").toast('show');
    }

});

data.forEach(item => {
    liMaker(item);
});

const li= document.querySelector('li');

li.addEventListener('click', function (e) {
    let item = document.querySelector("li");
    item.className = "checked";
});

  
