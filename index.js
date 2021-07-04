

(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.btnUp');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();
// setTimeout

//   let cardTodo = document.querySelectorAll('.secOneAnalyseCard')
//   let secOneAnalyseCardClick = document.querySelectorAll('.secOneAnalyseCardClick')
//   console.log(cardTodo)

  

//   for( el in cardTodo) {
    
    
    
//   }


//   for (let li of list.querySelectorAll('li')) {
//     let span = document.createElement('span'); /* создание span */
//     span.classList.add('show'); /* добавление класса для span */
//      /* добавление класса для span */
//     li.prepend(span); /* вставить span внутри li */
//     span.append(span.nextSibling) /* присоединить к span следующий узел */
// }



list.onclick = function(event) {
    if (event.target.tagName != 'SPAN') return;

    let childrenList = event.target.parentNode.querySelector('ul');
    if (!childrenList) return;

    childrenList.classList.toggle('db')

    if (childrenList.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }

    else {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
    
}



