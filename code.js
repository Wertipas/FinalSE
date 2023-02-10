//********************************************************	
const swap= document.querySelector('.swap');
swap.onclick=function(){
	if(swap.innerText==='SEE MORE')
	{
		swap.innerText='SEE LESS';
	}
	else{
		swap.innerText='SEE MORE';
	}
	document.body.classList.toggle("about-swap");
}
//********************************************************	

//********************************************************	
var slideIndex = 1;
showDivs(slideIndex);
			
slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("badge");
				
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" white", "");
	}
				
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" white", "");
	}
	slideIndex++;
				
	if (slideIndex > x.length){
		slideIndex = 1;
	}
				
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " white";
	setTimeout(carousel, 5000); // Change image every 2 seconds
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("badge");
				
	if (n > x.length){
		slideIndex = 1;
	}
				
	if (n < 1){
		slideIndex = x.length;
	}
				
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
				
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" white", "");
	}
				
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " white";
}
//********************************************************	

//********************************************************	
function openText(itemName) {
  var i;
  var x = document.getElementsByClassName("textchange");
  var item= document.getElementById(itemName);
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  item.style.display = "block";
  
  var header = document.getElementById("bar");
  var btns = header.getElementsByClassName("button");
  
  for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
  }
}
//********************************************************

//********************************************************	
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//********************************************************	

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_wo017rr';
   const templateID = 'template_vkmn62d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Email sent successfully!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});
