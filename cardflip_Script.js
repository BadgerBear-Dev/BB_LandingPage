var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    borderRadius: '10%',
    rotate: 360,
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anime){
       playing = false;
    }
  });
});

anime ({
  targets: '.topBar',
  left: '20px',
  width: '100%',
  backgroundColor: '#000000',
  borderRadius: ['100%', '0%'],
  easing: 'easeInOutQuad',
  loop: false,
  autoplay: true
    
});