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
  ////////показать спрятать меню
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

}
