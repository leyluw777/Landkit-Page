const words = ["founders.", "designers.", "developers."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('typing').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 100);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('typing').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();


$(document).ready(function(){
    $('.slick-slider').slick({
        infinite: true,
        dots: false,
        nextArrow: $(".slick-next"),
        prevArrow: $('.slick-prev'),
        slidesToShow: 1,
        
    });
  });

  $(document).ready(function(){
    $('.slick-img').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
  });