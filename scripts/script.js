



	function huyy() {
  document.getElementById("banner").style.transition = "1s";
  document.getElementById("banner").style.opacity = "0";
  
}

setTimeout(huyy, 10000);


		var i=1;
		function slider(){
			i++;
			if(i%2==0){
				document.getElementById("left-menu").style.display = "block";
			}
			else{
				document.getElementById("left-menu").style.display = "none";
			}
		}

		var l=1;
		function st1(){
			l++;
			if(l%2==0){
				document.getElementById("ul1").style.display = "block";

				document.getElementById("im1").style.transform = "rotate(180deg)";
				document.getElementById("im1").style.transition = "0.2s";
			}
			else{
				document.getElementById("ul1").style.display = "none";
				document.getElementById("im1").style.transform = "rotate(0deg)";
				document.getElementById("im1").style.transition = "0.1s";
			}
		}

		var k=1;
		function st2(){
			k++;
			if(k%2==0){
				document.getElementById("ul2").style.display = "block";

				document.getElementById("im2").style.transform = "rotate(180deg)";
				document.getElementById("im2").style.transition = "0.2s";
			}
			else{
				document.getElementById("ul2").style.display = "none";
				document.getElementById("im2").style.transform = "rotate(0deg)";
				document.getElementById("im2").style.transition = "0.1s";
			}
		}

		function huy(){document.getElementById("banner").style.display = "none";}
