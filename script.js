function preview(x){
	if(x==4){
		document.getElementsByClassName('preview')[0].innerHTML = "<img src='images/chrys.jpg' alt='Chrysanthemum'><div class='middle'><div class='text'>Chrysanthemum</div></div>";
	}

	else if(x==2){
		document.getElementsByClassName('preview')[0].innerHTML = "<img src='images/Lighthouse.jpg' alt='lighthouse'><div class='middle'><div class='text'>Lighthouse</div></div>";
	}

	else if(x==3){
		document.getElementsByClassName('preview')[0].innerHTML = "<img src='images/hyd.jpg' alt='Hydrangeas'><div class='middle'><div class='text'>Hydrangeas</div></div>";
	}

	else if(x==1){
		document.getElementsByClassName('preview')[0].innerHTML = "<img src='images/Koala.jpg' alt='Koala'><div class='middle'><div class='text'>Koala</div></div>";
	}

	else if(x==0){
		document.getElementsByClassName('preview')[0].innerHTML = "<img src='images/Desert.jpg' alt='Desert'><div class='middle'><div class='text'>Desert</div></div>";
	}
}
