window.onload = function() {

  let rng1 = document.getElementById('rngOne');
  let con = document.getElementById('out');

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
    let checkBoxOne = document.getElementById('numStyle');
    let checkBoxTwo = document.getElementById('stringStyle');
    let checkBoxThere = document.getElementById('regStyle');

      if(checkBoxOne.checked && !checkBoxTwo.checked && !checkBoxThere.checked){
        for (let i = 0; i < rng1.value; i++)
        text += possible123.charAt(Math.floor(Math.random() * possible123.length));
        button.id = 'userButton1';
        return text;
      }

      else if (checkBoxTwo.checked && !checkBoxOne.checked && !checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleabc.charAt(Math.floor(Math.random() * possibleabc.length));
        button.id = 'userButton1';
        return text;
      }

      else if (checkBoxThere.checked && !checkBoxOne.checked && !checkBoxTwo.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleABC.charAt(Math.floor(Math.random() * possibleABC.length));
        button.id = 'userButton1';
        return text;
      }

      else if (checkBoxOne.checked && checkBoxTwo.checked && !checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleabc123.charAt(Math.floor(Math.random() * possibleabc123.length));
        button.id = 'userButton1';
        return text;
      }

      else if (checkBoxOne.checked && !checkBoxTwo.checked && checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleA12.charAt(Math.floor(Math.random() * possibleA12.length));
        button.id = 'userButton1';
        return text;
      }

      else if (checkBoxTwo.checked && !checkBoxOne.checked && checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleAbc.charAt(Math.floor(Math.random() * possibleAbc.length));
        button.id = 'userButton1';
        return text;
      }

      else if (checkBoxOne.checked && checkBoxTwo.checked && checkBoxThere.checked) {
        for (let i = 0; i < rng1.value; i++)
        text += possibleAb1.charAt(Math.floor(Math.random() * possibleAb1.length));
        button.id = 'userButton1';
        return text;
      }

      else{
        text+= "Выберите тип создания пароля!!"
        button.id = 'userButton';
      return text;
      }

  }
  //  кнопка для мобильной версии
  document.querySelector('#start').onclick = function gen(){
    con.id = 'outPassword';
    con.innerHTML = generate();
    CopyElement();
  }
  rng1.onclick = function gen() {
    con.id = 'outPassword';
    con.innerHTML = generate();
    CopyElement();
  };


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
    button.innerHTML = "Cкопировано"
    });
  }
}
