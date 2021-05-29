const form = document.querySelector('form')
const input = document.getElementById('item')
const button1 = document.getElementById('save')
const list = document.getElementById('list')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const message = document.getElementById('message') 
const li= document.querySelector('li')
const myli= document.getElementById('myli')

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

//Ekle butonuna tıkladığında liste elemanı oluşturulması için limaker kullanacağız.
const liMaker = (text) => {
    const li = document.createElement('li');
    //Kapama kısmı için içine span yerleştiriyoruz.
    const span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");

    li.id = "myli";
    span.className = "close";
    span.appendChild(txt);
    li.textContent = text;
    list.appendChild(li);
    //Daha sonra tasarım değişiklikleri yapabilmek için içine before class'ı yerleştiriyoruz.
    li.classList.add("before");
    li.appendChild(span);
    
}
  
save.addEventListener('click', function (e) {
    e.preventDefault();
    //Boş değer kontrolü
    if(input.value == "" || input.value.replace(/^\s+|\s+$/g, "").length == 0){
        message.innerHTML ="";
        message.innerHTML += "Listeye boş ekleme yapamazsınız!";
        //Toast ile kaybolan uyarı
        $("#mytoast").toast({ delay: 1500 });
        $("#mytoast").toast('show');
    }
    else{
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(input.value);
        //Değer girdikten sonra input barı sıfırlanıyor.
        input.value = "";
        message.innerHTML ="";
        message.innerHTML += "Listeye Eklendi.";
        $("#mytoast").toast({ delay: 1500 });
        $("#mytoast").toast('show');
    }

});

data.forEach(item => {
    liMaker(item);
});

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  //close[i] ile kapama butonları üzerinde gezebiliyoruz.
  close[i].onclick = function() {
    let li = this.parentElement;
    //tıklanan li elementini gizliyor
    li.style.display = "none";
    
    itemsArray.forEach(function(myli,index){
        if(itemsArray[index] + "\u00D7" == li.textContent){
          //splice ile istenen indexteki veri diziden ayrılıyor.
            itemsArray.splice(index,1);
            index--;
        }
    })
    localStorage.setItem("items",JSON.stringify(itemsArray));

  }
}


list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    //before classını checked ile değiştiriyoruz.
    e.target.classList.toggle('checked');
  }
}, false);