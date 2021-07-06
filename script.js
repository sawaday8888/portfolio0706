document.getElementById("navbtn").onclick = function(){
   document.querySelector('html').classList.toggle('open');
}

// スライドショーテスト
 $(function(){
  $(".web-works").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrow: true,
    dots: true,
  });
  
  $(".game-works").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrow: true,
    dots: true,
  });

});
