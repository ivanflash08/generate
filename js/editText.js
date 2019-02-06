window.onload = function () {

  //header Menu

    let menu = document.querySelector('.menu');

    let menuBottom = menu.getBoundingClientRect().bottom + window.pageYOffset;
    window.onscroll = function() {
        if (document.documentElement.clientWidth > 982) {
          if (menu.style.opacity = '0' && window.pageYOffset < 10) {
            menu.style.opacity ='0';
          }
          else if (window.pageYOffset > 10) {
            menu.style.opacity ='1';
          }
         // console.log(window.pageYOffset);
        }

    }
      ////////показать спрятать меню/////////////
    document.querySelector('.hide').onclick = function () {
      nav.style.display ='none';
        menu.style.opacity ='0';
    }
    let nav = document.querySelector('nav');
    let showHide = document.querySelector('#menu').onclick =function toggle_visibility(){
        if (nav.style.display =='flex'){
            nav.style.display ='none';
            menu.style.opacity ='0';
          }
        else{
           nav.style.display= 'flex';
           menu.style.opacity ='1';
         }
       }

       // выбор одного чекбокса////
    inputs=document.getElementsByTagName("input");
    for(var i=0; i<inputs.length; i++){
      if(inputs[i].type=="checkbox"){
         inputs[i].onchange=function(){
            inputs=document.getElementsByTagName("input");
              for(var i=0;i<inputs.length;i++){
                if(inputs[i].type=="checkbox"){
                  inputs[i].checked=false;
                }
                  this.checked=true;
              }
          }
      }
    }

      // проверки чекбоксов//
  let input = document.querySelector('#userText');
  let len = document.querySelector('#symbol');
  let smallText = document.querySelector('#small');
  let large = document.querySelector('#large');
  let everyOne = document.querySelector('#everyOne');
  let res = document.querySelector('#resultReg');

  input.onkeyup = function() {
    transform();
    button.innerHTML = "Cкопировать";
      if(input.value == ""){
      button.id = 'userButton';
      }
      else {
        button.onclick = CopyElement();
        button.id = 'userButton1';
        smallText.onclick =  () =>  {
          res.innerHTML = input.value.toLowerCase();
          button.innerHTML = "Cкопировать";
        }
        large.onclick =  () =>  {
          res.innerHTML = input.value.toUpperCase();
          button.innerHTML = "Cкопировать";
        }
        everyOne.onclick = () => {
          for (var a = input.value , b = "", i = 0; i < a.length; i++) {
              b += " " != a[i] ? i && " " != a[i - 1] ? a[i] : a[i].toUpperCase() : " ";
              res.innerHTML = b;
              button.innerHTML = "Cкопировать";
            }
          }

        len.innerHTML = "Общее количество символов: " + input.value.length;
      }
    }

    function transform() {
    if (smallText.checked == true) {
      res.innerHTML = input.value.toLowerCase();
    }

    else if (large.checked == true) {
      // res.innerHTML = input.value.toUpperCase();
      res.innerHTML = input.value.toUpperCase();
    }

    else if (everyOne.checked == true) {
      // res.innerHTML = input.value;
    for (var a = input.value , b = "", i = 0; i < a.length; i++) {
          b += " " != a[i] ? i && " " != a[i - 1] ? a[i] : a[i].toUpperCase() : " ";

      res.innerHTML = b;
      }
// console.log(b);
    }
    else {
        res.innerHTML = input.value;
    }
  }

  var button = document.getElementById('userButton');
  function CopyElement() {
      button.addEventListener('click', function () {
      var ta = document.getElementById('resultReg');
      var range = document.createRange();
      range.selectNode(ta);
      window.getSelection().addRange(range);
      try {
        document.execCommand('copy');
      }
      catch(err) {
        console.log('Can`t copy, boss');
      }
      window.getSelection().removeAllRanges();
      button.innerHTML = "Cкопировано";
    });
  }
}
