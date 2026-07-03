document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.menu-btn');
  var nav=document.querySelector('nav.primary');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }
});
