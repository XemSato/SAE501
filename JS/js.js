
// test


const descriptions = [
	{
	  title: "<h2 class='xDeux'>Vanille X Noix de Macadamia & baies sauvage</h2>",
	  text: ' <p>Plongez dans un <span class="red">univers de douceur </span> et de <span class="red">croquant</span> avec notre <span class="red">irrésistible</span> glace saveur vanille aux noix de macadamia.</p> <p>Chaque cuillère est une <span class="red">symphonie de saveurs</span>, une danse délicate entre la vanille <span class="red">veloutée</span> et le <span class="red">croquant</span> des noix de macadamia.</p>'
	},
	{
	  title: "<h2 class='xDeux'>Chocolat X Oréo</h2>",
	  text: "<p>La douceur de l'oréo mélanger à la puissance du chocolat, <span class='red'> un caractère</span> intense et fondant en bouche.</p>"
	},
	{
		title: "<h2 class='xDeux'>Café X Spéculoss et vanille</h2>",
		text: "<p>Une bonne glace au <span class='red'>spéculoss<span> sur un nid de vanille acompagné de café.</p>"
	  }
  ];
  
  const slider = document.querySelector(".items");
  const slides = document.querySelectorAll(".item");
  const button = document.querySelectorAll(".button");
  let title = document.querySelector(".xDeux");
  let text = document.querySelector(".margin>.description");
  
  let current = 0;
  let prev = 4;
  let next = 1;
  
  for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
  }
  
  const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
  
  const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
  
  const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;
  
	for (let i = 0; i < slides.length; i++) {
	  slides[i].classList.remove("active");
	  slides[i].classList.remove("prev");
	  slides[i].classList.remove("next");
	}
  
	if (next == 5) {
	  next = 0;
	}
  
	if (prev == -1) {
	  prev = 4;
	}
	
  
	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
  
	// Mettre à jour la description
	
	title.innerHTML = descriptions[current].title;
	text.innerHTML = descriptions[current].text;
  };

	