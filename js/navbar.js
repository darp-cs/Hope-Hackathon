/* Please insert your JS in here! */
const hamburgerIcon = document.querySelector(".hamburger--container")
const navbar = document.querySelector(".navbar")
hamburgerIcon.addEventListener("click", function(){
    navbar.classList.toggle("change")
})

/*script for the slide show*/
var i = 1;
	function changeImage() {
		if(i==1)
       		document.getElementById("slideimg").src="https://www.tripsavvy.com/thmb/UW_qE8-8J3rs-Alv7Hu2iZt34uA=/3865x2576/filters:fill(auto,1)/palace-of-westminster-in-london-at-sunset--872038342-5b9b082b46e0fb00501f5ddd.jpg";
		else if(i==2)
      		 document.getElementById("slideimg").src="https://s1.it.atcdn.net/wp-content/uploads/2015/08/2-London.jpg";
		else if(i==3)
      		 document.getElementById("slideimg").src="https://media.timeout.com/images/100644443/image.jpg";
      	else if(i==4)
      		 document.getElementById("slideimg").src="http://www.sussexscenes.co.uk/wp-content/uploads/2013/07/busy-london.jpg";
      	else if(i==5)
      		 document.getElementById("slideimg").src="http://www.technocrazed.com/wp-content/uploads/2015/12/London-wallpaper-42.jpg";
      		else if(i==6)
      		 document.getElementById("slideimg").src="https://i.ytimg.com/vi/hgLQR2SffkY/maxresdefault.jpg";
      		else if(i==7)
      		 document.getElementById("slideimg").src="https://i.ytimg.com/vi/PtWeqZsuzpE/maxresdefault.jpg";
	   
		i++;
		if(i==8)
		  i=1;
	}
function start(){
	var time = setInterval( "changeImage()", 3000); 
}
