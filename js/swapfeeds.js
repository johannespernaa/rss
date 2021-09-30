//Swaps div visibility

var swapFeeds;
var number;

function swapFeeds(number){
   d1 = document.getElementById('feed1fi');
   d2 = document.getElementById('feed1sv');
   d3 = document.getElementById('feed1en');
   d4 = document.getElementById('feed2fi');
   d5 = document.getElementById('feed2sv');
   d6 = document.getElementById('feed2en');
   d7 = document.getElementById('feed3fi');
   d8 = document.getElementById('feed3sv');
   d9 = document.getElementById('feed3en'); 
          
	switch (number) {
    case 0:
		d1.style.display = "block";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "block";
		d5.style.display = "none";
		d6.style.display = "none";
		d7.style.display = "block";
		d8.style.display = "none";
		d9.style.display = "none";
        break;
	
	case 1:
		d1.style.display = "none";
		d2.style.display = "block";
		d3.style.display = "none";
		d4.style.display = "none";
		d5.style.display = "block";
		d6.style.display = "none";
		d7.style.display = "none";
		d8.style.display = "block";
		d9.style.display = "none";
        break;

	case 2:
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "block";
		d4.style.display = "none";
		d5.style.display = "none";
		d6.style.display = "block";
		d7.style.display = "none";
		d8.style.display = "none";
		d9.style.display = "block";
        break;
		
	default:
		d1.style.display = "block";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "block";
		d5.style.display = "none";
		d6.style.display = "none";
		d7.style.display = "block";
		d8.style.display = "none";
		d9.style.display = "none";
        break;
	}
}