/*mobile menu code*/

var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobile-menu");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

hamburger.addEventListener("click", function(){
    if (mobileMenu.style.display === "block"){
      mobileMenu.style.display = "none";
      line1.classList.remove('line1clicked');
      line2.classList.remove('line2clicked');
      line3.classList.remove('line3clicked');
    } else{
      mobileMenu.style.display = "block";
      line1.classList.add('line1clicked');
      line2.classList.add('line2clicked');
      line3.classList.add('line3clicked');
    }
});

var menuItem = document.getElementsByClassName("menu-item");

for (var i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function(){
		if (mobileMenu.style.display === "block"){
			mobileMenu.style.display = "none";
      line1.classList.remove("line1clicked");
      line2.classList.remove("line2clicked");
      line3.classList.remove("line3clicked");
		} else {
			mobileMenu.style.display = "block";
		}
	});

}

/*horizontal scroll for gallery section*/
var btnLeft = document.getElementById('prev-btn');
var btnRight = document.getElementById('next-btn');
let image = document.querySelector(".gal-image");
let scrollByWidth = image.clientWidth;
let gallery = document.getElementById('gallery-parent');

btnLeft.addEventListener('click', function(){
  gallery.scrollBy({left: -scrollByWidth, top: 0, behavior: 'smooth'});
});

btnRight.addEventListener('click', function(){
  gallery.scrollBy({left: scrollByWidth, top: 0, behavior: 'smooth'});
});



/*make the menu close after clicking menu item*/
