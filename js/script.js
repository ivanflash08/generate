window.onload = function() {

  let rng1 = document.getElementById('rngOne');
  let con = document.getElementById('outPassword');

  let checkBoxOne = document.getElementById('numStyle');
  let checkBoxTwo = document.getElementById('stringStyle');
  let checkBoxThere = document.getElementById('regStyle');
  let reloadIco = document.querySelector('.logoIco').onclick =function reload() {
    document.location.reload();
  }
  document.getElementById ('rngOne').oninput = gen;


  function gen(){
    rng1;
    let rng2 = document.getElementById('rngInfo').innerHTML = rng1.value;
  }

//проверка для вывода типа и длины пароля
function generate() {
    // console.log(rng1.value);
    let text = "";
    let possible123 = "0123456789";
    let possibleabc = "abcdefghijklmnopqrstuvwxyz";
    let possibleABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let possibleabc123 = "abcdefghijklmnopqrstuvwxyz0123456789";
    let possibleA12 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let possibleAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let possibleAb1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      if(checkBoxOne.checked && !checkBoxTwo.checked && !checkBoxThere.checked){
        for (let i = 0; i < rng1.value; i++)
        text += possible123.charAt(Math.floor(Math.random() * possible123.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else if (checkBoxTwo.checked && !checkBoxOne.checked && !checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleabc.charAt(Math.floor(Math.random() * possibleabc.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else if (checkBoxThere.checked && !checkBoxOne.checked && !checkBoxTwo.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleABC.charAt(Math.floor(Math.random() * possibleABC.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else if (checkBoxOne.checked && checkBoxTwo.checked && !checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleabc123.charAt(Math.floor(Math.random() * possibleabc123.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else if (checkBoxOne.checked && !checkBoxTwo.checked && checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleA12.charAt(Math.floor(Math.random() * possibleA12.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else if (checkBoxTwo.checked && !checkBoxOne.checked && checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleAbc.charAt(Math.floor(Math.random() * possibleAbc.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else if (checkBoxOne.checked && checkBoxTwo.checked && checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleAb1.charAt(Math.floor(Math.random() * possibleAb1.length));
        button.id = 'userButton1';
        con.style='color: black;';
        return text;
      }

      else{
        text+= 'Выберите тип создания пароля!';
        button.id = 'userButton';
        con.style = 'color: #dc3545eb';
        return text;
      }
  }


  var elements = document.querySelectorAll(".f");

  for (var i = 0; i < elements.length; i++) {
    elements[i].onchange = function(event){
      con.id = 'outPassword';
      con.innerHTML = generate();
      CopyElement();
      button.innerHTML = 'Скопировать';
    };
  }

  // копирование пароля по нажатию кнопки
  var button = document.getElementById('userButton');
  function CopyElement() {
    button.addEventListener('click', function () {
      var ta = document.getElementById('outPassword');
      var range = document.createRange();
      range.selectNode(ta);
      window.getSelection().addRange(range);
      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy, boss');
    }
    window.getSelection().removeAllRanges();
    button.innerHTML = "Cкопировано";
    });
  }

//header Menu

  let menu = document.querySelector('.menu');

  let menuBottom = menu.getBoundingClientRect().bottom + window.pageYOffset;
  window.onscroll = function() {
    if (document.documentElement.clientWidth > 982) {
       if (menu.classList.contains('fixed') && window.pageYOffset < 10) {
         menu.classList.remove('fixed');
       }
       else if (window.pageYOffset > 10) {
         menu.classList.add('fixed');
       }
       // console.log(window.pageYOffset);
     }
   }

////////показать спрятать меню
  document.querySelector('.hide').onclick = function () {
    nav.style.display ='none';
  }
  let headerHeight = document.querySelector('header');
  let nav = document.querySelector('nav');
  let showHide = document.querySelector('#menu').onclick =function toggle_visibility(){
      if (nav.style.display =='flex'){
          nav.style.display ='none';
          menu.classList.remove('fixed')
        }
      else{
         nav.style.display= 'flex';
         menu.classList.add('fixed')
       }
     }
     let response = document.querySelector.onresize = function () {
       if (response < 1000){
         alert('123');
       }
     }


}
